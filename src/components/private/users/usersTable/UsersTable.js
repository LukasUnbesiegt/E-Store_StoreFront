
import React, { Component } from 'react'
import Table from '../../../misc/table/Table'

import filterFactory, { dateFilter, Comparator, textFilter, numberFilter } from 'react-bootstrap-table2-filter';


class UsersTable extends Component {




    render() {


        const data = [

            {
                username: 'kyaw kyaw',
                email: 'kyawkyaw@gmail.com',
                role: 'editor',
                createdAt: '23/3/2018'
            },
            {
                username: 'Mg Mg',
                email: 'mgmg@gmail.com',
                role: 'admin',
                createdAt: '23/3/2018'
            }



        ]


        const columns = [

            {
                dataField: 'username',
                text: 'username',
                filter: textFilter(),
                sort: true
            }, {
                dataField: 'email',
                text: 'email',
                filter: textFilter()
            }, {
                dataField: 'role',
                text: 'role'
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
                noDataText="There are no users. Please Add users"
                filter={filterFactory()}

            />
        )
    }
}



export default UsersTable;