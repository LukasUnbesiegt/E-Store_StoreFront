import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { globalStyle } from "../../../config";

class Footer extends Component {
	render() {
		return (
			<div
				className={`${styles.footerDark}`}
				style={{
					backgroundColor: `${globalStyle.backgroundColor}`
				}}
			>
				<footer>
					<div className="container">
						<div className="row">
							<div className={`col-sm-6 col-md-3 ${styles.item}`}>
								<h3>Information</h3>
								<ul>
									<li>
										<NavLink to="/">Terms and Conditions</NavLink>
									</li>
									<li>
										<NavLink to="/">Delivery Information</NavLink>
									</li>
									<li>
										<NavLink to="/">Privacy and Policy</NavLink>
									</li>
								</ul>
							</div>

							<div className={`col-sm-6 col-md-3 ${styles.item}`}>
								<h3>E Commerce Store</h3>
								<p className="text-white">
									Welcome to{" "}
									{this.props.store ? this.props.store.name : "store"}, your
									reliable and convenient Online Shopping in Myanmar.{" "}
								</p>
							</div>
							<div className="col item social">
								<a href="#">
									<i className="icon ion-social-facebook" />
								</a>
								<a href="#">
									<i className="icon ion-social-twitter" />
								</a>
								<a href="#">
									<i className="icon ion-social-snapchat" />
								</a>
								<a href="#">
									<i className="icon ion-social-instagram" />
								</a>
							</div>
						</div>
						<p className={`${styles.copyright}`}>
							{this.props.store ? `${this.props.store.company}` : "sample name"}{" "}
							© 2019
						</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
