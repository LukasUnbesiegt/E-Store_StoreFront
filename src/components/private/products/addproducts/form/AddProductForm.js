import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'
import CheckBox from '../../../../misc/forms/inputs/RadioInput'
import RadioInput from '../../../../misc/forms/inputs/RadioInput';
import DetailsFields from './DetailsFields'
import FieldArray from './FieldArray'
import AddPhotos from './ProductPhotos/ProductPhotos'
import ProductPhotos from './ProductPhotos/ProductPhotos';




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


                <DetailsFields />

                <div className="left">
                    <FieldArray
                        name="colors"
                        placeholder="add colors"

                    />

                </div>

                <div>
                    <FieldArray
                        name="size"
                        placeholder="add sizes"

                    />


                </div>

                <ProductPhotos />



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