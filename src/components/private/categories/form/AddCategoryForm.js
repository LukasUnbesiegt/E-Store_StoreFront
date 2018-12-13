
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import TextInput from '../../../misc/forms/inputs/TextInput'


class AddCategoryForm extends Component {




    render() {
        const { handleSubmit, submitCallback, valid, errors, submitting, pristine } = this.props;



        return (



            <form
                onSubmit={handleSubmit(submitCallback)}

            >

                <Field
                    component={TextInput}
                    name="category"
                    placeholder="category"
                    type="text"

                />


                <button
                    className="btn btn-success"
                    disabled={!valid || pristine || submitting}

                >

                    Add Category
                </button>
            </form>
        )
    }
}



export default reduxForm({

    enableReinitialize: true,
    form: 'addcategory'

})(AddCategoryForm);