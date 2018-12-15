import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'


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


class AdminRoutes extends Component {




  render() {





    return (




      <Fragment>

        <nav className="navbar">
          <div className="container-fluid">
            <div className="row">
              <div className={`col-xl-2 col-lg-3 ${styles.sidebar} fixed-top`}>
                <SideBar />
              </div>

              <div className={`col-xl-10 col-lg-9 col-md-8 ml-auto  fixed-top  top-navbar ${styles.navbarColor}`}>
                <div className=" p-2 d-flex justify-content-end">
                  <div className="">
                    <a href="#" className={`nav-link ${styles.iconBullet}`}><i className="fa fa-cog fa-lg"></i></a>

                  </div>

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
                  <Route exact path="/admin" component={DashBoard} />
                  <Route exact path="/admin/products" component={Products} />
                  <Route exact path="/admin/orders" component={Orders} />
                  <Route exact path="/admin/users" component={Users} />
                  <Route exact path="/admin/customers" component={Customers} />
                  <Route exact path="/admin/promotions" component={Promotions} />
                  <Route exact path="/admin/settings" component={Settings} />

                </Switch>

              </div>



            </div>

          </div>


        </section>

      </Fragment>
    )





  }
}





// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }



export default connect()(AdminRoutes);