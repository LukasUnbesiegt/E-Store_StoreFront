import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { logoutUser } from '../../actions/userActions'
import { getProductsToTable } from '../../actions/productsActions'
import styles from './AdminRoutes.module.css';
import Authenticated from '../misc/auth/Authenticated'
import SideBar from './sidebar/index'


import DashBoard from './dashboard/DashBoard'
import Products from './products/index'
import Orders from './orders/index'
import Categories from './categories/index'
import Users from './users/index'
import Promotions from './promotions/index'
import Settings from './settings/index'
import Customers from './customers/index'
import InfoUser from './InfoUser/InfoUser'




class AdminRoutes extends Component {


  state = {
    dropdownOpen: false
  }

  componentDidMount = () => {
    this.props.getProductsToTable()
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }



  logoutUser = () => {

    this.props.logoutUser()

  }



  renderSettingBar = () => {

    return (
      <li className="nav-item dropdown hoverable">
        <a className="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="ni ni-circle-08" style={{ fontSize: '36px', color: '#43e97b' }}></i>
          <span className="nav-link-inner--text d-lg-none">User</span>
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
          <a className="dropdown-item" href="/admin/infouser">User Informations</a>
          <a className="dropdown-item" href="#">Billings</a>
          <div className="dropdown-divider"></div>
          <button
            className="dropdown-item"
            onClick={this.logoutUser}


          >LogOut</button>
        </div>
      </li>

    )
  }

  render() {





    return (




      <Fragment>

        <nav className="navbar">
          <div className="container-fluid">
            <div className="row">
              <div className={`col-xl-2 col-lg-3 ${styles.sidebar} fixed-top`}>
                <SideBar


                />
              </div>

              <div className={`col-xl-10 col-lg-9 col-md-8 ml-auto  fixed-top  top-navbar ${styles.navbarColor}`}>
                <div className=" p-2 d-flex justify-content-end">

                  {this.renderSettingBar()}



                </div>
              </div>
            </div>

          </div>
        </nav>

        <section className="py-4">

          <div className="container-fluid">
            <div className="row">

              <div className="col-xl-10 col-lg-9 ml-auto">
                <Switch>
                  <Route exact path="/admin" component={Authenticated(DashBoard)} />
                  <Route path="/admin/products" component={Authenticated(Products)} />
                  <Route path="/admin/orders" component={Authenticated(Orders)} />
                  <Route path="/admin/users" component={Authenticated(Users)} />
                  <Route path="/admin/customers" component={Authenticated(Customers)} />
                  <Route path="/admin/promotions" component={Authenticated(Promotions)} />
                  <Route path="/admin/settings" component={Authenticated(Settings)} />
                  <Route path="/admin/infouser" component={Authenticated(InfoUser)} />

                </Switch>

              </div>



            </div>

          </div>


        </section>

      </Fragment>
    )





  }
}





const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  logoutUser,
  getProductsToTable
}



export default connect(mapStateToProps, mapDispatchToProps)(AdminRoutes);