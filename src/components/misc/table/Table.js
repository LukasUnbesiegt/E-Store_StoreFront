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
        const { rows, editHandler, deleteHandler, selectedRowItems, tableheads } = this.props;
        if (rows) {



            return rows.map((row, i) => {


                return (
                    <tr>


                        {
                            tableheads.map((head) => {
                                return (<td>
                                    {row[head]}
                                </td>)
                            })
                        }

                        <td>
                            <i
                                className="fa fa-cog fa-lg"
                                onClick={
                                    () => {
                                        editHandler(row)
                                    }

                                }

                            >

                            </i>
                        </td>
                        <td>
                            <i
                                className="fa fa-trash fa-lg"
                                onClick={
                                    () => {
                                        deleteHandler(row._id)
                                    }

                                }

                            >

                            </i>

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




            <div classNam="container">
                {this.renderTable()}
            </div>
        )
    }


}


export default TableComp;