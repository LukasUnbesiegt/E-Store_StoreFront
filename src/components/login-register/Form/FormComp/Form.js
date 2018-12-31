import React, { Component } from 'react'
import styles from './Form.module.css'
import { reduxForm, Field, FieldArray } from 'redux-form'
import TextInput from '../../../misc/forms/inputs/TextInput'



class FormComp extends Component {






    render() {

        const {
            submitCB,
            handleSubmit,
            valid,
            pristine,
            submitting,
            errors


        } = this.props;



        return (
            <form

                onSubmit={handleSubmit(submitCB)}


            >
                <h4 className="display-4 py-3">Estore Admin Login</h4>
                <Field
                    component={TextInput}
                    placeholder="enter email"
                    type="text"
                    name="email"


                />
                <Field
                    component={TextInput}
                    placeholder="enter password"
                    type="password"
                    name="password"


                />


                <button
                    type="submit"
                    className="btn btn-block btn-success "

                >
                    Login
                </button>

            </form>
        )
    }
}


export default reduxForm(
    {
        form: 'admin-login-register'
    }
)(FormComp);