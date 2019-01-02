
import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import HeaderBar from '../../styles/HeaderBar'
import { connect } from 'react-redux'


import Table from './productsTable/ProductTable'
import AddProduct from './addproducts/AddProduct'
import AddCategory from '../categories/index'


class Products extends Component {










    render() {










        return (
            <div className="">
                <HeaderBar
                    title="Products"
                    sectionTitle="Products"
                    quantity={0}
                    iconStyle="fa fa-archive"
                    cat="Manage Categories"
                    linkAdd="/admin/products/add"
                    linkTable="/admin/products/"
                    linkSetting="/admin/products/settings"
                />

                <div className="container-fluid pt-3 mt-3">
                    <div className="row">

                        <div className="col-12">

                            <Switch>
                                <Route exact path="/admin/products/" component={Table} />
                                <Route path="/admin/products/add/" component={AddProduct} />
                                <Route path="/admin/products/settings/" component={AddCategory} />
                            </Switch>


                        </div>



                    </div>




                </div>

            </div>
        )
    }
}




// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }



export default Products;