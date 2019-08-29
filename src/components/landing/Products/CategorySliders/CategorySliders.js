import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
class index extends Component {
	renderImages = () => {
		const { categories } = this.props;

		if (categories) {
			return categories.map(({ image, _id, name }) => {
				return (
					<Fragment>
						<div className="d-flex flex-column">
							<img
								src={image}
								className="mx-1"
								style={{
									cursor: "pointer",
									width: "60px",
									height: "60px",
									objectFit: "contain"
								}}
								onClick={() => {
									this.props.handleFilters(_id, this.props.type);
								}}
							/>
							<span>{name}</span>
						</div>
					</Fragment>
				);
			});
		}
	};

	render() {
		const { categories } = this.props;

		const settings = {
			speed: 1500,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			arrow: true,
			lazyLoad: true
		};

		return (
			<Fragment>
				{/* <Slider {...settings}>{this.renderImages()}</Slider> */}
				<Carousel
					arrows
					infinite
					slidesPerPage={4}
					arrowLeft={
						<i
							class="fas fa-arrow-left"
							style={{ fontSize: "1.6rem", cursor: "pointer" }}
						/>
					}
					arrowRight={
						<i
							class="fas fa-arrow-right"
							style={{ fontSize: "1.6rem", cursor: "pointer" }}
						/>
					}
					addArrowClickHandler
					breakpoints={{
						1000: {
							// these props will be applied when screen width is less than 1000px
							slidesPerPage: 3,
							clickToChange: false,
							centered: false,
							arrows: true,
							infinite: true
						},
						500: {
							slidesPerPage: 3,
							slidesPerScroll: 3,
							clickToChange: false,
							centered: false,
							arrows: true,
							animationSpeed: 2000,
							infinite: true
						}
					}}
				>
					{this.renderImages()}
				</Carousel>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
