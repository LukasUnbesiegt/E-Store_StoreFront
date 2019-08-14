import React, { Component, Fragment } from "react";
import SmallNav from "../../SmallNav/SmallNav";
import Navigation from "../../../navigation/Navigator";
import Authenticated from "../../../misc/HOC/Authenticated";
import Footer from "../../footer/Footer";
import FooterBottom from "../../footer/FooterBottom/FooterBottom";
class Collections extends Component {
	render() {
		return (
			<Fragment>
				<SmallNav
					browser={this.props.browser}
					store={this.props.site && this.props.site.store}
				/>
				<Navigation user={this.props.user} />
				<div>
					<h3>Collection</h3>
					<p>No Products in this collection</p>
				</div>
				<Footer store={this.props.site && this.props.site.store} />
				<FooterBottom />
			</Fragment>
		);
	}
}

export default Authenticated(Collections);
