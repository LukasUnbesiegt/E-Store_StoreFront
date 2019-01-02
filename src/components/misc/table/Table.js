import React, { Component } from 'react'
import { Table } from 'reactstrap'



class Table extends Component {


    renderTableHeads = () => {

        const { tableheads } = this.props;
        return tableheads.map((head) => {

            return (
                <th>{head}</th>
            )

        })
    }


    renderTableRows = () => {
        const { rows, editHandlear, deleteHandler, detailsHandler, selectedRowItems } = this.props;
        if (rows) {

            const renderRowItems = selectedRowItems.map((rowItemName, i) => {

                return (
                    <td
                        key={i}
                    >
                        {row[rowItemName]}

                    </td>
                )

            })

            return rows.map((row, i) => {

                return (
                    <tr>
                        <th scope="row">{i + 1}</th>
                        {/* 
                        <td>{row.author}</td>
                        <td>{row.articles.length}</td> */}
                        {
                            renderRowItems
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
                                        deleteBookHandler(row._id)
                                    }

                                }

                            >
                                delete
                        </button>

                        </td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm"
                                onClick={
                                    () => {
                                        deleteBookHandler(row._id)
                                    }

                                }

                            >
                                delete
                        </button>

                        </td>
                    </tr>
                )
            })


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
                    {this.renderTable}
                </div>
            )
        }
    }



    export default Table;