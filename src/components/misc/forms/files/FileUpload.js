import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { sendImage , deleteImage } from '../../../../actions/productsActions'
import styles from './FileUpload.module.css'




class FileUpload extends Component {



    constructor() {
        super();

        this.setUpReader()

        this.state = {

            selectedFile: null,
            initialImageBase64: '',
            imageBase64: '',
            crop: {},
            cropImage: {}

        }
    }


    setUpReader = () => {

        // set up read instance from FileReader Contructor
        this.reader = new FileReader();

        // load event from reader instance >>  
        this.reader.addEventListener('load', (event) => {
            const { initialImageBase64 } = this.state;

            const imageBase64 = event.target.result;

            if (initialImageBase64) {

                this.setState({
                    imageBase64: imageBase64
                })



            } else {
                this.setState({
                    imageBase64: imageBase64,
                    initialImageBase64: imageBase64

                })
            }

        })

    }

    onCropChange(crop) {
        this.setState({ crop });
    }

    onChangeHandler = (event) => {

        const selectedFile = event.target.files[0];

        if (selectedFile) {

            this.setState({
                initialImageBase64: '',
                selectedFile
            })

            this.reader.readAsDataURL(selectedFile)


        }


    }



    onCropCompleted = async (crop, pixelCrop) => {

        const { selectedFile, initialImageBase64 } = this.state;

        if (selectedFile && (pixelCrop.height > 0 && pixelCrop.width > 0)) {

            const image = new Image();
            image.src = initialImageBase64;

            const croppedImage = await getCroppedImg(image, pixelCrop, selectedFile.name)


            this.setState({ cropImage: croppedImage });

            this.reader.readAsDataURL(croppedImage)

        }




    }



    uploadImage = () => {

        const { cropImage } = this.state;


        if (cropImage) {

            console.log(cropImage);
            this.props.sendImage(cropImage)


        }

        console.log('uploaded');

    }


    onImageLoaded = (image) => {


        this.setState({
            crop: makeAspectCrop({
                x: 20,
                y: 20,
                aspect: 3 / 3,
                width: 70,
            } , image.width / image.height),
        });
    }


    renderPreviewImages = () => {

        const { images , imagesToEdit } = this.props;

        let imagesToShow = imagesToEdit ? imagesToEdit : images

        return imagesToShow.map((image , i ) => {


            return (

                <div
                key={i}
                
                >
                    <button
                        className="btn btn-sm btn-warning"
                        type="button"
                        onClick={
                            () => { this.props.deleteImage(image.public_id) }
                        }
                    >
                         delete
                    </button>
                    <img src={image.url} className="img-fluid p-2 m-2" /> 

                </div>
              
        
        
            
            )

    })



}



render() {

    const { crop, initialImageBase64 } = this.state;
    const { images } = this.props;

    return (



        <div className="container my-5">

            <h4 className="text-center">Upload Article Image</h4>

            <div className="row">

                <div className="col-lg-6">
                    <div class="form-group">

                        <input
                            type="file"
                            className="form-control-file"
                            accept='.jpg, .png, .jpeg'
                            onChange={this.onChangeHandler}

                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    {
                        initialImageBase64 &&
                        <button
                            className="btn btn-sm btn-success"
                            type="button"
                            onClick={this.uploadImage}
                        >add image
    
                            </button>

                    }

                </div>

            </div>

            <ReactCrop
                src={initialImageBase64}
                crop={crop}
                onChange={(crop) => this.onCropChange(crop)}
                onImageLoaded={(image) => this.onImageLoaded(image)}
                onComplete={(crop, pixelCrop) => this.onCropCompleted(crop, pixelCrop)} />




            {
                images && <div
                    className={`${styles.imageContainer}`}
            >{this.renderPreviewImages()}</div>

            }







        </div >
    )
}
}

const mapStateToProps = (state) => ({
    images: state.products.uploadedImages
})

const mapDispatchToProps = {
    sendImage ,
    deleteImage
}


export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);



function getCroppedImg(image, pixelCrop, fileName) {

    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
    );

    // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
        canvas.toBlob(file => {
            file.name = fileName;
            resolve(file);
        }, 'image/jpeg');
    });
}

