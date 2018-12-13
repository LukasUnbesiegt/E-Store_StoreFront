
import React, { Component, Fragment } from 'react'
import { toastr } from 'react-redux-toastr'
import DropZone from 'react-dropzone'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'



class ProductPhotos extends Component {


    state = {

        files: [],
        cropResult: null,
        image: {},
        fieldName: ''

    }


    onDrop = (files) => {

        this.setState({
            files: files,
            fileName: files[0].name
        })

    }



    cropImage = () => {

        if (typeof this.refs.cropper.getCroppedCanvas() === 'undefined') {

            return;

        }

        this.refs.cropper.getCroppedCanvas().toBlob((blob) => {

            let imgUrl = URL.createObjectURL(blob)
            this.setState({
                cropResult: imgUrl,
                image: blob
            })


            console.log(imgUrl);
        })


    }




    render() {







        return (




            <Fragment>

                <div className="container-fluid my-4">
                    <h3 className="text-center">Upload Photos</h3>
                    <div className="row">

                        <div className="col-md-6 col-lg-6">

                            <DropZone onDrop={this.onDrop} multiple>
                                <div style={{ paddingTop: '30px', textAlign: 'center' }}>
                                    <span>please upload or drop photos here</span>

                                </div>
                            </DropZone>


                        </div>
                        <div className="col-md-6 col-lg-6">



                            {
                                this.state.files[0] && (
                                    <div className="row">
                                        <div className="col-md-8">
                                            <Cropper
                                                style={{ height: 200, width: '100%' }}
                                                ref='cropper'
                                                src={this.state.files[0].preview}
                                                aspectRatio={16 / 9}
                                                viewMode={0}
                                                dragMode="move"
                                                guides={false}
                                                scalable={true}
                                                cropBoxMovable={true}
                                                cropBoxResizable={true}
                                                crop={this.cropImage}
                                            />

                                        </div>
                                        <div className="col-md-4">
                                            <div className="btn-group btn-group-sm" role="group" >
                                                <button type="button" class="btn btn-secondary">Left</button>
                                                <button type="button" class="btn btn-secondary">Middle</button>
                                                <button type="button" class="btn btn-secondary">Right</button>
                                            </div>
                                        </div>
                                    </div>
                                )


                            }





                        </div>






                    </div>
                </div>



            </Fragment>
        )
    }
}



export default ProductPhotos;