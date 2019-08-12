import React, { Component } from "react";
import { connect } from "react-redux";
import { storeStatics } from "../../../config";
import ProductSlide from "../Products/ProductSlide/ProductSlide";

class Featured extends Component {
	render() {
		const products = [
			{
				name: "Product 1 ",
				price: 200,
				featured: true,
				images: [
					{
						url: ""
					}
				]
			},
			{
				name: "Product 1 ",
				price: 200
			},
			{
				name: "Product 1 ",
				price: 200
			},
			{
				name: "Product 1 ",
				price: 200
			},
			{
				name: "Product 1 ",
				price: 200
			}
		];

		return (
			<section className="py-5">
				<ProductSlide
					sectionTitle={storeStatics.featured.title}
					subtitle={storeStatics.featured.subtitle}
					products={this.props.featured || []}
				/>
			</section>
		);
	}
}
const mapStateToProps = state => ({
	featured: state.products ? state.products.featured : []
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Featured);
