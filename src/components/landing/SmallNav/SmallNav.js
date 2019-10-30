import React, { Component, Fragment } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { storeStatics } from "../../../config";
class SmallNav extends Component {
	renderLinks = () => {
		let isPadding =
			this.props.browser && this.props.browser.orientation === "portrait"
				? ""
				: "pr-1";
		return (
			<Fragment>
				<ul className="nav ml-auto">
					<NavItem>
						<NavLink>
							{" "}
							<i className={`fas fa-phone ${isPadding}`} />
							{this.props.store ? this.props.store.phone : "phone number"}
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							{" "}
							<i className={`ni ni-email-83 ${isPadding}`} />
							{this.props.store ? this.props.store.email : "email"}{" "}
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href={storeStatics.fbPageLink}>
							{" "}
							<i className={`fab fa-facebook fa-lg  ${isPadding}`} style={{}} />
						</NavLink>
					</NavItem>
				</ul>
			</Fragment>
		);
	};

	render() {
		let height =
			this.props.browser && this.props.browser.orientation === "portrait"
				? "100%"
				: "60px";

		let maxHeight =
			this.props.browser && this.props.browser.orientation === "portrait"
				? "60PX"
				: "30px";

		let navStyle = {
			backgroundColor: "#fff",
			height: height,
			maxHeight: maxHeight
		};

		return (
			<nav className="nav m-1" style={navStyle}>
				{this.renderLinks()}
			</nav>
		);
	}
}

export default SmallNav;
