
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCategories } from './actions/productsActions'

import Header from './components/landing/header/Header'

import AdminRoutes from './components/private/AdminRoutes'
import Products from './components/landing/Products/Products'
import Orders from './components/landing/Orders/Orders'
import Carts from './components/landing/Carts/Carts'
import LoginCustomer from './components/landing/CustomerAccount/LoginRegister/LoginRegister'
import NotFound from './components/landing/NotFound'
import MyAccount from './components/landing/CustomerAccount/Account'
import ContactUs from './components/landing/ContactUs/ContactUs'
import ProductDetails from './components/landing/Products/ProductDetails/ProductDetails'
import LoginAdmin from './components/login-register/index'
import ModalManager from './components/misc/modalManager/modalManager';






class Routes extends Component {


  componentDidMount = () => {

    this.props.getCategories()
  }


  render() {


    return (




      <div>

        <ModalManager />

        <Switch>
          <Route exact render={(props) => (<Header />)} path="/" />
          <Route exact render={(props) => (<Products />)} path="/products" />
          <Route exact render={(props) => (<ProductDetails />)} path="/pdetails" />
          <Route exact component={Orders} path="/orders" />
          <Route exact component={Carts} path="/carts" />
          <Route exact render={(props) => (<ContactUs />)} path="/storeinfo" />
          <Route exact component={MyAccount} path="/myaccount" />
          <Route exact component={LoginCustomer} path="/customer-login" />
          <Route exact component={LoginAdmin} path="/login-admin" />
          <AdminRoutes />

          <Route component={NotFound} />
        </Switch>




      </div>




    )
  }

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  getCategories
}



export default connect(mapStateToProps, mapDispatchToProps)(Routes);

