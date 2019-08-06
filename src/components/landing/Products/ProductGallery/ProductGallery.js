import React, { Component, Fragment } from 'react'

import styles from './ProductGallery.module.css'
import defaultImg from './placeholder.png'
import Carousel, { Modal, ModalGateway } from 'react-images';


class ProductGallery extends Component {


    state = {


        correctIndex: null,
        modalIsOpen: false

    }

    toggleModal = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    }



    handleThumbnail = (id) => {


        this.setState({
            correctIndex: id
        })
    }



    render() {

        const { images } = this.props;

        const modalImages = images.map((image) => {

            return {
                src: image.url || ''
            }
        })

        const renderCorrectImage = () => {



            if (!this.state.correctIndex) {

                return <div className={`${styles.imageGalleryContainer}`}>

                    <img
                        className={`img-fluid ${styles.mainImg}`}
                        src={images[0] ? images[0].url : defaultImg}
                        onClick={this.toggleModal}

                    />

                </div>

            } else {


                let imageToShow = images.find((image) => {
                    return image.public_id === this.state.correctIndex
                })


                return <div className={`${styles.imageGalleryContainer}`}>

                    <img
                        className={`img-fluid ${styles.mainImg}`}

                        src={imageToShow.url}

                    />

                </div>

            }


        }


        const renderThumbnails = () => {


            return images.map((image, i) => {

                return <div
                    key={i}
                    style={{
                        cursor: 'pointer'
                    }}
                    onClick={() => { this.handleThumbnail(image.public_id) }}
                >

                    <img
                        className="img-thumbnail img-fluid "
                        src={image.url}


                    />

                </div>


            })


        }

        return (


            <Fragment >

                <ModalGateway>
                    {this.state.modalIsOpen ? (
                        <Modal onClose={this.toggleModal}>
                            <Carousel views={modalImages} />
                        </Modal>
                    ) : null}
                </ModalGateway>
                {renderCorrectImage()}

                <div
                    className={`${styles.imgThumbnails} m-auto my-2 py-2`}
                >

                    {renderThumbnails()}


                </div>



            </Fragment>
        )
    }
}




export default ProductGallery;