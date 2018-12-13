import React, { Component } from 'react'
import HeaderBar from '../../styles/HeaderBar'
import { Switch, Route } from 'react-router-dom'

import OrdersTable from './OrdersTable/OrdersTable'
import OrdersSettings from './OrdersSettings/OrdersSettings'


class Orders extends Component {


    render() {



        return (
            <div className="">
                <HeaderBar
                    title="Orders"
                    sectionTitle="Orders"
                    quantity={0}
                    iconStyle="fa fa-cart-plus"
                    cat="Manage Orders"
                    linkAdd="/admin/orders/add"
                    linkTable="/admin/orders/"
                    linkSetting="/admin/orders/settings"
                />

                <div className="container-fluid pt-3 mt-3">
                    <div className="row">

                        <div className="col-12">

                            <Switch>
                                <Route exact path="/admin/orders/" component={OrdersTable} />
                                <Route path="/admin/orders/add/" component={OrdersTable} />
                                <Route path="/admin/orders/settings/" component={OrdersSettings} />
                            </Switch>


                        </div>



                    </div>




                </div>

            </div>
        )
    }
}



export default Orders;