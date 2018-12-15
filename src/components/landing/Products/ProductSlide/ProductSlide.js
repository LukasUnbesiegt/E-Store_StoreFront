import React, { Component, Fragment } from 'react'
import Slider from 'react-slick'

import Product from '../Product/Product'


import { connect } from 'react-redux'


class ProductSlide extends Component {





    render() {


        const settings = {

            speed: 1000,
            autoplaySpeend: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            className: "center",
            // centerMode: true,
            arrows: false,

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


            return this.props.products.map((product) => {


                return (

                    <Product
                        product={product}

                    />

                )


            })

        }




        return (

            <Fragment>
                <h3 className="text-center display-4 py-5">{this.props.sectionTitle}</h3>
                <Slider
                    {...settings}
                >
                    <div className="row">

                        {renderProducts()}

                    </div>

                </Slider>



            </Fragment>

        )
    }
}





export default ProductSlide;