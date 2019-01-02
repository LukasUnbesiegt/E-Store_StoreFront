import React, { Component } from 'react'
import styles from './index.module.css'
import { connect } from 'react-redux'
import { loginUser } from '../../../actions/userActions'
import { } from 'react-router-dom'
import FormComp from './FormComp/Form'




class LoginRegisterForm extends Component {


    onSubmitHandler = (data) => {


        this.props.loginUser(data)

        console.log('submitted')




    }


    render() {





        return (


            <div className="bg-white my-5 py-5 mx-5 px-5" style={{ borderRadius: '10px' }} >
                <FormComp
                    submitCB={this.onSubmitHandler}

                />

                <div className="container text-center pt-3 mt-3">

                    <a href="/" className="">Back to Home</a>

                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    loginUser
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginRegisterForm);