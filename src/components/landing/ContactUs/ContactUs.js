import React, { Component, Fragment } from "react";
import SmallNav from "../SmallNav/SmallNav";

import Navigator from "../../navigation/Navigator";
import Footer from "../footer/Footer";
import Authenticated from "../../misc/HOC/Authenticated";
import { connect } from "react-redux";

class ContactUs extends Component {
	render() {
		return (
			<Fragment>
				<SmallNav
					browser={this.props.browser}
					store={this.props.site && this.props.site.store}
				/>
				<Navigator user={this.props.user} />

				<section>
					<h3>About Store</h3>
				</section>

				<Footer />
			</Fragment>
		);
	}
}

export default Authenticated(ContactUs, true);
