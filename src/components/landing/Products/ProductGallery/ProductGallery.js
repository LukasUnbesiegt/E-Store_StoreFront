import React, { Component, Fragment } from "react";

import styles from "./ProductGallery.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import defaultImg from "./placeholder.png";
import ImageGallery from "react-image-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
const sampleImages = [
	{
		original: `https://via.placeholder.com/400`,
		thumbnail: `https://via.placeholder.com/400`,
		src: `https://via.placeholder.com/400`
	},
	{
		original: `https://via.placeholder.com/400`,
		thumbnail: `https://via.placeholder.com/400`,
		src: `https://via.placeholder.com/400`
	},
	{
		original: `https://via.placeholder.com/400`,
		thumbnail: `https://via.placeholder.com/400`,
		src: `https://via.placeholder.com/400`
	}
];
class ProductGallery extends Component {
	state = { modalIsOpen: false };
	toggleModal = () => {
		this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
	};

	render() {
		const { images } = this.props;

		const modalImages = images.map(image => {
			return {
				original: image.url || defaultImg,
				thumbnail: image.url || defaultImg,
				src: image.url || defaultImg
			};
		});

		return (
			<Fragment>
				<ImageGallery
					items={modalImages.length > 0 ? modalImages : sampleImages}
					lazyLoad={true}
					showFullscreenButton={false}
					showPlayButton={false}
					onClick={() => {
						this.toggleModal();
					}}
				/>
				<ModalGateway>
					{this.state.modalIsOpen ? (
						<Modal onClose={this.toggleModal}>
							<Carousel
								views={modalImages.length > 0 ? modalImages : sampleImages}
							/>
						</Modal>
					) : null}
				</ModalGateway>
			</Fragment>
		);
	}
}

export default ProductGallery;

{
	/* {renderCorrectImage()}

				<div className={`${styles.imgThumbnails} m-auto my-2 py-2`}>
					{renderThumbnails()}
                </div> */
}

// const renderCorrectImage = () => {
// 	if (!this.state.correctIndex) {
// 		return (
// 			<div className={`${styles.imageGalleryContainer}`}>
// 				<img
// 					className={`img-fluid ${styles.mainImg}`}
// 					src={images[0] ? images[0].url : defaultImg}
// 					onClick={this.toggleModal}
// 				/>
// 			</div>
// 		);
// 	} else {
// 		let imageToShow = images.find(image => {
// 			return image.public_id === this.state.correctIndex;
// 		});

// 		return (
// 			<div className={`${styles.imageGalleryContainer}`}>
// 				<img
// 					className={`img-fluid ${styles.mainImg}`}
// 					src={imageToShow.url}
// 				/>
// 			</div>
// 		);
// 	}
// };

// const renderThumbnails = () => {
// 	return images.map((image, i) => {
// 		return (
// 			<div
// 				key={i}
// 				style={{
// 					cursor: "pointer"
// 				}}
// 				onClick={() => {
// 					this.handleThumbnail(image.public_id);
// 				}}
// 			>
// 				<img className="img-thumbnail img-fluid " src={image.url} />
// 			</div>
// 		);
// 	});
// };
