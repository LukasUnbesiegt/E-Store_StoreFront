
import React, { Component, Fragment } from 'react'

import Footer from '../footer/Footer'
import SmallNav from '../SmallNav/SmallNav'
import Navigator from '../../navigation/Navigator'




class Orders extends Component {
    render() {





        return (
            <Fragment>
                <SmallNav />
                <Navigator />


                <div className="container py-4 my-2">

                    <h3 className="text-center display-4">Orders Page</h3>

                    <p className="lead text-center ">There is no current orders here!</p>


                </div>






                <Footer />
            </Fragment>
        )
    }
}





export default Orders;