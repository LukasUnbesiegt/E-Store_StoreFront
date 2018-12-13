import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'
import CheckBox from '../../../../misc/forms/inputs/RadioInput'
import RadioInput from '../../../../misc/forms/inputs/RadioInput';
import SelectInput from '../../../../misc/forms/inputs/SelectInput'
import DetailsFields from './DetailsFields'
import FieldArray from './FieldArray'
import AddPhotos from './ProductPhotos/ProductPhotos'

import ProductPhotos from './ProductPhotos/ProductPhotos';
import ProductEditor from './ProductEditor/ProductEditor'



class AddProductForm extends Component {





    render() {


        const categories = [
            { key: 'Electronics', text: 'Electronics', value: 'electronics' },
            { key: 'Stationery', text: 'Stationery', value: 'stationery' },
            { key: 'Children', text: 'Children', value: 'children' },
            { key: 'Women', text: 'Women', value: 'women' }

        ];

        const { handleSubmit, submitCallback, editorState, onEditorStateChange, valid, errors, submitting, pristine } = this.props;

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
                    placeholder="promo price"
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
                    component={SelectInput}
                    name="category"
                    placeholder="category"
                    type="text"
                    options={categories}

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


                <div className="py-3 my-2">
                    <ProductEditor
                        editorState={editorState}
                        onEditorStateChange={onEditorStateChange}
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
    form: 'addproduct',
    enableReinitialize: true
})(AddProductForm);