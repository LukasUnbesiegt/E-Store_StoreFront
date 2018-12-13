
import React, { Component, Fragment } from 'react'
import HeaderBar from '../../styles/HeaderBar'
import { Switch, Route } from 'react-router-dom'
import CustomersTable from './customersTable/CustomersTable'
import CustomersSettings from './customerSettings/index'
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
                    linkTable="/admin/customers/"
                    linkSetting="/admin/customers/settings"


                />

                <div className="container-fluid pt-3 mt-3">
                    <div className="row">

                        <div className="col-12">

                            <Switch>
                                <Route exact path="/admin/customers/" component={CustomersTable} />
                                <Route path="/admin/customers/" component={CustomersTable} />
                                <Route path="/admin/customers/settings" component={CustomersSettings} />
                            </Switch>


                        </div>



                    </div>




                </div>
            </Fragment>
        )
    }
}





export default Customers;