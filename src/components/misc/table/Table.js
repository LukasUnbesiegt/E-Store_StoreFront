import React, { Component } from 'react'
import { Table } from 'reactstrap'



class TableComp extends Component {


    renderTableHeads = () => {
        const { tableheads } = this.props;

        return tableheads.map((head) => {

            return (
                <th>{head}</th>
            )

        })
    }


    renderTableRows = () => {
        const { rows, editHandlear, deleteHandler, detailsHandler, selectedRowItems, tableheads } = this.props;
        if (rows) {



            return rows.map((row, i) => {


                return (
                    <tr>


                        {
                            tableheads.map((head) => {
                                return (<th>
                                    {row[head]}
                                </th>)
                            })
                        }

                        <td>
                            <button
                                className="btn btn-success btn-sm"
                                onClick={
                                    () => {
                                        editHandlear(row)
                                    }

                                }

                            >
                                edit
                        </button>
                        </td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm"
                                onClick={
                                    () => {
                                        deleteHandler(row._id)
                                    }

                                }

                            >
                                delete
                        </button>

                        </td>
                        <td>
                            <button
                                className="btn btn-default btn-sm"
                                onClick={
                                    () => {
                                        detailsHandler(row._id)
                                    }

                                }

                            >
                                details
                        </button>

                        </td>
                    </tr>
                )
            })


        }
    }


    renderTable = () => {

        return (

            <Table>

                <thead>
                    {this.renderTableHeads()}
                </thead>

                <tbody>
                    {this.renderTableRows()}

                </tbody>


            </Table>


        )


    }

    render() {


        return (




            <div>
                {this.renderTable()}
            </div>
        )
    }


}


export default TableComp;