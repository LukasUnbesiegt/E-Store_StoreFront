import React, { Component } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'
import CheckBox from '../../../../misc/forms/inputs/RadioInput'
import RadioInput from '../../../../misc/forms/inputs/RadioInput';




class AddProductForm extends Component {





    render() {

        const { handleSubmit, submitCallback, valid, errors, submitting, pristine } = this.props;

        return (



            <form
                onSubmit={handleSubmit(submitCallback)}

            >

                <Field
                    component={TextInput}
                    name="name"
                    placeholder="name"
                    type="text"

                />

                <Field
                    component={TextInput}
                    name="price"
                    placeholder="price"
                    type="number"

                />

                <Field
                    component={TextInput}
                    name="promoprice"
                    placeholder="promo pirce"
                    type="number"

                />
                <Field
                    component={TextInput}
                    name="sku"
                    placeholder="SKU"
                    type="text"

                />
                <Field
                    component={TextInput}
                    name="stocks"
                    placeholder="Stocks"
                    type="number"

                />
                <Field
                    component={TextInput}
                    name="likes"
                    placeholder="Likes"
                    type="number"

                />
                <div className="d-flex">


                    <div className="mr-3">
                        <label className="mr-1" htmlFor="featured">Featured</label>
                        <Field
                            name="featured"
                            id="featured"
                            component="input"
                            type="checkbox"
                        />

                    </div>
                    <div className="mr-3">
                        <label className="mr-1" htmlFor="featured">New Arrival</label>
                        <Field
                            name="newarrival"
                            id="featured"
                            component="input"
                            type="checkbox"
                        />

                    </div>
                    <div className="mr-3">
                        <label className="mr-1" htmlFor="featured">Promotional</label>
                        <Field
                            name="promotional"
                            id="featured"
                            component="input"
                            type="checkbox"
                        />

                    </div>




                </div>








                <button
                    className="btn btn-success"
                    disabled={!valid || pristine || submitting}

                >

                    Add Product
                </button>

            </form>
        )
    }
}







export default reduxForm({
    form: 'addproduct'
})(AddProductForm);