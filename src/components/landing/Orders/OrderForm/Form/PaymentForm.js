import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { ListGroup, ListGroupItem, Collapse, Button, CardBody, Card, InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import SelectInput from '../../../../misc/forms/inputs/SelectInput'
import TextInput from '../../../../misc/forms/inputs/TextInput'


class PaymentForm extends React.Component {


    state = {

        paymentChose: 0,
        transactionData: {},
        localConfirm: false

    }

    onChange = (event) => {

        this.setState({
           transactionData: {[event.target.name] : event.target.value }
        })
    }
    handleChangePayment = (val) => {


        this.setState({
            paymentChose: val
        })

    }
    confirmLocal = () => {

        this.setState({
            localConfirm: true
        })
    }

    render() {
        
        const { submitCallback, backTo, deliveries, site, handleSubmit } = this.props;
       
  
        const CODDetails = () => {

            return (
                <div className="my-3 py-3 ">

                    <p className="text-center">Now .You Chose Cash On Delivey by default. try change payment type.</p>
                    <Field
                        component={SelectInput}
                        name="localDelivery"
                        options={deliveries}
                    />
                </div>

            )
        }



      let localPaymentsDetails = () => {

                    let payments = site ? site.payments : []


                    const renderLocals = () => {


                        
                        if(payments.length > 0) {

                            const localPayments = payments.filter((payment) => {
                                return payment.type === 'local'
                            })
            
                            return localPayments.map((payment) => {
            
                                return (
                                    <div className="container card my-4 py-4">
            
                                        <h5 className="text-muted text-center">{payment.name}</h5>
                                        <div className="row">
            
                                            <div className="col-sm-12 col-md-6">
                                                <span className="pr-3 mr-3">Pay to this phone number</span>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <h5>{payment.mobile || 'no phone added'}</h5>
                                            </div>
                                        </div>
            
                                        <div className=" text-center my-2 py-2">
            
                                            {
                                                payment.qrcode ? (
                                                    <div className="col-12">
                                                        <label className="text-center">Scan QR Code</label>
                                                        <img src={payment.qrcode.url} className="img-fluid" style={{
                                                            objectFit: 'contain',
                                                            height: '200px',
                                                            width: '200px'
                                                        }} />
                                                    </div>
            
                                                ) : 'no qr code available'
                                            }
            
                                        </div>
            
                                        <div className="row my-3 py-3 container">
            
                                            <div className="input-group input-group-alternative col-sm-12 col-md-6 " >
            
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="your phone number for transfer"
                                                    style={{ color: 'black' }}
                                                    onChange={this.onChange}
                                                    disabled={this.state.localConfirm}
                                                    name="phone"
                                                />
            
                                            </div>
                                            <div className="col-sm-12 col-md-6 my-2 ">
                                                <button className="btn btn-sm btn-success" type="button"  disabled={this.state.localConfirm}
                                                    onClick={ () => {
                                                        this.props.chooseLocalPayment({type : 'PAID' , merchant : payment , transactionData : this.state.transactionData })
            
                                                    this.confirmLocal()
            
            
                                                    }
                                                       
                                        
                                        }
                                        >
                                        Paid and Confirm
                                  
                                                </button>
                                        </div>
                                    </div>
                                    </div >
                                )
            
            
                })

                        }else {
                                return (
                                    <div className="container">

                                    <h5 className="text-muted">No local payments from store owner now</h5>
                        
                        
                                </div>
                                )
                          

    
                        }
               
        
        
        }
        
        
        
        return (
        
            <div className="container">
        
                <p className="text-muted text-center">select one  and pay for total price {this.props.totalPrice} kyats</p>
        
                {renderLocals()}
        
            </div>
        
        )
                }




    


const creditCardDetails = () => {

    return (

        <div className="container">

            <h5 className="text-muted">We are working on this. coming soon</h5>


        </div>

    )
}

const paypalPaymentDetails = () => {

    return (

        <div className="container">

            <h5 className="text-muted">We are working on this. coming soon</h5>


        </div>

    )
}


const renderPaymentDetails = () => {


    switch (this.state.paymentChose) {
        case 0:
            return CODDetails()
            break;
        case 1:
            return localPaymentsDetails()
            break;
        case 2:
            return creditCardDetails()
            break;
        case 3:
            return paypalPaymentDetails()
            break;

        default:
            break;
    }


}





return (


    <form
        onSubmit={handleSubmit(submitCallback)}

    >

        <button className="btn btn-success btn-sm my-2 py-2" onClick={() => { backTo() }}>Back To User Info</button>

        <div className="container-fluid card text-center">



            <h5 className="text-center my-2 py-2 text-muted display-5 ">  Choose Payment Type </h5>

            <div className="container">
                <div className="row my-2 py-2">

                    <div className="col-12">
                        <ListGroup>
                            <ListGroupItem tag="button" action type="button"
                                onClick={() => { this.handleChangePayment(0) }}

                            >
                                Cash On Delivery  <i className="fas fa-truck"></i>

                            </ListGroupItem>


                            <ListGroupItem tag="button" action type="button"
                                onClick={() => { this.handleChangePayment(1) }}
                            >

                                Mobile Payments or Local Payments <i className="fas fa-money-bill-wave"></i>

                            </ListGroupItem>
                            <ListGroupItem tag="button" action type="button"
                                onClick={() => { this.handleChangePayment(2) }}
                            >

                                VISA or Master Card  <i className="fab fa-cc-visa"></i> <i className="fab fa-cc-mastercard"></i>


                            </ListGroupItem>


                            <ListGroupItem tag="button" action type="button"
                                onClick={() => { this.handleChangePayment(3) }}
                            >
                                Paypal <i className="fab fa-cc-paypal"></i>

                            </ListGroupItem>
                        </ListGroup>
                    </div>







                </div>


                <div className=" text-center my-3 py-3">

                    {renderPaymentDetails()}

                </div>



                <button
                    type="submit"
                    className="btn btn-block btn-success my-3"

                >
                    Submit your order
             </button>
            </div>

        </div>


    </form>
)
    }

}




export default reduxForm({
    form: 'addorder',
    forceUnregisterOnUnmount: true,
    destroyOnUnmount: false,
})(PaymentForm);