import React, { Component } from 'react'
import { categoriesSample } from '../../seeds/contents'





class index extends Component {




    renderCategories = () => {

        const { categories } = this.props;

        if (categories.length > 0) {
            return categories.map((category) => {


                return (
                    <div
                        className="p-2 m-2"
                        style={{
                            cursor: 'pointer'
                        }}

                    >
                        <img
                            src={category.image}
                            onClick={() => { this.props.getProductsForShop(1, { category: [category._id] }) }}
                        />

                    </div>
                )


            })
        } else {
            return categoriesSample.map((category) => {


                return (
                    <div
                        className="p-2 m-2"
                        style={{
                            cursor: 'pointer'
                        }}

                    >
                        <img
                            src={category.image}
                        // onClick={() => { this.props.getProductsForShop(1, { category: [category._id] }) }}
                        />

                    </div>
                )


            })
        }




    }



    render() {










        return (
            <div
                className="py-5"
                style={{
                    display: 'flex',
                    flexDirection: 'flex-start',
                    flexWrap: 'wrap',
                    justifyContent: 'center',


                }}
            >

                {
                    this.renderCategories()
                }

            </div>
        )
    }
}



export default index;