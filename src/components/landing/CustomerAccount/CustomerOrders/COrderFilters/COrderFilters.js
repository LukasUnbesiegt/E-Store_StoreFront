
import React, { Component } from 'react'
import COForm from './Form/Form'
import { connect } from 'react-redux'

import { getOrdersById } from '../../../../../actions/customerActions'
import Pagination from '../OrderTable/Pagination'
import { isEmpty, omit } from '../../../../../utils/isEmpty'


class COrderFilters extends Component {



    state = {
        data: null
    }



    submitCallbackHandler = (data, page = 1) => {


        let filters, order;




        if (!isEmpty(data)) {
            // there is data , filter button apply
            filters = omit(data, 'order')
            order = data.order;


            // when data is changed or we apply filter button , we need to update state for pagination button
            this.setState({
                data: data
            })

        } else {
            if (!isEmpty(this.state.data)) {
                filters = omit(this.state.data, 'order')
                order = this.state.data.order;
            }

        }


        this.props.getOrdersById({ filters: filters, order: order, page: page })
    }








    render() {



        return (
            <div
                className="container-fluid my-2 py-2"
            >

                <div className="">
                    <COForm
                        submitCallback={this.submitCallbackHandler}
                    />


                    <div
                        className="mt-3"
                    >
                        <span >total item : {this.props.orders && this.props.orders.totalItems}</span>
                        <Pagination
                            orders={this.props.orders}
                            submitCallback={this.submitCallbackHandler}
                        />

                    </div>

                </div>







            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    orders: state.customers.orders
})

const mapDispatchToProps = {
    getOrdersById
}


export default connect(mapStateToProps, mapDispatchToProps)(COrderFilters) 