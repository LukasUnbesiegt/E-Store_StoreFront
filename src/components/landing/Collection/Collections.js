import React, { Component, Fragment } from "react";
import SmallNav from "../../landing/SmallNav/SmallNav";
import Navigation from "../../navigation/Navigator";
import Authenticated from "../../misc/HOC/Authenticated";
import { connect } from "react-redux";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { getCollectProducts, addLike } from "../../../actions/productsActions";
import FooterBottom from "../footer/FooterBottom/FooterBottom";
import Product from "../../landing/Products/Product/Product";
import { globalStyle } from "../../../config";
const queryString = require("query-string");

class Collections extends Component {
	componentDidMount = () => {
		let parsed = queryString.parse(this.props.router.location.search);
		this.props.getCollectProducts(parsed.type, parsed.id);
	};
	renderProducts = () => {
		if (
			this.props.productsByCollection &&
			this.props.productsByCollection.products
		) {
			return this.props.productsByCollection.products.map((product, index) => {
				return (
					<div className="col-md-3" key={index}>
						<Product product={product} addLike={this.props.addLike} />;
					</div>
				);
			});
		}
	};

	render() {
		return (
			<Fragment>
				<SmallNav
					browser={this.props.browser}
					store={this.props.site && this.props.site.store}
				/>

				<Navigation user={this.props.user} />
				<div className="my-2 py-2">
					<div className="d-flex justify-content-center my-2 py-2">
						<h4 className="display-4 text-center mx-3 ">
							{this.props.productsByCollection
								? this.props.productsByCollection.name
								: "collection name"}
						</h4>
						{/* <Link
							className="mx-3 btn btn-sm"
							to="/products"
							style={{
								color: "inherit",
								cursor: "pointer",
								backgroundColor: globalStyle.backgroundColor
							}}
						>
							<i class="fas fa-arrow-circle-right mx-2" />
							All Products
						</Link> */}
					</div>

					<div className="container-fluid">
						<div className="row">{this.renderProducts()}</div>
					</div>
				</div>
				<Footer store={this.props.site && this.props.site.store} />
				<FooterBottom />
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	productsByCollection: state.products ? state.products.collectProducts : null
});

const mapDispatchToProps = { addLike };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authenticated(Collections, true));
