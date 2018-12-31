
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AddProductForm from './form/AddProductForm'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';




class AddProduct extends Component {

    constructor(props) {
        super(props)




        this.state = {

            editorState: EditorState.createEmpty(),

        }

    }






    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };



    handleSubmitHandler = (data) => {













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
    categories: state.products.categories
})

const mapDispatchToProps = {

}



export default connect(mapStateToProps)(AddProduct);