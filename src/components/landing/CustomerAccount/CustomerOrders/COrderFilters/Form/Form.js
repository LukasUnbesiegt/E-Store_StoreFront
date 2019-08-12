import React from "react";
import { Field, reduxForm } from "redux-form";
import SelectInput from "../../../../../misc/forms/inputs/SelectInput";
import DateInput from "../../../../../misc/forms/dates/SingleDate";
import moment from "moment";
import styles from "./Form.module.css";
import { globalAgent } from "http";
import { globalStyle } from "../../../../../../config";

function COForm({ handleSubmit, submitCallback, pristine, submitting }) {
	const options = [
		{
			key: "newest",
			value: -1
		},
		{
			key: "oldest",
			value: 1
		}
	];

	return (
		<form onSubmit={handleSubmit(submitCallback)}>
			<div className={styles.filterContainer}>
				<div>
					<label>Newest or Oldest</label>
					<Field name="order" component={SelectInput} options={options} />
				</div>
				<div>
					<label>By Date</label>
					<Field
						name="shipping.orderedDate"
						component={DateInput}
						format={value => (value ? moment(value) : undefined)}
						normalize={data => data && data.value && data.value.format()}
						isOutsideRange={() => false}
					/>
				</div>
			</div>

			<button
				type="submit"
				className="btn"
				style={{ backgroundColor: `${globalStyle.backgroundColor}` }}
				disabled={pristine || submitting}
			>
				filter
			</button>
		</form>
	);
}

export default reduxForm({
	form: "ordersfilters"
})(COForm);
