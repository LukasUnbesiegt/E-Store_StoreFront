import React, { Component } from 'react'
import Slider from "react-slick";
import { connect } from 'react-redux'







class index extends Component {




    renderImages = () => {
        const { categories } = this.props;

        if (categories) {
            console.log(categories)
            return categories.map(({ image, _id }) => {


                return (




                    <img
                        src={image}
                        className="img-fluid px-2 mx-2"
                        style={{
                            cursor: 'pointer',
                            width: '220px',
                            height: '220px',
                            objectFit: 'contain'
                        }}
                        onClick={() => { this.props.handleFilters(_id, this.props.type) }}


                    />







                )
            })

        }


    }


    render() {

        const { categories } = this.props;



        const settings = {



            speed: 1500,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrow: true,
            lazyLoad: true,



            // responsive: [

            //     {
            //         breakpoint: 600,
            //         settings: {
            //             slidesToShow: 4,
            //             slidesToScroll: 4,
            //             initialSlide: 4
            //         }
            //     },
            //     {
            //         breakpoint: 480,
            //         settings: {
            //             slidesToShow: 4,
            //             slidesToScroll: 4
            //         }
            //     }
            // ]
        };



        return (



            <Slider {...settings}>


                {this.renderImages()}



            </Slider>




        )
    }
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}




export default connect(mapStateToProps, mapDispatchToProps)(index);