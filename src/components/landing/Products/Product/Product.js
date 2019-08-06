import React, { Component, Fragment } from 'react'
import { Tooltip } from 'reactstrap';
import './Product.css'
import { connect } from 'react-redux'
import { singleProductRedirect } from '../../../../actions/productsActions'
import defaultImg from './placeholder.png'



class Product extends Component {


    state = {

    }


    displayPrice = () => {
        const { product } = this.props;

        if (product.details && product.details.onsale) {

            return (<div className="price">
                {product.price.promo} kyats
            <span>{product.price.normal}</span>
                <div className="my-2">
                    <a href="#" className="ml-2"><i className="ni ni-favourite-28 text-success"></i></a>   {product.likes}
                </div>
            </div>)




        } else {
            return (
                <div className="price">
                    {product.price.normal} kyats

                    <div className="my-2">
                        <a href="#" className="ml-2"><i className="ni ni-favourite-28 text-success"></i></a>   {product.likes}
                    </div>
                </div>)

        }

    }

    displayImages = () => {


        const { product } = this.props;


        return (
            <Fragment>
                <img className="pic-1" src={product.images[0] ? product.images[0].url : defaultImg} />
                <img className="pic-2" src={product.images[1] ? product.images[1].url : defaultImg} />
            </Fragment>
        )




    }

    isLabeled = () => {
        const { product } = this.props;

        return (
            <span className="product-new-label">{
                product.details && product.details.onsale ? 'Sales' : null
            }</span>
        )



    }


    displayRatings = () => {





        return (

            <ul className="rating">
                {/* <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star disable"></li>
                <li className="fa fa-star disable"></li> */}
            </ul>
        )
    }

    singleProductGo = () => {

        const { product } = this.props;
        this.props.singleProductRedirect(product)

    }



    renderProduct = () => {
        const { product } = this.props;
        return (

            <div
                className="product-grid3 "
                style={{
                    cursor: 'pointer'
                }}
                onClick={() => this.singleProductGo()}

            >
                <div className="product-image3">
                    <a href="#">
                        {this.displayImages()}
                    </a>
                    <ul className="social">
                        <li><a onClick={() => { this.props.addLike(product._id) }}><i className="ni ni-favourite-28 m-1"></i></a></li>
                    </ul>
                    {this.isLabeled()}
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">{product.name}</a></h3>
                    {this.displayPrice()}

                </div>
            </div>

        )



    }



    render() {


        return (
            <Fragment>
                {this.renderProduct()}
            </Fragment>

        )
    }
}




const mapDispatchToProps = {
    singleProductRedirect
}


export default connect(null, mapDispatchToProps)(Product);