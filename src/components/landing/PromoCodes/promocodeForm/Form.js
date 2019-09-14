import { reduxForm, Field } from "redux-form";
import TextInput from "../../../misc/forms/inputs/TextInput";
import { UncontrolledTooltip } from "reactstrap";
import { globalStyle } from "../../../../config";
import React from "react";

function FormPromo({ handleSubmit, submitCallback, errorsServer }) {
	const renderErrors = () => {
		const errorsArr = Object.keys(errorsServer);
		return errorsArr.map(errName => {
			return (
				<span
					style={{
						color: "red"
					}}
				>
					{errorsServer[errName]}
				</span>
			);
		});
	};

	return (
		<form onSubmit={handleSubmit(submitCallback)}>
			<div
				className="d-flex"
				style={{
					display: "flex",
					justifyContent: "center"
				}}
			>
				<div className="m-2 p-2">
					<i className="ni ni-active-40" id="UncontrolledTooltipExample" />
					<UncontrolledTooltip
						placement="left"
						target="UncontrolledTooltipExample"
						style={{
							color: "#fff",
							backgroundColor: globalStyle.backgroundColor
						}}
					>
						please apply only when you finish shopping or you can't get full
						discount
					</UncontrolledTooltip>
				</div>

				<Field
					component={TextInput}
					name="promocode"
					placeholder="your promo code"
					styleFrom={{
						color: "black",
						backgroundColor: "#dee2e6"
					}}
				/>

				<button
					className="btn btn-sm ml-3 mb-3"
					style={{
						backgroundColor: globalStyle.backgroundColor,
						color: "#fff"
					}}
				>
					apply
				</button>
				<div className="m-2">{renderErrors()}</div>
			</div>
		</form>
	);
}

export default reduxForm({ form: "addpromo" })(FormPromo);
