import React, { Component, Fragment } from 'react'
import Product from '../Product/Product';
import SmallNav from '../../SmallNav/SmallNav'
import Footer from '.././../footer/Footer'
import Navigator from '../../../navigation/Navigator'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import { getProductsByCat, addToCart, addLike } from '../../../../actions/productsActions'
import ProductGallery from '../ProductGallery/ProductGallery'
import uuid from 'uuid/v1'
import styles from './ProductDetails.module.css'
import Authenticated from '../../../misc/HOC/Authenticated'
import {globalStyle} from '../../../../config'

class ProductDetails extends Component {



    state = {


        currentProductAdded: {
            _id: uuid(),
            TotalPrice: 0,
            quantity: 0,
            variants: {},
            product: this.props.product

        },

    }

    componentWillReceiveProps = (prevProps) => {


        if (prevProps.product !== this.props.product) {

            window.scrollTo(0, 0)

        }
    }

    componentDidMount = () => {

        if (this.props.product) {
            const { category } = this.props.product

          
            if (category) {

                this.props.getProductsByCat(category._id)

            }

        }

        window.scrollTo(0, 0)

    }



    selectedVariant = (choice, category) => {

        this.setState((prevState) => {

            return {
                currentProductAdded: {
                    ...prevState.currentProductAdded,
                    variants: { ...prevState.currentProductAdded.variants, [category]: choice }
                }
            }
        })


    }

    renderChips = (items, cat) => {

        

        return items.map((item, i) => {


            let bgColor;
            if (cat === 'color') {

                bgColor = item['color']
            }


            return (
                <div className="d-flex flex-column my-1">


                   
                        
                    
                    <img
                        className="img-thumbnail img-fluid"
                        key={i}
                        src={item.imglink}

                        style={{

                            width: '40px',
                            height: '40px',
                            margin: '5px',
                            padding: '5px'
                        }}

                        onClick={() => { this.selectedVariant(item[cat], cat) }}
                        clickable={true}

                    />
                    <span    style={{

fontSize : '11px' ,

}}>{item[cat]}</span>
                </div>

            );



        })





    }


    addQuantity = () => {

        let price;
        if (this.props.product.promo) {
            price = this.props.product.price.promo;
        } else {
            price = this.props.product.price.normal;
        }

        this.setState(prevState => {
            return {
                currentProductAdded: {
                    ...prevState.currentProductAdded,
                    quantity: prevState.currentProductAdded.quantity + 1,
                    TotalPrice: (prevState.currentProductAdded.quantity + 1) * price

                }
            }
        })


    }

    removeQuantity = () => {

        let price;
        if (this.props.product.promo) {
            price = this.props.product.price.promo;
        } else {
            price = this.props.product.price.normal;
        }


        if (this.state.currentProductAdded.quantity > 0) {
            this.setState(prevState => {
                return {
                    currentProductAdded: {
                        ...prevState.currentProductAdded,
                        quantity: prevState.currentProductAdded.quantity - 1,
                        TotalPrice: (prevState.currentProductAdded.quantity - 1) * price

                    }
                }
            })


        }



    }

    addToCart = () => {


        this.props.addToCart(this.state.currentProductAdded)

        this.setState({
            currentProductAdded: {
                _id: uuid(),
                TotalPrice: 0,
                quantity: 0,
                variants: {},
                product: this.props.product

            },
        })

    }


    render() {



        const { product, productsByCat } = this.props;
        console.log(productsByCat)
        function createMarkup() { return { __html: product.details.description || '<p>no descriptions</p>' }; };
        const buttonsDisplay = () => {

            return (

                <div className="py-2 px-2"
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <div>
                        <Link
                            className="btn btn-sm mr-3"
                            style={{backgroundColor : `${globalStyle.backgroundColor}`}}
                            to="/products"
                        >back to products</Link>

                    </div>

                </div>

            )

        }




        const renderVariants = () => {

            const { product: { variants } } = this.props;


            if (variants) {

                return Object.keys(variants).map((variant) => {

                    return (
                        <div className="container-fluid" style={{ display: 'flex', padding: '10px', flexWrap: 'wrap' }}>

                            <div className="">
                                <span className="mr-3 font-weight-bold">{variant}</span>
                                <span className="text-muted"> {this.state.currentProductAdded.variants[variant] ? this.state.currentProductAdded.variants[variant] : 'none'} </span>
                            </div>


                            {this.renderChips(variants[variant], variant)}
                        </div>
                    )


                })


            } else {


                return (
                    <p className="text-muted">No Variants for this product</p>
                )


            }




        }

        const renderCollections = () => {

            const { product: { collections } } = this.props;

            return collections.map((collection) => {

                return (

                    <span
                        style={{
                            backgroundColor: 'grey',
                            color: '#fff',
                            padding: '3px',
                            marginBottom: '4px' ,
                            marginRight : '3px'
                        }}

                    >
                        {`${collection.name}`}

                    </span>
                )

            })
        }

        const renderImages = () => {

            return (

                <div
                    className={`${styles.imagesWrapper}`}
                >
                    <ProductGallery
                        images={product ? product.images : []}
                    />

                </div>
            )
        }



        const renderProductDetails = () => {

            const renderPrices = () => {

                const renderPriceLabel = () => {

                    if (product.price.promo) {


                        return (
                            <div
                                className={`${styles.priceDecorator}`}
                            >
                                <span
                                    className={`${styles.Price} text-muted`}

                                >


                                    {product.price.promo}   kyats
                              </span>

                                <span
                                    className={`${styles.Price} ${styles.PromoPrice}`}

                                >

                                    {product.price.normal} kyats
                            </span>
                            </div>
                        )

                    } else {


                        return (
                            <div
                                className={`${styles.priceDecorator}`}
                            >
                                <span
                                    className={`${styles.Price} text-muted`}

                                >


                                    {product.price.normal}   kyats
                              </span>


                            </div>
                        )
                    }
                }




                const renderStocks = (
                    <span
                        className={`${styles.StockWrapper}`} style={{backgroundColor : `${globalStyle.backgroundColor}`}}

                    >

                        {product.stocks} stocks left
                </span>
                )



                return (


                    <div className="">



                        {renderPriceLabel()}
                        <div className="my-3">

{renderVariants()}
</div>
<Divider style={{
margin: '10px',

}} />
                        <div className={`${styles.addToCartWrapper}`}>

<div className="mx-2">
    <button
        className="btn  btn-sm btn-outline-dark"
        onClick={this.addQuantity}


    >+
            </button>
</div>
<div className="mx-2">
    <button
        className="btn btn btn-sm btn-outline-dark"
        onClick={this.removeQuantity}
    >
        -
        </button>
</div>
<div className="mx-2">
    <button
        className="btn  btn-sm btn-outline-dark"
        onClick={this.addToCart}
    >
        Add to Carts
          </button>
</div>


</div>
<Divider style={{
                            margin: '10px',

                        }} />
                        <div className="my-3">

                            <span
                                className=""
                                style={{
                                    letterSpacing: '2px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Quantity : {this.state.currentProductAdded.quantity} {`Total Price : ${this.state.currentProductAdded.TotalPrice}`}



                            </span>
                        </div>
                        <Divider style={{
margin: '10px',

}} />


                        <div className="my-3">

                            {
                                renderStocks
                            }

                        </div>

                     
                  

                        <div className="my-3">

                            <span
                                className="text-muted"
                                style={{
                                    letterSpacing: '2px'
                                }}
                            >
                                SKU : {product.details.sku}
                            </span>
                        </div>
                        <div className="my-3">

                            <span
                                className="text-muted"
                                style={{
                                    letterSpacing: '2px'
                                }}
                            >
                                Category : {product.category ? product.category.name : 'unknown'}
                            </span>
                        </div>
                        <div className="my-3">

                            <span
                                className="text-muted"
                                style={{
                                    letterSpacing: '2px'
                                }}
                            >
                                Brand : {product.brand ? product.brand.name : 'unknown'}
                            </span>
                        </div>

                        <div className="my-3">

                            {renderCollections()}
                        </div>
                        <div className="my-3">

                            <span
                                className="text-muted"
                                style={{
                                    letterSpacing: '2px'
                                }}
                            >
                                {product.likes}<i className="ni ni-favourite-28" style={{
                                    color: 'red',
                                    fontSize: '20px'
                                }}></i>
                            </span>
                        </div>

                      
                
                        <Divider style={{
                            margin: '10px',

                        }} />

                        <div className="my-3">

                            <span
                                className="text-muted"
                                style={{
                                    letterSpacing: '2px'
                                }}
                            >
                                Product  Description
                        </span>
                        </div>

                        {
                            product && <div dangerouslySetInnerHTML={createMarkup()} />
                        }






                    </div>
                )
            }

            const renderLabel = () => {

                if (product.promo ) {
                    return <span
                        style={{
                            backgroundColor: 'red',
                            color: '#fff',
                            padding: '3px',
                            marginBottom: '4px'
                        }}

                    >
                        promotion

                    </span>
                } else {
                    return <span
                        style={{
                            backgroundColor: 'grey',
                            color: '#fff',
                            padding: '3px',
                            marginBottom: '4px'
                        }}

                    >
                        normal

                    </span>
                }
            }

            return (
                <div
                    className={`${styles.productDetailsWrapper}`}

                >


                    <h4
                        className="text-muted"

                    >{product.name}
                    </h4>


                    {renderLabel()}



                    <Divider style={{
                        margin: '10px',

                    }} />

                    {renderPrices()}




                </div>
            )
        }


        const renderProduct = () => {

            if (product) {

                return (
                    <Fragment>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            {renderImages()}
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-12">
                            {renderProductDetails()}
                        </div>


                    </Fragment >

                )



            } else {
                return <div>Loading</div>
            }



        }

        const renderOtherProducts = () => {


            if (productsByCat) {

                return productsByCat.filter((item) => item._id !== this.props.product._id).map((product) => {


                    return (
                        <div
                            className="col-sm-12 col-md-3 col-lg-3"

                        >
                            <Product
                                product={product}
                                addLike={this.props.addLike}
                            />

                        </div>
                    )

                })




            }




        }


        return (



            <Fragment>
                <SmallNav
                    browser={this.props.browser}
                    store={this.props.site.site && this.props.site.site.store}

                />
                <Navigator
                    user={this.props.user}

                />

                <div className="">
                    {buttonsDisplay()}
                </div>

                <div className="container-fluid py-3">
                    <div className="row">

                        {renderProduct()}

                    </div>

                </div>

                {/*  Products Recommendations  */}

                <h4 className="text-muted text-center m-5">Other Products you may like</h4>
                <div className="container">
                    <div className="row">
                        {
                            renderOtherProducts()
                        }
                    </div>


                </div>

                <Footer />

            </Fragment >

        )
    }
}


const mapStateToProps = (state) => ({
    product: state.products ? state.products.singleProduct : null,
    productsByCat: state.products ? state.products.productsByCat : null,
    browser: state.browser,
    site: state.site
})

const mapDispatchToProps = {
    addToCart,
    addLike, getProductsByCat
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails); 