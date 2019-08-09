import React, { Component } from "react";
import styles from "./Form.module.css";
import { reduxForm, Field, FieldArray } from "redux-form";
import TextInput from "../../../misc/forms/inputs/TextInput";
import { Spinner } from "reactstrap";
const validate = values => {
	const errors = {};
	if (!values.email) {
		errors.email = "email is required";
	}

	if (!values.password) {
		errors.password = "password is required";
	}

	return errors;
};

class FormComp extends Component {
	render() {
		const {
			submitCB,
			handleSubmit,
			valid,
			pristine,
			submitting,
			errors,
			errorsServer
		} = this.props;

		const renderErrors = () => {
			const errorsArr = Object.keys(errorsServer);
			return errorsArr.map(errName => {
				return (
					<label
						style={{
							color: "red"
						}}
					>
						{errorsServer[errName]}
					</label>
				);
			});
		};

		return (
			<form onSubmit={handleSubmit(submitCB)}>
				<h4 className="display-4 py-3" style={{ color: "#fae14e" }}>
					EStore BH Admin
				</h4>
				<Field
					component={TextInput}
					placeholder="enter email"
					type="text"
					name="email"
					styleFrom={{
						color: "black"
					}}
				/>
				<Field
					component={TextInput}
					placeholder="enter password"
					type="password"
					name="password"
					styleFrom={{
						color: "black"
					}}
				/>

				<div>{renderErrors()}</div>
				<button
					type="submit"
					className="btn btn-block"
					style={{
						color: "white",
						backgroundColor: "#fae14e"
					}}
					disabled={submitting || pristine}
				>
					Login
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: "admin-login-register",
	validate
})(FormComp);
