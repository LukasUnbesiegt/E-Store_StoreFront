import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';






class Table extends Component {



    render() {




        // const defaultSorted = [{
        //     dataField: 'name',
        //     order: 'desc'
        // }];


        return (
            <div>
                <BootstrapTable
                    keyField={this.props.keyField}
                    data={this.props.data}
                    columns={this.props.columns}
                    hover
                    condensed
                    noDataIndication={this.props.noDataText}
                    defaultSortDirection="asc"
                />
            </div>
        )
    }
}



export default Table