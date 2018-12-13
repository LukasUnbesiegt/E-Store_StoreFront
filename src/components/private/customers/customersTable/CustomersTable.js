
import React, { Component } from 'react'
import Table from '../../../misc/table/Table'




class CustomersTable extends Component {




    render() {

        const columns = [

            {
                dataField: 'username',
                text: 'username'
            }, {
                dataField: 'email',
                text: 'email'
            }, {
                dataField: 'orders',
                text: 'orders'
            },
            {
                dataField: 'createdAt',
                text: 'createdAt'
            },
            // {
            //     dataField: 'stocks',
            //     text: 'Stocks'
            // },
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
                noDataText="There are no customers at the moment"

            />
        )
    }
}



export default CustomersTable;