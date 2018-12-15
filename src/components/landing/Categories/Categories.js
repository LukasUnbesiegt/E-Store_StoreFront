
import React, { Component } from 'react'
import Slider from 'react-slick'
import './Categories.css'





class Categories extends Component {





    render() {

        const categories = [
            { name: 'Washing Machines', img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample21.jpg" },
            { name: 'CCTV Security Cameras', img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample21.jpg" },
            { name: 'Table Linen Accessories', img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample21.jpg" },
            { name: 'Pedals & Pedal Accessories', img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample21.jpg" },
            { name: 'Cigarette Lighter & Parts', img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample21.jpg" },
            { name: 'Car Accessroies', img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample21.jpg" },
            { name: 'Audio Parts', img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample21.jpg" }


        ]


        const renderCategories = () => {

            return categories.map((category, i) => {

                return (

                    <figure className="snip1571 m-3" key={i} >
                        <img src={category.img} alt="sample21" />
                        <figcaption>
                            <h3>{category.name}</h3>
                        </figcaption>
                        <a href="/products"></a>
                    </figure>




                )

            })


        }



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


        return (



            <section className="  py-5" style={{ backgroundColor: '#f6f9fc' }}>
                <h3 className="text-center display-4 py-5">Collections in E-Store</h3>
                <Slider
                    {...settings}
                >
                    {renderCategories()}
                </Slider>





            </section>
        )
    }
}



export default Categories