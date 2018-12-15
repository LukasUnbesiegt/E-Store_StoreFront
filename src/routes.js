
import React from 'react'
import { Route, Switch } from 'react-router-dom'


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

import ModalManager from './components/misc/modalManager/modalManager';






const Routes = () => {





  return (




    <div>

      <ModalManager />

      <Switch>
        <Route exact component={Header} path="/" />
        <Route exact component={Products} path="/products" />
        <Route exact component={ProductDetails} path="/pdetails" />
        <Route exact component={Orders} path="/orders" />
        <Route exact component={Carts} path="/carts" />
        <Route exact component={ContactUs} path="/storeinfo" />
        <Route exact component={MyAccount} path="/myaccount" />
        <Route exact component={LoginCustomer} path="/customer-login" />
        <AdminRoutes />





        <Route component={NotFound} />
      </Switch>




    </div>




  )
}




export default Routes;

