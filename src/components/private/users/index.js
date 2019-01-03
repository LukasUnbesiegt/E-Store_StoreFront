import React, { Component, Fragment } from 'react'
import HeaderBar from '../../styles/HeaderBar'
import { Switch, Route } from 'react-router-dom'
import AddUser from './AddUser/AddUser'
import UserTable from './usersTable/UsersTable'
import UsersTable from './usersTable/UsersTable';
import UsersSettings from './userSettings/UsersSettings'

import Authenticated from '../../misc/auth/Authenticated'

class Users extends Component {


    render() {



        return (

            <Fragment>

                <HeaderBar
                    title="Users"
                    sectionTitle="Users"
                    quantity={0}
                    iconStyle="fa fa-users"
                    cat="Manage Users"
                    linkAdd="/admin/users/add"
                    linkTable="/admin/users/"
                    linkSetting="/admin/users/settings/"

                />
                <div className="container-fluid pt-3 mt-3">
                    <div className="row">

                        <div className="col-12">

                            <Switch>
                                <Route exact path="/admin/users/" component={UsersTable} />
                                <Route path="/admin/users/add/" component={AddUser} />
                                <Route path="/admin/users/settings/" component={UsersSettings} />
                            </Switch>


                        </div>



                    </div>




                </div>


            </Fragment>
        )
    }
}



export default Authenticated(Users);