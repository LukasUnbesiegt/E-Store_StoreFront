import React, { Component } from 'react'
import ProductSlide from '../Products/ProductSlide/ProductSlide'




class Promotions extends Component {




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
            <section className="py-5" style={{ backgroundColor: '#f6f9fc' }}>
                {/* 
                <ProductSlide
                    sectionTitle="Promotion Sales"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    products={products}
                /> */}

            </section>
        )
    }
}



export default Promotions;
