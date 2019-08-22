import React, { Component, Fragment } from "react";
import SmallNav from "../../SmallNav/SmallNav";
import Navigation from "../../../navigation/Navigator";
import Authenticated from "../../../misc/HOC/Authenticated";
import { connect } from "react-redux";
import Footer from "../../footer/Footer";
import { getCollectProducts } from "../../../../actions/productsActions";
import FooterBottom from "../../footer/FooterBottom/FooterBottom";
const queryString = require("query-string");

class Collections extends Component {
	componentDidMount() {
		let parsed = queryString.parse(this.props.router.location.search);
		console.log("parse queries", parsed);
		if (parsed) {
			this.props.getCollectProducts(parsed.type, parsed.id);
		}
	}

	render() {
		return (
			<Fragment>
				<SmallNav
					browser={this.props.browser}
					store={this.props.site && this.props.site.store}
				/>
				<Navigation user={this.props.user} />
				<div className="my-2 py-2">
					<h3 className="text-center display-4 my-2 py-2">
						Collection Page coming soon
					</h3>
				</div>
				<Footer store={this.props.site && this.props.site.store} />
				<FooterBottom />
			</Fragment>
		);
	}
}

export default Authenticated(Collections, true);
