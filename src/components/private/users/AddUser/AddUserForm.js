import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import TextInput from '../../../misc/forms/inputs/TextInput'
import SelectInput from '../../../misc/forms/inputs/SelectInput'


class AddUserForm extends Component {




    render() {


        const roles = [
            { key: 'admin', text: 'Administrator', value: 3 },
            { key: 'editor', text: 'Editor', value: 2 },


        ];
        const { handleSubmit, submitCallback, valid, errors, submitting, pristine } = this.props;


        return (


            <form
                onSubmit={submitCallback}
            >


                <Field
                    component={TextInput}
                    name="username"
                    placeholder="Username"
                    type="text"

                />
                <Field
                    component={TextInput}
                    name="email"
                    placeholder="email"
                    type="text"

                />

                <Field
                    component={TextInput}
                    name="password"
                    placeholder="password"
                    type="password"

                />

                <label>Choose Role</label>
                <Field
                    component={SelectInput}
                    name="role"
                    placeholder="role"
                    type="text"
                    options={roles}

                />


                <button
                    className="btn btn-success"
                    disabled={!valid || pristine || submitting}

                >

                    Add User
                </button>
            </form>
        )
    }
}





export default reduxForm({
    form: 'adduser',
    enableReinitialize: true
})(AddUserForm);
