import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import FooterBottom from "../footer/FooterBottom/FooterBottom";
import SmallNav from "../SmallNav/SmallNav";
import Navigator from "../../navigation/Navigator";
import CheckOut from "./CheckOut/CheckOut";
import { getCartQty, removeCartItem } from "../../../actions/productsActions";
import { connect } from "react-redux";
import styles from "./Carts.module.css";
import PromoCodeForm from "../PromoCodes/promocodeForm/PromoCode";
import Authenticated from "../../misc/HOC/Authenticated";
import { isEmpty } from "../../../utils/isEmpty";
import { globalStyle } from "../../../config";
import CheckOutImg from "./img/checkout.svg";
class Carts extends Component {
	componentDidMount = () => {
		this.props.getCartQty();
	};

	render() {
		const renderCheckOutBtn = () => {
			if (this.props.cart && this.props.cart.items.length > 0) {
				return (
					<div>
						<Link
							className="btn  btn-block"
							to="/orders"
							style={{ backgroundColor: `${globalStyle.backgroundColor}` }}
						>
							Ready to checkout
							<i class="ni ni-bold-right ml-2" style={{ fontSize: "20px" }} />
						</Link>
					</div>
				);
			} else {
				return (
					<div className="text-center">
						<h4>No Items Now</h4>
						<img
							style={{
								width: "200px",
								height: "200px"
							}}
							className="img-fluid"
							src={CheckOutImg}
						/>
					</div>
				);
			}
		};

		const renderPromoBtn = () => {
			if (this.props.cart && this.props.cart.items.length > 0) {
				return <PromoCodeForm />;
			}
		};

		const { cart } = this.props;

		return (
			<Fragment>
				<SmallNav
					browser={this.props.browser}
					store={this.props.site && this.props.site.store}
				/>
				<Navigator user={this.props.user} />

				<div className="container">
					<div className="py-3 text-center">
						<h2>Checkout and Carts</h2>
						<p className="lead">
							Happy Shopping! ready to Checkout ? or{" "}
							<Link to="/products">shop more</Link>
						</p>
					</div>

					<div
						className={styles.totalContainer}
						style={{ backgroundColor: `${globalStyle.backgroundColor}` }}
					>
						<span className="">Total Price : {cart && cart.totalPrice}</span>

						<span className="">
							Total Quantity : {cart && cart.totalQuantity}
						</span>
					</div>

					<div className="">{renderPromoBtn()}</div>

					{renderCheckOutBtn()}
					<CheckOut
						items={cart ? cart.items : []}
						cartItemDelete={this.props.removeCartItem}
					/>
				</div>

				<Footer store={this.props.site && this.props.site.store} />
				<FooterBottom store={this.props.site && this.props.site.store} />
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	cart: state.products.cartItems
});

const mapDispatchToProps = {
	getCartQty,
	removeCartItem
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authenticated(Carts));
