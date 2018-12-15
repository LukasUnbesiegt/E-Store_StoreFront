
import React, { Component } from 'react'
import Table from '../../../misc/table/Table'

import filterFactory, { dateFilter, Comparator, textFilter, numberFilter } from 'react-bootstrap-table2-filter';


class CustomersTable extends Component {




    render() {


        const data = [

            {
                username: 'kyaw kyaw',
                email: 'kyawkyaw@gmail.com',
                order: 3,
                createdAt: '23/3/2018'
            },
            {
                username: 'Mg Mg',
                email: 'mgmg@gmail.com',
                order: 7,
                createdAt: '23/3/2012'
            }



        ]

        const columns = [

            {
                dataField: 'username',
                text: 'username',
                filter: textFilter(),
            }, {
                dataField: 'email',
                text: 'email',
                filter: textFilter(),
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
                        <button className="btn btn-sm btn-success mr-2">details</button>
                        <a href="#" style={{ color: 'red' }}><i className="fa fa-trash"></i></a>
                    </div>
                )
            }


        ];





        return (


            <Table
                keyField="username"
                columns={columns}
                data={data}
                noDataText="There are no customers at the moment"

            />
        )
    }
}



export default CustomersTable;