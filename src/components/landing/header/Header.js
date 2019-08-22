import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Sliders from "../HomeSliders/index";
import { Switch, Route } from "react-router-dom";
import { push } from "connected-react-router";
import Products from "../Products/Products";
import Navigator from "../../navigation/Navigator";
import Footer from "../footer/Footer";
import SmallNav from "../SmallNav/SmallNav";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import Promotions from "../Promotions/Promotions";
import Why from "../Why/Why";
import NewArrival from "../NewArrival/NewArrival";
import PeopleLoved from "../PeopleLoved/PeopleLoved";
import PromoCode from "../PromoCodes/PromoCode";
import TermsAndConds from "../TermsAndConds/TermsAndConds";
import ContactForm from "../ContactUs/ContactForm/ContactForm";
import AcceptablePayments from "../AcceptablePayments";
import FooterBottom from "../footer/FooterBottom/FooterBottom";
import Authenticated from "../../misc/HOC/Authenticated";
import { getProductsForShop } from "../../../actions/productsActions";
import CollectionSec from "../RenderCollections";
import CategoriesSec from "../RenderCategory";
import { collectionsSample } from "../../seeds/contents";
import FeaturedProducts from "../Products/FeaturedProducts/FeaturedProducts";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
class Header extends Component {
	sample = () => {
		console.log("sample");
	};
	renderCollectionSections = () => {
		const { products } = this.props;

		if (products.collections && products.collections.length > 0) {
			return products.collections.map(collection => {
				return <CollectionSec collection={collection} push={this.props.push} />;
			});
		} else {
			return collectionsSample.map(collection => {
				return <CollectionSec collection={collection} push={this.props.push} />;
			});
		}
	};

	render() {
		const { products } = this.props;
		let categories;

		if (products.categories) {
			categories = products.categories;
		}

		return (
			<Fragment>
				<SmallNav
					browser={this.props.browser}
					store={this.props.site && this.props.site.store}
				/>
				<Navigator user={this.props.user} />

				<Sliders getProductsForShop={this.props.getProductsForShop} />

				<Featured />

				<div className="text-center container-fluid my-5 py-3">
					{this.renderCollectionSections()}
				</div>
				<TermsAndConds />

				<ContactForm
					browser={this.props.browser}
					store={this.props.site && this.props.site.store}
					sendEnquiry={this.props.sendEnquiry}
				/>
				<GoogleMaps />

				<AcceptablePayments />

				<Footer store={this.props.site && this.props.site.store} />
				<FooterBottom store={this.props.site && this.props.site.store} />
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	products: state.products
});

const mapDispatchToProps = {
	getProductsForShop,
	push
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authenticated(Header));
