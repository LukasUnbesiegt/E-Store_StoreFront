import React, { Component } from 'react'
import ProductSlide from '../Products/ProductSlide/ProductSlide'




class NewArrival extends Component {




    render() {

        const products = [

            {
                name: 'Product 1 ',
                price: 200
            },
            {
                name: 'Product 1 ',
                price: 200
            },
            {
                name: 'Product 1 ',
                price: 200
            },
            {
                name: 'Product 1 ',
                price: 200
            },
            {
                name: 'Product 1 ',
                price: 200
            },
            {
                name: 'Product 1 ',
                price: 200
            }


        ]

        return (
            <section className="py-5" >

                <ProductSlide
                    sectionTitle="New Arrival Collections"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    products={products}
                />

            </section>
        )
    }
}



export default NewArrival;