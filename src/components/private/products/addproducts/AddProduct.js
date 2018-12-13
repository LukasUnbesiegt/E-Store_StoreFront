
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AddProductForm from './form/AddProductForm'



class AddProduct extends Component {


    addProducts = () => {




    }


    render() {





        return (
            <Fragment>

                <div className="container-fluid">

                    <div className="row">

                        <div className="col-12 text-center ">
                            <h3 className="">Add Product Form</h3>
                            <AddProductForm
                                submitCallback={this.addProducts}

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