import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
	getProductsFeatured
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
import ProductsByCollection from "./components/landing/Products/Collection/Collection";
import AboutUs from "./components/landing/Why/Why";
import PromoCollections from "./components/landing/Products/OnSale/OnSale";
import OnSale from "./components/landing/Products/OnSale/OnSale";
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
		this.props.getProductsFeatured();
	};

	render() {
		return (
			<div>
				<ModalManager />

				<Switch>
					<Route
						exact
						render={props => <Header sendEnquiry={this.props.sendEnquiry} />}
						path="/"
					/>
					<Route
						render={props => <ProductDetails user={this.props.userData} />}
						path="/pdetails"
					/>
					<Route render={props => <Products />} path="/products" />
					<Route
						render={props => <ProductsByCollection />}
						path="/collection/:id"
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
	}
}

const mapStateToProps = state => {
	return {
		userData: state.user ? state.user.userData : null
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
	getProductsFeatured
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Routes);
