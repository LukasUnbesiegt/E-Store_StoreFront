import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { slidersSample } from "../../seeds/contents";

class index extends Component {
	renderImages = () => {
		const { sliders } = this.props;
		if (sliders && sliders.length > 0) {
			return sliders.map(({ image, collection }) => {
				return (
					<img
						src={image}
						className="img-fluid"
						style={{
							cursor: "pointer",
							objectFit: "cover"
						}}
						onClick={() => {
							this.props.getProductsForShop(1, { collections: [collection] });
						}}
					/>
				);
			});
		} else {
			return slidersSample.map(({ image, collection }) => {
				return (
					<img
						src={image}
						className="img-fluid"
						style={{
							cursor: "pointer",
							objectFit: "cover"
						}}
						onClick={() => {
							this.props.getProductsForShop(1, { collections: [collection] });
						}}
					/>
				);
			});
		}
	};

	render() {
		const settings = {
			speed: 2000,
			autoplaySpeed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			dots: true,
			arrow: true,

			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};

		return <Slider {...settings}>{this.renderImages()}</Slider>;
	}
}

const mapStateToProps = state => ({
	sliders: state.contents.sliders ? state.contents.sliders.sliders : []
});

const mapDispatchToProps = {
	push
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
