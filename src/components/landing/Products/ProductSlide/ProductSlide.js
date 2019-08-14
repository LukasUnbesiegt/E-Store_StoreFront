import React, { Component, Fragment } from "react";
import Slider from "react-slick";

import Product from "../Product/Product";

import { connect } from "react-redux";

class ProductSlide extends Component {
	render() {
		console.log("products", this.props.products);
		const settings = {
			speed: 2000,
			autoplaySpeed: 3000,
			slidesToShow: 4,
			slidesToScroll: 4,

			autoplay: true,

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
		const renderProducts = () => {
			return this.props.products.map((product, index) => {
				return (
					<div className="mx-3 px-2">
						<Product product={product} />;
					</div>
				);
			});
		};

		return (
			<Fragment>
				<h3 className="text-center display-4">{this.props.sectionTitle}</h3>
				<p className="text-muted text-center pb-5">{this.props.subtitle}</p>

				<div className="container">
					<Slider {...settings}>{renderProducts()}</Slider>
				</div>
			</Fragment>
		);
	}
}

export default ProductSlide;
