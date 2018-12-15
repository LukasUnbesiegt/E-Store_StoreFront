
import React, { Component } from 'react'
import Table from '../../../misc/table/Table'

import filterFactory, { dateFilter, Comparator, textFilter, numberFilter } from 'react-bootstrap-table2-filter';
import number from 'react-bootstrap-table2-filter/lib/src/components/number';


class ProductTable extends Component {




    render() {


        const data = [
            {
                name: 'Product 1',
                price: 2000,
                sku: 'ass212221221',
                category: 'Washing machine',
                stocks: 30


            },
            {
                name: 'Product 2',
                price: 5600,
                sku: '434545kasasjsjas',
                category: 'Car Perfume',
                stocks: 43


            }

        ]
        const columns = [

            {
                dataField: 'name',
                text: 'Name',
                filter: textFilter()
            }, {
                dataField: 'price',
                text: 'Price',
                filter: numberFilter()
            }, {
                dataField: 'sku',
                text: 'SKU',
                filter: textFilter()
            },
            {
                dataField: 'category',
                text: 'Category'
            },
            {
                dataField: 'stocks',
                text: 'Stocks',
                filter: numberFilter()
            },
            {
                dataField: 'manage',
                text: 'Manage',
                formatter: (cellContent, row) => (
                    <div className="btn-group btn-group-sm" role="group">
                        <button className="btn btn-sm btn-success mr-2">details</button>
                        <a href="#" style={{ color: 'red' }}><i className="fa fa-trash"></i></a>
                    </div>
                )
            }


        ];





        return (


            <Table
                keyField="name"
                columns={columns}
                data={data}
                noDataText="There is no products. Please Add some products"
                filter={filterFactory()}

            />
        )
    }
}



export default ProductTable;