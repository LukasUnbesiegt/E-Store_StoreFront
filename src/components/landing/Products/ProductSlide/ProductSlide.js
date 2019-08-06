import React, { Component, Fragment } from 'react'
import Slider from 'react-slick'

import Product from '../Product/Product'


import { connect } from 'react-redux'


class ProductSlide extends Component {





    render() {


        const settings = {

            speed: 1000,
            autoplaySpeend: 1000,
            slidesToShow: this.props.products.length - 1,
            slidesToScroll: this.props.products.length - 1,
            autoplay: true,
            arrows: false,
            draggable: true,
            // // className: "center",
            // // centerMode: true,
            responsive: [

                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };




        const renderProducts = () => {


            return this.props.products.map((product, index) => {


                return (

                    <div
                        className="p-2"
                        key={index}
                    >
                        <Product
                            product={product}

                        />
                    </div>




                )


            })

        }




        return (

            <Fragment>
                <h3 className="text-center display-4">{this.props.sectionTitle}</h3>
                <p className="text-muted text-center pb-5">{this.props.subtitle}</p>

                {/* <Slider
                    {...settings}
                >


                    {renderProducts()}




                </Slider> */}




            </Fragment>

        )
    }
}





export default ProductSlide;