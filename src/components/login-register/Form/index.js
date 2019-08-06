import React, { Component } from "react";
import styles from "./index.module.css";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/userActions";
import { push } from "connected-react-router";
import FormComp from "./FormComp/Form";
import { prodEndpoint, endpoint } from "../../../config";

const REDIRECT_URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://admin.estorebkh.com";

class LoginRegisterForm extends Component {
	constructor(props) {
		super(props);
		this.receiver2 = React.createRef();
	}
	onSubmitHandler = data => {
		this.props.loginUser(data, token => {
			console.log("token", token);
			var receiver = this.receiver2.current.contentWindow;
			this.receiver2.current.contentWindow.postMessage(token, REDIRECT_URL);
			window.location.assign(REDIRECT_URL);
		});
	};

	render() {
		return (
			<div
				className="bg-white my-5 py-5 mx-5 px-5"
				style={{ borderRadius: "10px" }}
			>
				<FormComp
					submitCB={this.onSubmitHandler}
					errorsServer={
						this.props.errors.errors ? this.props.errors.errors : {}
					}
				/>

				<div className="container text-center pt-3 mt-3">
					<a href="/" className="">
						Back to Home
					</a>
				</div>
				<iframe
					src={REDIRECT_URL}
					width="500"
					height="200"
					style={{ display: "none" }}
					ref={this.receiver2}
				>
					<p>Your browser does not support iframes.</p>
				</iframe>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	errors: state.errors,
	loading: state.async.loading
});

const mapDispatchToProps = {
	loginUser,
	push
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginRegisterForm);
