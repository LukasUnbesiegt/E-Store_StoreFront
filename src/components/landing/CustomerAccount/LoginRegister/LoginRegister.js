
import React, { Component, Fragment } from 'react'
import SmallNav from '../../SmallNav/SmallNav'

import Navigator from '../../../navigation/Navigator'
import Footer from '../../footer/Footer'
import AccountForm from '../LoginRegister/form/AccountForm'


class LoginRegister extends Component {






    render() {
        return (
            <Fragment>

                <SmallNav />
                <Navigator />

                <AccountForm />

                <Footer />
            </Fragment>
        )
    }
}




export default LoginRegister;