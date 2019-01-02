import React, { Component } from 'react'
import Table from '../../../misc/table/Table'




class ProductTable extends Component {


    editHandler = () => {

    }
    detailsHandler = () => {

    }
    deleteHandler = () => {

    }


    render() {

        const tableheads = ['name', 'sku', 'price', 'promoprice', 'createdAt']

        const rows = [
            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,



                createdAt: '27/3/2018'

            },
            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,

                createdAt: '27/3/2018'

            }
            ,
            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,

                createdAt: '27/3/2018'

            },
            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,
                createdAt: '27/3/2018'

            },
        ]

        const selectedRowItems = ['name', 'sku', 'price', 'promoprice', 'stock', 'createdAt']

        return (
            <div>

                <Table
                    tableheads={tableheads}
                    rows={rows}
                    editHandler={this.editHandler}
                    deleteHandler={this.deleteHandler}
                    detailsHandler={this.detailsHandler}
                    selectedRowItems={selectedRowItems}
                />






            </div>
        )
    }
}





export default ProductTable