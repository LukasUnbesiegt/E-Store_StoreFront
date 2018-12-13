import React, { Component } from 'react'
import AddCategoryForm from './AddCategoryForm'





class AddCategory extends Component {



    addCategory = () => {



    }

    render() {





        return (
            <div className="container-fluid ">

                <div className="row text-center">

                    <div className="col-12">

                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Electronics
                                        <span class="badge badge-success badge-pill">0</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Childrens
                                        <span class="badge badge-success badge-pill">0</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Stationery
                                        <span class="badge badge-success badge-pill">0</span>
                            </li>
                        </ul>

                    </div>

                </div>

                <div className="row text-center mt-5">

                    <div className="col-12">
                        <h4>Add Category</h4>
                        <AddCategoryForm

                            submitCallback={this.addCategory}
                        />


                    </div>

                </div>

            </div>
        )
    }
}



export default AddCategory;