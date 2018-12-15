
import React, { Component, Fragment } from 'react'

import Footer from '../footer/Footer'
import SmallNav from '../SmallNav/SmallNav'
import Navigator from '../../navigation/Navigator'
import CheckOut from './CheckOut/CheckOut';




class Carts extends Component {
    render() {





        return (
            <Fragment>
                <SmallNav />
                <Navigator />


                <div className="container">

                    <div className="py-3 text-center">

                        <h2>Checkout and Carts</h2>
                        <p className="lead">Hope you enjoy our products.Please Check Products in Carts right corner</p>
                    </div>

                    <CheckOut />


                </div>






                <Footer />
            </Fragment>
        )
    }
}





export default Carts;