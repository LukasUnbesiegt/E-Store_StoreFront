import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { slidersSample } from "../../seeds/contents";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
class index extends Component {
	state = {
		value: 0
	};
	onChange = value => this.setState({ value });
	renderImages = () => {
		const { sliders } = this.props;
		if (sliders && sliders.length > 0) {
			return sliders.map(({ image, collection }) => {
				console.log("sliders", image);
				return (
					<img
						src={image}
						style={{
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							cursor: "pointer",
							objectFit: "fill",
							width: "100%",
							maxHeight:
								this.props.browser.orientation === "portrait"
									? "240px"
									: "500px"
						}}
						className="img-fluid"
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
						className=""
						style={{
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							cursor: "pointer",
							objectFit: "cover",
							width: "100%"
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
		return (
			<Fragment>
				<Carousel autoPlay={2300} animationSpeed={2000} infinite>
					{this.renderImages()}
				</Carousel>
				<Dots
					value={this.state.value}
					onChange={this.onChange}
					number={this.props.sliders ? this.props.sliders.length : 4}
				/>
				{/* <Slider {...settings}>{this.renderImages()}</Slider>; */}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	sliders: state.contents.sliders ? state.contents.sliders.sliders : [],
	browser: state.browser
});

const mapDispatchToProps = {
	push
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
