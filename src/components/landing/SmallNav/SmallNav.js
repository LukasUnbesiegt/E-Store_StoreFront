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
				<ul className="nav ml-auto m-2 p-2">
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

		let navStyle = {
			backgroundColor: "#fff",
			height: height
		};

		return (
			<nav className="nav" style={navStyle}>
				{this.renderLinks()}
			</nav>
		);
	}
}

export default SmallNav;
