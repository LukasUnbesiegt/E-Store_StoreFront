
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AddProductForm from './form/AddProductForm'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { addProduct, editProduct } from '../../../../actions/productsActions'



class AddProduct extends Component {

    constructor(props) {
        super(props)

        const html = this.props.initialValues ? this.props.initialValues.description : '';
        const contentBlock = htmlToDraft(html)

        if (contentBlock) {

            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
            const editorState = EditorState.createWithContent(contentState)

            this.state = {

                editorState,

            }

        }



    }






    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };



    handleSubmitHandler = (data) => {

        let description = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))

        if (this.props.initialValues) {

            // editing current product
            let dataToSubmit = {




            }

            this.props.editProduct(this.props.initialValues._id, dataToSubmit)
        } else {
            // new product

            let dataToSubmit = {

                name: data.name,
                price: {
                    promo: data.promoprice,
                    normal: data.price

                },
                sku: data.sku,
                category: data.category,
                description: description,
                stocks: data.stocks || 0,
                likes: data.likes,
                images: this.props.images ? this.props.images : [],
                details: {

                    colors: data.colors,
                    size: data.size,
                    featured: data.featured,
                    newArrival: data.newArrival,
                    promotional: data.promotional


                }

            }


            this.props.addProduct(dataToSubmit)
        }









    }


    render() {

        let categories;


        if (this.props.categories) {

            categories = this.props.categories.map((category) => {
                return {
                    key: category.name,
                    value: category.id
                }
            })


        }



        return (
            <Fragment>

                <div className="container-fluid">

                    <div className="row">

                        <div className="col-12 text-center ">
                            <h3 className="">Add Product Form</h3>
                            <AddProductForm
                                categories={categories || []}
                                submitCallback={this.handleSubmitHandler}
                                editorState={this.state.editorState}
                                onEditorStateChange={this.onEditorStateChange}
                            />

                        </div>



                    </div>



                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.products.categories,
    initialValues: state.products.productToEdit,
    images: state.products.uploadedImages
})

const mapDispatchToProps = {
    addProduct,
    editProduct
}



export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);