import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, } from 'reactstrap';

import Pagination from './Pagination'


class OrderTable extends Component {







    render() {

        const { orders } = this.props;







        const renderOrders = () => {


            if (this.props.orders && this.props.orders.orders.length > 0) {



                return this.props.orders.orders.map((order) => {



                    const renderItems = () => {

                        return order.cart.items.map((item) => {

                            return (
                                <ListGroupItem>
                                    <ListGroupItemText>
                                        {item.product.name} | {'  '} quantity : {item.quantity}
                                    </ListGroupItemText>
                                </ListGroupItem>
                            )
                        })

                    }




                    return (<ListGroup>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                {moment(order.orderedDate).format('YYYY-MM-DD HH')} hours
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                Status : {`${order.status}`}
                            </ListGroupItemText>
                            <ListGroupItemText>
                                TotalPrice : {order.cart.totalPrice} {'   '} TotalQuantity : {order.cart.totalQuantity}
                            </ListGroupItemText>
                            <ListGroupItemText>

                                {renderItems()}

                            </ListGroupItemText>
                        </ListGroupItem>

                    </ListGroup>
                    )




                })

            }


            else {



                return (
                    <div className="text-center display-5">
                        There is orders u submited
                    </div>
                )
            }





        }







        return (
            <div
                className="my-3"

            >
                {renderOrders()}

                <div className="mt-3">



                </div>


            </div>
        )
    }
}








const mapStateToProps = (state) => ({
    orders: state.customers ? state.customers.orders : null
})

const mapDispatchToProps = {

}





export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);