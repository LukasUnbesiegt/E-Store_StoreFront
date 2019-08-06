
import React, { Component } from 'react'
import OrderTable from './OrderTable/OrderTable'
import OrderFilter from './COrderFilters/COrderFilters'
import { withRouter } from 'react-router-dom'


class CustomerOrders extends Component {




    render() {









        return (



            <div
                className="container"

            >
                <h4 className="display-4 text-center m-2">Your Orders List</h4>

                <OrderFilter />
                <OrderTable


                />

            </div>
        )
    }
}



export default withRouter(CustomerOrders);