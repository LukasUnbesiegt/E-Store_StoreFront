import React, { Component } from 'react'
import Table from '../../../misc/table/Table'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteProduct, getProductToEdit } from '../../../../actions/productsActions'

import Authenticated from '../../../misc/auth/Authenticated'


class ProductTable extends Component {


    editHandler = (productToEdit) => {

        this.props.getProductToEdit(productToEdit)
    }

    deleteHandler = (productId) => {
        this.props.deleteProduct(productId)

    }


    render() {

        const { products } = this.props;

        const tableheads = ['name', 'sku', 'price', 'promoprice', 'stocks', 'likes', 'createdAt']
        let rows, productsForEdit;

        if (products) {

            rows = products.map((product) => {

                let formattedDate = moment(product.createdAt).format('YYYY-MM-DD')

                return {

                    name: product.name,
                    sku: product.sku,
                    price: product.price.normal,
                    promoprice: product.price.promo,
                    stocks: product.stocks,
                    likes: product.likes,
                    createdAt: formattedDate,
                    _id: product._id,

                }
            })


            productsForEdit = products.map((product) => {

                return {
                    _id: product._id,
                    name: product.name,
                    price: product.price.normal,
                    promoprice: product.price.promo,
                    sku: product.sku,
                    stocks: product.stocks,
                    description: product.description,
                    likes: product.likes,
                    images: product.images,
                    colors: product.colors,
                    size: product.size,
                    promotional: product.details.promotional,
                    featured: product.details.featured,
                    newarrival: product.details.newarrival
                }

            })


        }


        return (
            <div>

                <Table
                    tableheads={tableheads}
                    rows={rows}
                    editHandler={this.editHandler}
                    deleteHandler={this.deleteHandler}
                    itemsToMap={productsForEdit}

                />






            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    products: state.products.productsTable
})

const mapDispatchToProps = {
    deleteProduct,
    getProductToEdit
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductTable)