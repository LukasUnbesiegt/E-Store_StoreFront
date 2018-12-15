import React, { Component, Fragment } from 'react'

import './Product.css'


class Product extends Component {





    render() {





        const renderProduct = () => {

            return (

                <div className="product-grid3">
                    <div className="product-image3">
                        <a href="#">
                            <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg" />
                            <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-2.jpg" />
                        </a>
                        <ul className="social">
                            <li><a href="#"><i className="fa fa-shopping-bag"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                        <span className="product-new-label">Featured</span>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">Men's Blazer</a></h3>
                        <div className="price">
                            $63.50
                            <span>$75.00</span>
                        </div>
                        <ul className="rating">
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star disable"></li>
                            <li className="fa fa-star disable"></li>
                        </ul>
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