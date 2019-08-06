import React, { Component, Fragment } from 'react'
import TextInput from '../../../misc/forms/inputs/TextInput'
import { Field, reduxForm } from 'redux-form'
import TextArea from '../../../misc/forms/inputs/TextArea'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import defaultImg from './placeholder.png'


class CheckOut extends Component {





    cartItemDeleteHandler = (cartItemId) => {



        this.props.cartItemDelete(cartItemId)



    }


    // dynamically render variants 
    renderVariants = (variants) => {

        if (variants) {

            let arr = [];

            for (const key in variants) {
                if (variants.hasOwnProperty(key)) {
                    const element = variants[key];

                    arr.push({ key: key, value: element })

                }
            }

            return arr.map((item) => {
                return (<span className="mr-2">{`${item.key} : ${item.value}`}</span>)
            })


        }

    }




    render() {
        const { items } = this.props;






        const renderItems = () => {



            return items.map((item) => {

                return (
                    <ListGroupItem className="">
                        <ListGroupItemHeading>
                            {item.product.name}
                        </ListGroupItemHeading>
                        <ListGroupItemText>

                            Qty :  {item.quantity}
                        </ListGroupItemText>
                        <ListGroupItemText>
                            Price :  {item.TotalPrice}
                        </ListGroupItemText>
                        <ListGroupItemText>

                            {this.renderVariants(item.variants)}
                        </ListGroupItemText>
                        <ListGroupItemText>
                            <img
                                src={item.product.images[0] ? item.product.images[0].url : defaultImg}
                                alt="..." className=" img-fluid img-thumbnail"
                                style={{
                                    width: '60px',
                                    height: '60px'
                                }}
                            >
                            </img>
                        </ListGroupItemText>

                        <ListGroupItemText>
                            <button className="btn btn-success btn-sm"
                                onClick={() => {
                                    this.cartItemDeleteHandler(item._id)
                                }}
                            >
                                remove
                                </button>
                        </ListGroupItemText>


                    </ListGroupItem>

                )




            })




        }










        return (
            <div className="my-3 py-2">


                <ListGroup>
                    {renderItems()}
                </ListGroup>
            </div>




        )
    }
}




export default CheckOut