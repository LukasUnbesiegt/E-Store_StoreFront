import React, { Component } from 'react'
import TextInput from '../../../../misc/forms/inputs/TextInput'
import { Field, reduxForm } from 'redux-form'


import './AccountForm.css'


class AccountForm extends Component {





    render() {




        return (


            <div class="register-photo">
                <div class="form-container">
                    <div class="image-holder"></div>
                    <form

                    >
                        <h2 class="text-center"><strong>Create</strong> an account.</h2>
                        <div class="form-group">

                            <Field
                                component={TextInput}
                                type="text"
                                placeholder="Username"

                            />

                        </div>
                        <div class="form-group">

                            <Field
                                component={TextInput}
                                type="text"
                                placeholder="Email"

                            />


                        </div>
                        <div class="form-group">
                            <Field
                                component={TextInput}
                                type="password"
                                placeholder="Password"

                            />


                        </div>

                        <div class="form-group"><button class="btn btn-primary btn-block" type="submit">
                            Sign Up</button>
                        </div><a href="#" class="already">You already have an account? Login here.</a>

                    </form>
                </div>
            </div>




        )
    }
}



export default reduxForm({
    form: 'useraccount',
    enableReinitialize: true


})(AccountForm);
