
import React, { Component, Fragment } from 'react'
import SmallNav from '../../SmallNav/SmallNav'

import Navigator from '../../../navigation/Navigator'
import Footer from '../../footer/Footer'



class LoginRegister extends Component {






    render() {
        return (
            <Fragment>

                <SmallNav />
                <Navigator />
                <h3>Login Register</h3>

                <Footer />
            </Fragment>
        )
    }
}




export default LoginRegister;