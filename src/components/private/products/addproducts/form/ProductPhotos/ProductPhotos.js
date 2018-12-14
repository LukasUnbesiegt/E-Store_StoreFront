
import React, { Component, Fragment } from 'react'
import { toastr } from 'react-redux-toastr'
import DropZone from 'react-dropzone'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { connect } from 'react-redux'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


class ProductPhotos extends Component {


    state = {

        files: [],
        cropResult: null,
        image: {},
        fieldName: '',
        filesCropped: []

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

    loadImages = () => {


        let photosArr;
        if (this.state.image) {
            photosArr = [...this.state.filesCropped, this.state.cropResult]

        }

        this.setState({
            filesCropped: photosArr,

        })

        toastr.success('photo has been uploaded')



    }


    cancelCrop = () => {
        this.setState({
            files: [],
            image: {}
        })
        toastr.success('cancel success')

    }


    deleteAll = () => {
        this.setState({
            filesCropped: []
        })
        toastr.success('all photos deleted')
    }


    render() {

        console.log(this.state.filesCropped);





        return (




            <Fragment>

                <div className="container-fluid my-4">
                    <h3 className="text-center">Upload Photos</h3>
                    <div className="row">

                        <div className="col-md-6 col-lg-6">

                            <DropZone onDrop={this.onDrop} multiple={false}>
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
                                                aspectRatio={1}
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
                                                <button type="button"
                                                    class="btn btn-secondary"
                                                    onClick={() => { this.loadImages() }}
                                                >Add</button>

                                                <button
                                                    onClick={() => { this.cancelCrop() }}
                                                    type="button" class="btn btn-secondary">Cancel</button>
                                                <button
                                                    onClick={() => { this.deleteAll() }}
                                                    type="button" class="btn btn-secondary">Delete All</button>
                                            </div>
                                        </div>
                                    </div>
                                )


                            }





                        </div>


                    </div>


                    <div className="d-flex  mx-4 my-4 ">

                        {

                            this.state.filesCropped && this.state.filesCropped.map((file) => {

                                return (

                                    <div>
                                        <Card>
                                            <CardImg style={{ minHeight: '50px' , minWidth : '100px' }} src={file} alt="Card image cap" />

                                        </Card>
                                    </div>



                                )
                            })


                        }

                    </div>
                </div>



            </Fragment>
        )
    }
}




const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}




export default connect()(ProductPhotos);