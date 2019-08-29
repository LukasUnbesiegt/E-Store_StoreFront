import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../../actions/userActions";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { globalStyle } from "../../../config";
import { stat } from "fs";
export default function(ComposedClass) {
	class AuthenticationCheck extends Component {
		componentDidMount() {
			this.props.auth();
		}

		render() {
			if (!this.props.async.loading) {
				return (
					<ComposedClass
						{...this.props}
						user={this.props.user.userData}
						browser={this.props.browser}
						site={this.props.site.site}
						router={this.props.router}
					/>
				);
			} else {
				return (
					<div className="d-flex justify-content-center align-items-center h-100vh">
						<Loader
							type="Audio"
							color={globalStyle.backgroundColor}
							width={100}
							height={100}
						/>
					</div>
				);
			}
		}
	}

	const mapStateToProps = state => ({
		user: state.user,
		async: state.async,
		browser: state.browser,
		site: state.site,
		router: state.router
	});

	const mapDispatchToProps = {
		auth
	};

	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(AuthenticationCheck);
}
