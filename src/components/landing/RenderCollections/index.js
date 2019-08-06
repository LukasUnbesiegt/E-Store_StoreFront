import React, { Component } from 'react'



class index extends Component {





    render() {

        const { collection } = this.props;



        return (

            <section
                className="container"

            >

                <div

                >

                    <h5 className="text-center  display-4">{collection.name}</h5>
                    <img
                        src={collection.image}
                        style={{
                            cursor: 'pointer'
                        }}
                        className="img-fluid my-2  shadow"
                        onClick={() => {
                            this.props.getProductsForShop(1, { collections: [collection._id] })

                        }}
                    />
                </div>

            </section>

        )




    }
}


export default index;