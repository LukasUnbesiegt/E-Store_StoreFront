import React, { Component, Fragment } from "react";
import styles from "./index.module.css";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/userActions";
import { push } from "connected-react-router";
import FormComp from "./FormComp/Form";
import { prodEndpoint, endpoint, REDIRECT_URL_PROD } from "../../../config";

let REDIRECT_URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: REDIRECT_URL_PROD;

class LoginRegisterForm extends Component {
	constructor(props) {
		super(props);
		this.receiver = React.createRef();
		this.state = {
			loading: false
		};
	}
	onSubmitHandler = data => {
		this.setState({
			loading: true
		});
		this.props.loginUser(data, async token => {
			console.log("token", token);
			await this.receiver.current.contentWindow.postMessage(
				token,
				REDIRECT_URL
			);
			// BUG - NOT REDIRECTING - TODO
			this.setState({
				loading: false
			});
			window.location.assign(REDIRECT_URL);
		});
	};

	render() {
		return (
			<Fragment>
				<div
					className="bg-white my-5 py-5 mx-5 px-5"
					style={{ borderRadius: "10px" }}
				>
					<FormComp
						submitCB={this.onSubmitHandler}
						loading={this.state.loading}
						errorsServer={
							this.props.errors.errors ? this.props.errors.errors : {}
						}
					/>
					<iframe
						src={REDIRECT_URL}
						width="20"
						height="20"
						style={{ display: "none" }}
						ref={this.receiver}
					>
						<p>Your browser does not support iframes.</p>
					</iframe>
					<div className="container text-center pt-3 mt-3">
						<a href="/" className="">
							Back to Home
						</a>
					</div>
				</div>
			</Fragment>
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
