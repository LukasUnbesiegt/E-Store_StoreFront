
import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import HeaderBar from '../../styles/HeaderBar'



import Table from './productsTable/ProductTable'
import AddProduct from './addproducts/AddProduct'


class Products extends Component {









    render() {










        return (
            <div className="">
                <HeaderBar
                    title="Manage Your Products"
                    sectionTitle="Products List"
                    quantity={0}
                    iconStyle="fa fa-archive"
                    cat="Manage Categories"
                    linkTo="/admin/products/add"
                />

                <div className="container-fluid pt-3 mt-3">
                    <div className="row">

                        <div className="col-12">

                            <Switch>
                                <Route exact path="/admin/products/" component={Table} />
                                <Route path="/admin/products/add/" component={AddProduct} />
                            </Switch>


                        </div>



                    </div>




                </div>

            </div>
        )
    }
}



export default Products;