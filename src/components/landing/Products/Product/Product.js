import React, { Component, Fragment } from 'react'
import { Tooltip } from 'reactstrap';
import './Product.css'


class Product extends Component {


    state = {
        tooltipOpen: false
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }
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
                            <li><a href="#"><i className="fa fa-info-circle"></i></a></li>
                            <li id="TooltipExample"><a href="#" ><i className="fa fa-shopping-cart" ></i></a></li>


                            <Tooltip placement="left" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                                Login in to to add carts
                            </Tooltip>
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