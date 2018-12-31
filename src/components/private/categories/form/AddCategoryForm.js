
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import TextInput from '../../../misc/forms/inputs/TextInput'


class AddCategoryForm extends Component {




    render() {
        const { handleSubmit, submitCB, valid, errors, submitting, pristine } = this.props;



        return (



            <form
                onSubmit={handleSubmit(submitCB)}

            >

                <Field
                    component={TextInput}
                    name="name"
                    placeholder="category name"
                    type="text"
                    styleFrom={
                        {
                            color: 'black'
                        }
                    }

                />
                <Field
                    component={TextInput}
                    name="id"
                    placeholder="category id"
                    type="text"
                    styleFrom={
                        {
                            color: 'black'
                        }
                    }

                />


                <button
                    className="btn btn-success"

                    type="submit"

                >

                    Add Category
                </button>
            </form>
        )
    }
}



export default reduxForm({


    form: 'addcategory'

})(AddCategoryForm);