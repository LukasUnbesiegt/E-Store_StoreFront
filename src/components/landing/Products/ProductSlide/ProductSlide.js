import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import Product from "../Product/Product";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { connect } from "react-redux";

class ProductSlide extends Component {
	render() {
		const renderProducts = () => {
			return this.props.products.map((product, index) => {
				return (
					<div className="mx-3 px-2" key={index}>
						<Product product={product} />
					</div>
				);
			});
		};

		return (
			<Fragment>
				<h3 className="text-center display-4">{this.props.sectionTitle}</h3>
				<p className="text-muted text-center pb-5">{this.props.subtitle}</p>

				<div className="container">
					{/* <Slider {...settings}>{renderProducts()}</Slider> */}
					<Carousel
						slidesPerPage={3}
						infinite
						// autoPlay={2300}
						animationSpeed={1500}
						arrowLeft={
							<i
								className="fas fa-arrow-left"
								style={{ fontSize: "1.6rem", cursor: "pointer" }}
							/>
						}
						arrowRight={
							<i
								className="fas fa-arrow-right"
								style={{ fontSize: "1.6rem", cursor: "pointer" }}
							/>
						}
						addArrowClickHandler
						centered
						breakpoints={{
							1000: {
								// these props will be applied when screen width is less than 1000px
								slidesPerPage: 2,
								clickToChange: false,
								centered: false,
								arrows: true,
								infinite: true
							},
							500: {
								slidesPerPage: 1,
								slidesPerScroll: 1,
								clickToChange: false,
								centered: false,
								arrows: true,
								animationSpeed: 2000,
								infinite: true
							}
						}}
					>
						{renderProducts()}
					</Carousel>
				</div>
			</Fragment>
		);
	}
}

export default ProductSlide;
