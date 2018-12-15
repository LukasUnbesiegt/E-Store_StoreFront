
import React, { Component } from 'react'
import Table from '../../../misc/table/Table'
import filterFactory, { dateFilter, Comparator, textFilter, numberFilter } from 'react-bootstrap-table2-filter';
import number from 'react-bootstrap-table2-filter/lib/src/components/number';



class OrdersTable extends Component {




    render() {
        const data = [

            {
                username: 'kyaw kyaw',
                phone: '09968717100',
                cartsqty: 6,
                createdAt: '23/3/2018'
            },
            {
                username: 'Mg Mg',
                phone: '09968717100',
                cartsqty: 2,
                createdAt: '23/3/2018'
            }



        ]

        const columns = [

            {
                dataField: 'username',
                text: 'username',
                filter: textFilter(),

            }, {
                dataField: 'phone',
                text: 'phone',
                filter: textFilter()

            }, {
                dataField: 'cartsqty',
                text: 'cartsqty',
                filter: numberFilter()
            },
            {
                dataField: 'createdAt',
                text: 'createdAt',
                filter: dateFilter({




                }),

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
                keyField="username"
                columns={columns}
                data={data}
                noDataText="There are no orders at the moment"
                filter={filterFactory()}
                pagination={true}

            />
        )
    }
}



export default OrdersTable;