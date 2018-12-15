import React, { Component, Fragment } from 'react'
import Product from '../Product/Product';

import SmallNav from '../../SmallNav/SmallNav'
import Footer from '.././../footer/Footer'
import Navigator from '../../../navigation/Navigator'

class ProductDetails extends Component {






    render() {
        return (
            <Fragment>
                <SmallNav />
                <Navigator />
                <div className="container">

                    <div className="row">
                        <h3>Product Details</h3>
                    </div>

                </div>
                <Footer />

            </Fragment>

        )
    }
}





export default ProductDetails; 