import React, { Component } from "react";
import {
	ContactDiv,
	ContactInfo
} from "../../../styles/landing/contact/ContactForm";
import ContactFormComp from "./Form/Form";
import { globalStyle } from "../../../../config";
import "./ContactForm.css";

class ContactForm extends Component {
	submitHandler = data => {
		this.props.sendEnquiry(data);
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<ContactDiv bgcolor={globalStyle.backgroundColor}>
				<ContactInfo>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div id="contact-left my-1 py-1">
									<h3>
										{this.props.store ? this.props.store.name : "Store Name"}
									</h3>
									<strong>Headquarters:</strong>
									{this.props.store ? (
										<div id="phone-fax-email">
											<strong>Address: </strong>
											<span>
												{this.props.store.address.line1}{" "}
												{this.props.store.address.line2}
											</span>{" "}
											<br />
											<strong>Region: </strong>
											<span>
												{this.props.store.address.region} ,{" "}
												{this.props.store.address.country}
											</span>{" "}
											<br />
										</div>
									) : (
										"store sample address"
									)}

									<div id="phone-fax-email my-1 py-1">
										<strong>Phone:</strong>
										<span>
											{this.props.store
												? this.props.store.phone
												: "Store Phone "}
										</span>{" "}
										<br />
										<strong>Fax:</strong>
										<span>
											{this.props.store ? this.props.store.phone : "Store Fax"}{" "}
										</span>{" "}
										<br />
										<strong>Email:</strong>
										<span>
											{" "}
											{this.props.store
												? this.props.store.email
												: "Store Email"}{" "}
										</span>{" "}
										<br />
									</div>
									<ul className="social-list">
										<li>
											<a
												href={
													this.props.store
														? this.props.store.social.facebook
														: "/"
												}
												className="social-icon icon-white"
											>
												<i className="fab fa-facebook" />
											</a>
										</li>
										<li>
											<a
												href={
													this.props.store
														? this.props.store.social.youtube
														: "/"
												}
												className="social-icon icon-white"
											>
												<i className="fab fa-youtube" />
											</a>
										</li>
										<li>
											<a
												href={
													this.props.store
														? this.props.store.social.instagram
														: "/"
												}
												className="social-icon icon-white"
											>
												<i className="fab fa-instagram" />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-6">
								<div id="contact-right">
									<h3>Contact Us</h3>
									<ContactFormComp submitCallback={this.submitHandler} />
								</div>
							</div>
						</div>
					</div>
				</ContactInfo>
			</ContactDiv>
		);
	}
}

export default ContactForm;
