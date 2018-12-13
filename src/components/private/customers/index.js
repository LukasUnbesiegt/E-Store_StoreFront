
import React, { Component, Fragment } from 'react'
import HeaderBar from '../../styles/HeaderBar'


class Customers extends Component {


    render() {


        return (
            <Fragment>
                <HeaderBar
                    title="Manage Customers"
                    sectionTitle="Customers"
                    quantity={0}
                    iconStyle="fa fa-archive"
                    cat="Manage Customers"
                    linkAdd="/admin/customers/add"
                    linkTable="/admin/products/"
                    linkSetting="/admin/products/settings"


                />
            </Fragment>
        )
    }
}





export default Customers;