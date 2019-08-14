import React, { Component, Fragment } from "react";
import SmallNav from "../../SmallNav/SmallNav";
import Navigation from "../../../navigation/Navigator";
import Authenticated from "../../../misc/HOC/Authenticated";
import Footer from "../../footer/Footer";
import FooterBottom from "../../footer/FooterBottom/FooterBottom";

class OnSale extends Component {
	render() {
		return (
			<Fragment>
				<SmallNav
					browser={this.props.browser}
					store={this.props.site && this.props.site.store}
				/>
				<Navigation user={this.props.user} />
				<div className=" my-2 py-2 h-100 d-flex justify-content-center align-items-center flex-column m-3">
					<div>
						<h4>Currently No Sale Promotions . Come here Later :) </h4>
					</div>
					<div>
						<img
							className="img-fluid"
							style={{
								width: "200px",
								objectFit: "cover"
							}}
							src="https://res.cloudinary.com/heliosbots/image/upload/v1565818183/no-shopping-cart_fvz8ts.png"
						/>
					</div>
				</div>
				<Footer store={this.props.site && this.props.site.store} />
				<FooterBottom />
			</Fragment>
		);
	}
}

export default Authenticated(OnSale);
