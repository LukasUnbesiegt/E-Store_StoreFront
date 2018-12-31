
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AddProductForm from './form/AddProductForm'
import { EditorState, convertToRaw, ContentState } from 'draft-js';


class AddProduct extends Component {



    state = {

        editorState: EditorState.createEmpty(),

    }




    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };



    handleSubmitHandler = (data) => {













    }


    render() {





        return (
            <Fragment>

                <div className="container-fluid">

                    <div className="row">

                        <div className="col-12 text-center ">
                            <h3 className="">Add Product Form</h3>
                            <AddProductForm

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

})

const mapDispatchToProps = {

}



export default connect()(AddProduct);