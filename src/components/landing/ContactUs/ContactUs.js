import React, { Component, Fragment } from 'react'
import SmallNav from '../SmallNav/SmallNav'

import Navigator from '../../navigation/Navigator'
import Footer from '../footer/Footer';
import Authenticated from '../../misc/auth/Authenticated'


class ContactUs extends Component {





    render() {


        return (
            <Fragment>
                <SmallNav />
                <Navigator />

                <section>

                    <h3>Store Info</h3>

                </section>

                <Footer />
            </Fragment>
        )
    }
}


export default Authenticated(ContactUs)
