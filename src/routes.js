import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import {
	getSiteSettings,
	getSliders,
	getFAQs
} from "./actions/siteSettings/siteSettings";
import {
	getCategories,
	getBrands,
	getCartQty,
	getCollections,
	getProductsByCat,
	getProductsFeatured,
	getCollectProducts,
	getProductsForShop
} from "./actions/productsActions";
import { getOrdersById, sendEnquiry } from "./actions/customerActions";
import { getDeliveries } from "./actions/settingsActions";
import { auth } from "./actions/userActions";
import Header from "./components/landing/header/Header";
import Products from "./components/landing/Products/Products";
import Orders from "./components/landing/Orders/Orders";
import Carts from "./components/landing/Carts/Carts";
import LoginCustomer from "./components/landing/CustomerAccount/LoginRegister/LoginRegister";
import LoginAdmin from "./components/login-register/index";
import NotFound from "./components/landing/NotFound";
import ContactUs from "./components/landing/ContactUs/ContactUs";
import ProductDetails from "./components/landing/Products/ProductDetails/ProductDetails";
import ModalManager from "./components/misc/modalManager/modalManager";
import MyAccount from "./components/landing/CustomerAccount/Account";
import Account from "./components/landing/CustomerAccount/Account";
import ProductsByCollection from "./components/landing/Collection/Collections";
import AboutUs from "./components/landing/Why/Why";
import PromoCollections from "./components/landing/Products/OnSale/OnSale";
import OnSale from "./components/landing/Products/OnSale/OnSale";
import { globalStyle } from "./config";
import Loader from "react-loader-spinner";
class Routes extends Component {
	componentDidMount = () => {
		this.props.getCategories();
		this.props.getBrands();
		this.props.getDeliveries();
		this.props.getCollections();
		this.props.getSiteSettings();
		this.props.getCartQty();
		this.props.getSliders();
		this.props.getFAQs();
		this.props.auth();
		this.props.getProductsFeatured();
	};

	render() {
		let storeName;

		if (this.props.site.site && this.props.site.site.store) {
			storeName = this.props.site.site.store.name;
		}

		if (!this.props.async.loading) {
			return (
				<div>
					<Helmet>
						<title>{storeName || "Sample Store"}</title>
					</Helmet>
					<ModalManager />

					<Switch>
						<Route
							exact
							render={props => (
								<Header
									sendEnquiry={this.props.sendEnquiry}
									user={this.props.user.userData}
									browser={this.props.browser}
									site={this.props.site.site}
									router={this.props.router}
								/>
							)}
							path="/"
						/>
						<Route
							render={props => <ProductDetails user={this.props.userData} />}
							path="/pdetails"
						/>
						<Route render={props => <Products />} path="/products" />
						<Route
							render={props => (
								<ProductsByCollection
									getCollectProducts={this.props.getCollectProducts}
								/>
							)}
							path="/collection"
						/>
						<Route render={props => <OnSale />} path="/onsale" />
						<Route render={props => <AboutUs />} path="/about" />
						<Route render={props => <Orders />} path="/orders" />
						<Route render={props => <Carts />} path="/carts" />
						<Route render={props => <ContactUs />} path="/storeinfo" />
						<Route render={props => <Account />} path="/account" />
						<Route render={props => <LoginCustomer />} path="/customer-login" />
						<Route render={props => <LoginAdmin />} path="/admin" />
						<Route component={NotFound} />
					</Switch>
				</div>
			);
		} else {
			return (
				<div className="d-flex justify-content-center align-items-center h-100vh">
					<Loader
						type="Audio"
						color={globalStyle.backgroundColor}
						width={100}
						height={100}
					/>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		userData: state.user ? state.user.userData : null,

		products: state.products,
		user: state.user,
		async: state.async,
		browser: state.browser,
		site: state.site,
		router: state.router
	};
};

const mapDispatchToProps = {
	getCategories,
	getBrands,
	getCollections,
	getCartQty,
	getSliders,
	getDeliveries,
	getOrdersById,
	getSiteSettings,
	getProductsByCat,
	sendEnquiry,
	getFAQs,
	auth,
	getProductsFeatured,
	getCollectProducts
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Routes);
