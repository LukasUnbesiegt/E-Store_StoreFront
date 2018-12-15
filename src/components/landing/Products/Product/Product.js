import React, { Component, Fragment } from 'react'

import './Product.css'


class Product extends Component {





    render() {





        const renderProduct = () => {

            return (
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid3">
                        <div class="product-image3">
                            <a href="#">
                                <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg" />
                                <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-2.jpg" />
                            </a>
                            <ul class="social">
                                <li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <span class="product-new-label">New</span>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="#">Men's Blazer</a></h3>
                            <div class="price">
                                $63.50
                            <span>$75.00</span>
                            </div>
                            <ul class="rating">
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star disable"></li>
                                <li class="fa fa-star disable"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )



        }





        return (
            <Fragment>
                {renderProduct()}
            </Fragment>

        )
    }
}




export default Product;