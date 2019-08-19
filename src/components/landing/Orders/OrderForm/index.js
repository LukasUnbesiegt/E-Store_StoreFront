import React, { Component } from "react";

import { formValueSelector } from "redux-form";
import FormOrder from "./Form/Form";
import { addOrder } from "../../../../actions/customerActions";
import { connect } from "react-redux";
import { push } from "connected-react-router";

class OrderForm extends Component {
	state = {
		country: "Myanmar",
		region: "Yangon",
		payment: {}
	};

	submitCallbackHandler = data => {
		let shippingAddress = {
			...data.shippingAddress,
			country: this.state.country,
			region: this.state.region
		};

		if (this.props.cartItems) {
			let order = {
				shippingAddress,
				localDelivery: data.localDelivery,
				payment: this.state.payment,
				cart: this.props.cartItems,
				desireDate: data.desireDate
			};
			this.props.addOrder(order);
		}
	};

	chooseLocalPayment = payment => {
		this.setState({
			payment: payment
		});
	};

	selectCountry = val => {
		this.setState({ country: val });
	};

	selectRegion = val => {
		this.setState({ region: val });
	};

	render() {
		console.log(this.state.payment);
		let deliveries;
		if (this.props.deliveries) {
			deliveries = this.props.deliveries.map(delivery => {
				return {
					key: `${delivery.town} : ${delivery.township} = ${delivery.price}`,
					value: delivery._id
				};
			});
		}

		return (
			<div className="container">
				<FormOrder
					submitCallback={this.submitCallbackHandler}
					deliveries={deliveries || []}
					selectCountry={val => {
						this.selectCountry(val);
					}}
					selectRegion={val => {
						this.selectRegion(val);
					}}
					country={this.state.country}
					region={this.state.region}
					site={this.props.site}
					chooseLocalPayment={this.chooseLocalPayment}
					totalPrice={this.props.totalPrice}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		deliveries: state.settings.deliveries,
		cartItems: state.products.cartItems,
		site: state.site ? state.site.site : null,
		totalPrice: state.products.cartItems
			? state.products.cartItems.totalPrice
			: 0
	};
};

const mapDispatchToProps = {
	addOrder,
	push
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderForm);
