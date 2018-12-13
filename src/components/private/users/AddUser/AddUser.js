import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddUserForm from './AddUserForm'






class AddUser extends Component {




    addUser = () => {



    }



    render() {







        return (


            <div className="text-center">
                <AddUserForm
                    submitCallback={this.addUser}


                />
            </div>
        )
    }
}



export default AddUser;