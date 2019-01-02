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

        const tableheads = ['name', 'sku', 'price', 'promoprice', 'stocks', 'likes', 'createdAt']

        const rows = [
            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,
                stocks: 100,
                createdAt: '27/3/2018',


            },
            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,
                stocks: 100,
                createdAt: '27/3/2018'

            }
            ,
            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,
                stocks: 100,
                createdAt: '27/3/2018'

            },
            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,
                stocks: 100,
                createdAt: '27/3/2018'

            },
            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,
                stocks: 100,
                createdAt: '27/3/2018'

            },
            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,
                stocks: 100,
                createdAt: '27/3/2018'

            },

            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,
                stocks: 100,
                createdAt: '27/3/2018'

            },

            {
                name: 'product 1',
                sku: 'HRDFJ234',
                price: 17000,
                promoprice: 36000,
                stocks: 100,
                createdAt: '27/3/2018'

            },

        ]



        return (
            <div>

                <Table
                    tableheads={tableheads}
                    rows={rows}
                    editHandler={this.editHandler}
                    deleteHandler={this.deleteHandler}


                />






            </div>
        )
    }
}





export default ProductTable