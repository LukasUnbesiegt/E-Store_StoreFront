import React, { Component } from 'react'
import CSForm from './Form/CSForm'




class CustomerSettings extends Component {



    submitCallbackHandler = (data) => {




    }


    render() {

        let initialValues;
        if (this.props.user) {
            initialValues = {
                email: this.props.user.email,
                username: this.props.user.username
            }
        }


        return (
            <div
                className="container-fluid"

            >

                <h4
                    className="display-4 text-center m-2"
                >Account Settings</h4>


                <CSForm
                    submitCallback={this.submitCallbackHandler}
                    initialValues={initialValues}
                />




            </div>
        )
    }
}



export default CustomerSettings;