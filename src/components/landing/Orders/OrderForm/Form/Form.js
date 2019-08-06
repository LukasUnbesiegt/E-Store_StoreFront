import React, { Component } from 'react'
import moment from 'moment'
import Stepper from 'react-stepper-horizontal'
import UserForm from './UserForm'
import PaymentForm from './PaymentForm'



class Form extends Component {


    state = {
        page: 0,
        steps: [{ title: 'User Information' },
        { title: 'Payment' },]
    }

    nextPage = () => {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage = () => {
        this.setState({ page: this.state.page - 1 });
    }





    render() {




        const {
            deliveries,
            country,
            region,
            selectRegion,
            selectCountry, submitCallback } = this.props;
        const { page, steps } = this.state;




        const renderForms = () => {

            switch (page) {
                case 0:

                    return (
                        <UserForm
                            submitCallback={this.nextPage}
                            country={country}
                            region={region}
                            selectRegion={selectRegion}
                            selectCountry={selectCountry}


                        />
                    )
                    break;
                case 1:

                    return (
                        <PaymentForm
                            submitCallback={submitCallback}
                            backTo={this.previousPage}
                            deliveries={deliveries}
                            site={this.props.site}
                            chooseLocalPayment={this.props.chooseLocalPayment}
                            totalPrice={this.props.totalPrice}
                        />
                    )
                    break;

                default:
                    break;
            }

        }









        return (
            <div>
                <Stepper steps={steps} activeStep={page} activeColor={'#43e97b'} completeColor={'grey'} />

                {renderForms()}


            </div>





        )
    }
}



export default Form;