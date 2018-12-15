import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import TextInput from '../../../misc/forms/inputs/TextInput'
import SelectInput from '../../../misc/forms/inputs/SelectInput'


class AddPromotionsForm extends Component {




    render() {


        // const roles = [
        //     { key: 'admin', text: 'Administrator', value: 3 },
        //     { key: 'editor', text: 'Editor', value: 2 },


        // ];
        const { handleSubmit, submitCallback, valid, errors, submitting, pristine } = this.props;


        return (


            <form
                onSubmit={submitCallback}
            >


                <Field
                    component={TextInput}
                    name="name"
                    placeholder="name"
                    type="text"

                />
                <Field
                    component={TextInput}
                    name="percent"
                    placeholder="percent"
                    type="number"

                />
                <Field
                    component={TextInput}
                    name="quantity"
                    placeholder="quantity"
                    type="number"

                />



                <button
                    className="btn btn-success"
                    disabled={!valid || pristine || submitting}

                >

                    Add PromoCode
                </button>
            </form>
        )
    }
}





export default reduxForm({
    form: 'addpromotions',
    enableReinitialize: true
})(AddPromotionsForm);
