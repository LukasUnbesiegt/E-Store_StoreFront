
import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import HeaderBar from '../../styles/HeaderBar'

import Table from './productsTable/ProductTable'



class Products extends Component {









    render() {










        return (
            <div className="">
                <HeaderBar
                    title="Manage Your Products"
                    sectionTitle="Products"
                    quantity={0}
                    iconStyle="fa fa-archive"
                    cat="Manage Categories"

                />

                <div className="container-fluid pt-3 mt-3">
                    <div className="row">

                        <div className="col-12">

                            <Table


                            />

                        </div>



                    </div>


                </div>

            </div>
        )
    }
}



export default Products;