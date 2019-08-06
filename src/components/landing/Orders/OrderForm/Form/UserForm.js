
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'
import TextArea from '../../../../misc/forms/inputs/TextArea'
import DateInput from '../../../../misc/forms/dates/SingleDate'
import SelectInput from '../../../../misc/forms/inputs/SelectInput'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

import moment from 'moment';

const validate = values => {
    const errors = {}


    if (!values.shippingAddress) {
        errors.shippingAddress = {
            name: 'name required',
            phone: 'phone number required'

        }



    }

    if (!values.desireDate) {
        errors.desireDate = 'date to delivery required'

    }




    return errors
}


function UserForm({ submitCallback, country,
    region,
    selectRegion,
    selectCountry, deliveries, handleSubmit }) {






    return (


        <form
            onSubmit={handleSubmit(submitCallback)}
            className="my-2 py-2"
        >

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <Field
                        component={TextInput}
                        name="shippingAddress.name"
                        styleFrom={{
                            color: 'black',

                        }}
                        placeholder="name"
                    />

                </div>
                <div className="col-sm-12 col-md-6">
                    <Field
                        component={TextInput}
                        name="shippingAddress.company"
                        styleFrom={{
                            color: 'black',

                        }}
                        placeholder="company (optional)"
                    />

                </div>



            </div>
            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <Field
                        component={TextInput}
                        name="shippingAddress.email"
                        styleFrom={{
                            color: 'black',

                        }}
                        placeholder="email (optional)"
                    />

                </div>
                <div className="col-sm-12 col-md-6">
                    <Field
                        component={TextInput}
                        name="shippingAddress.phone"
                        styleFrom={{
                            color: 'black',

                        }}
                        placeholder="phone"
                    />

                </div>



            </div>
            <div className="my-2">
                <h5 className="text-center ">Shpping Address</h5>

                <div className="row">

                    <div className="col-sm-12 col-md-6">
                        <Field
                            component={TextArea}
                            name="shippingAddress.line1"
                            styleFrom={{
                                color: 'black',

                            }}
                            placeholder="address line 1"
                        />

                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Field
                            component={TextArea}
                            name="shippingAddress.line2"
                            styleFrom={{
                                color: 'black',

                            }}
                            placeholder="address line 2"
                        />

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-6 col-sm-12 mb-2">


                        <CountryDropdown
                            value={country}
                            onChange={(val) => selectCountry(val)}
                            classes="custom-select"
                        />

                    </div>
                    <div className="col-lg-6 col-sm-12">

                        <RegionDropdown
                            country={country}
                            value={region}
                            onChange={(val) => selectRegion(val)}
                            classes="custom-select"
                        />


                    </div>


                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <Field
                            component={TextInput}
                            name="shippingAddress.zip"
                            styleFrom={{
                                color: 'black',

                            }}
                            placeholder="zip (optional)"
                        />

                    </div>
                    <div className="col-sm-12 col-md-4">
                        <label>Delivery Date</label>
                        <Field
                            name="desireDate"
                            component={DateInput}
                            format={(value) => value ? moment(value) : undefined}
                            normalize={(data) => data && data.value && data.value.format()}
                            isOutsideRange={() => false}
                        />

                    </div>
                    <div className="col-sm-12 col-md-4">



                    </div>

                </div>

                <div className="row">




                </div>


            </div>

            <button type="submit" className="btn btn-success btn-block">Proceed to Payment</button>

        </form>
    )
}


export default reduxForm({
    form: 'addorder',
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(UserForm);