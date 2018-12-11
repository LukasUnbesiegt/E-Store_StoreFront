
import React, { Component } from 'react'
import Table from '../../../misc/table/Table'




class ProductTable extends Component {




    render() {

        const columns = [

            {
                dataField: 'name',
                text: 'Name'
            }, {
                dataField: 'price',
                text: 'Price'
            }, {
                dataField: 'sku',
                text: 'SKU'
            },
            {
                dataField: 'category',
                text: 'Category'
            },
            {
                dataField: 'stocks',
                text: 'Stocks'
            },
            {
                dataField: 'manage',
                text: 'Manage',
                formatter: (cellContent, row) => (
                    <div className="btn-group btn-group-sm" role="group">
                        <a href="#" className=""><i className="fa fa-cog"></i></a>
                        <a href="#" className=""><i className="fa fa-cog"></i></a>
                        <a href="#" className=""><i className="fa fa-cog"></i></a>
                    </div>
                )
            }


        ];





        return (


            <Table
                columns={columns}
                data={[]}
                noDataText="There is no products. Please Add some products"

            />
        )
    }
}



export default ProductTable;