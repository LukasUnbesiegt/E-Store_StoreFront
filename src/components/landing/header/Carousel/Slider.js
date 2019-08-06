
import React, { Component } from 'react'
import Slider from 'react-slick';
import { UncontrolledCarousel } from 'reactstrap';

import styles from './Slider.module.css'


class SliderComponent extends Component {





    render() {


        const slides = [

            {
                src: 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1f9UevHvpK1RjSZFqXXcXUVXa.jpg_1200x1200.jpg',

            },
            {
                src: 'http://techlogicgroup.com/images/e-commerce-website-banner.jpg',

            },
            {
                src: 'https://coveventure.com/wp-content/uploads/2016/07/eCommerce-marketing-1140x445.png',

            },
            {
                src: 'https://coveventure.com/wp-content/uploads/2016/07/eCommerce-marketing-1140x445.png',

            }




        ]


        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }



        return (
            <div className="">
                {/* <UncontrolledCarousel
                    items={slides}

                /> */}
            </div>
        )
    }
}



export default SliderComponent;
