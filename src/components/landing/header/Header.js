import React, { Component, Fragment, Suspense } from "react";
import { connect } from "react-redux";
import Sliders from "../HomeSliders/index";
import { Switch, Route } from "react-router-dom";
import { push } from "connected-react-router";
import Products from "../Products/Products";
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
import { isEmpty } from "../../../utils/isEmpty";
import { globalStyle } from "../../../config";
import { collectionsSample } from "../../seeds/contents";
import FeaturedProducts from "../Products/FeaturedProducts/FeaturedProducts";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import styles from "./Header.module.css";
import Loader from "react-loader-spinner";
// const Navigator = React.lazy(() => import("../../navigation/Navigator"));
import Navigator from "../../navigation/Navigator";
class Header extends Component {
	renderCollectionSections = () => {
		const { products } = this.props;

		if (products.collections && products.collections.length > 0) {
			return products.collections.map((collection, index) => {
				return (
					<div className="col-md-6 col-sm-12" key={index}>
						<CollectionSec collection={collection} push={this.props.push} />;
					</div>
				);
			});
		} else {
			return collectionsSample.map((collection, index) => {
				return (
					<div className="col-md-6 col-sm-12" key={index}>
						<CollectionSec collection={collection} push={this.props.push} />;
					</div>
				);
			});
		}
	};

	renderLoader = () => {
		return (
			<div className={`${styles.loadingStyle}`}>
				<Loader
					type="Puff"
					color="#00BFFF"
					height={100}
					width={100}
					timeout={4000} //3 secs
				/>
			</div>
		);
	};

	render() {
		const { products } = this.props;
		let categories, store;
		if (!isEmpty(this.props.site)) {
			store = this.props.site.store;
		}
		if (products.categories) {
			categories = products.categories;
		}

		return (
			<Fragment>
				<Suspense fallback={this.renderLoader()}>
					<SmallNav browser={this.props.browser} store={store} />
					<Navigator user={this.props.user} browser={this.props.browser} />
					<Sliders getProductsForShop={this.props.getProductsForShop} />
					<Featured />
					<div className="text-center container-fluid my-5 py-3 row">
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
				</Suspense>
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
)(Header);
