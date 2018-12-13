
import React, { Component } from 'react'
import AddCategory from './form/AddCategory'






class Categories extends Component {


    render() {



        return (
            <div>
                <h3 className="text-center">Categories</h3>
                <AddCategory />
            </div>
        )
    }
}



export default Categories;