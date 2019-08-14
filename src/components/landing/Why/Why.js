import React, { Component, Fragment } from "react";
import Navigator from "../../navigation/Navigator";
import SmallNav from "../../landing/SmallNav/SmallNav";
import Footer from "../footer/Footer";
import { whys } from "../../seeds/contents";
import Authenticated from "../../misc/HOC/Authenticated";
import "./Why.css";

class Why extends Component {
	renderWhys = () => {
		return whys.map(why => {
			return (
				<div class="col-sm-6 col-lg-4 item">
					<i class={`icon ${why.logo}`} />
					<h3 class="name">{why.title}</h3>
					<p class="description">{why.paragraph}</p>
				</div>
			);
		});
	};
	render() {
		return (
			<Fragment>
				<SmallNav
					browser={this.props.browser}
					store={this.props.site && this.props.site.store}
				/>
				<Navigator user={this.props.user} />
				<div class="features-clean">
					<div class="container">
						<div class="intro">
							<h2 class="text-center">Why Us</h2>
							<p class="text-center">
								We are online shop which complete the below features or
								guidelines{" "}
							</p>
						</div>
						<div class="row features">{this.renderWhys()}</div>
					</div>
				</div>
				<Footer store={this.props.site && this.props.site.store} />
			</Fragment>
		);
	}
}

export default Authenticated(Why);
