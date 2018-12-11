import React, { Component } from 'react'
import HeaderBar from '../../styles/HeaderBar'



class Orders extends Component {


    render() {



        return (
            <div>
                <HeaderBar
                    title="Manage Your Orders"
                    sectionTitle="Orders"
                    quantity={0}
                    iconStyle="fa fa-archive"
                    cat="Manage Orders"

                />
            </div>
        )
    }
}



export default Orders;