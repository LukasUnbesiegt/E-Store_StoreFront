
import React, { Component } from 'react'
import Table from '../../../misc/table/Table'

import filterFactory, { dateFilter, Comparator, textFilter, numberFilter } from 'react-bootstrap-table2-filter';


class UsersTable extends Component {




    render() {


        const data = [

            {
                name: 'CHRISTMAS',
                percent: 10,
                creatorName: 'thuta',
                quantity: 10,
                createdAt: '23/3/2018'
            },
            {
                name: 'NEWYEAR',
                percent: 50,
                creatorName: 'kyawkyaw',
                quantity: 5,
                createdAt: '2/6/2018'
            },




        ]


        const columns = [

            {
                dataField: 'name',
                text: 'name',
                filter: textFilter(),

            }, {
                dataField: 'percent',
                text: 'percent',
                filter: numberFilter()
            }, {
                dataField: 'creatorName',
                text: 'creatorName',
                filter: textFilter(),
            },
            {
                dataField: 'quantity',
                text: 'quantity'
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
                keyField="name"
                columns={columns}
                data={data}
                noDataText="There are promo codes"
                filter={filterFactory()}

            />
        )
    }
}



export default UsersTable;