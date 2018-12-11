import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';






class Table extends Component {



    render() {







        return (
            <div>
                <BootstrapTable
                    keyField="id"
                    data={this.props.data}
                    columns={this.props.columns}
                    hover
                    condensed
                    noDataIndication={this.props.noDataText}
                />
            </div>
        )
    }
}



export default Table