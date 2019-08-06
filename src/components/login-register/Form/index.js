import React, { Component } from 'react'
import styles from './index.module.css'
import { connect } from 'react-redux'
import { loginUser } from '../../../actions/userActions'
import { push } from 'connected-react-router'
import FormComp from './FormComp/Form'
import { prodEndpoint, endpoint } from '../../../config'

const URL = process.env.NODE_ENV === 'production' ? prodEndpoint : endpoint;


class LoginRegisterForm extends Component {


    onSubmitHandler = (data) => {


        this.props.loginUser(data)


    }


    render() {





        return (


            <div className="bg-white my-5 py-5 mx-5 px-5" style={{ borderRadius: '10px' }} >
                <FormComp
                    submitCB={this.onSubmitHandler}
                    errorsServer={this.props.errors.errors ? this.props.errors.errors : {}}
                />

                <div className="container text-center pt-3 mt-3">

                    <a href="/" className="">Back to Home</a>

                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    errors: state.errors,
    loading: state.async.loading
})

const mapDispatchToProps = {
    loginUser,
    push
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginRegisterForm);