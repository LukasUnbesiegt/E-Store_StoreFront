
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { navitems } from './navitems'
import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.css'




class SideBar extends Component {





    render() {


        const renderUsername = () => {
            return (
                <div className="pb-3 text-center">
                    <span className={`text-white ${styles.borderLine}`}>Welcome! Admin</span>
                </div>
            )
        }



        const renderNavItems = () => {


            const navItems = navitems.map((item) => {

                return (

                    <li className="nav-item">
                        <NavLink to={item.linkTo} className={`nav-link text-white p-3 mb-2  ${styles.sidebarlink}`}>
                            <i className={`fa ${item.icon} fa-lg mr-3`}></i>
                            {item.name}
                        </NavLink>
                    </li>

                )

            })
            return (

                <ul className="navbar-nav flex-column mt-4">


                    {navItems}





                </ul>

            )



        }






        return (
            <Fragment>
                <a href="/admin" className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">
                    <h5 className="text-white">E-Store</h5>
                </a>

                {renderUsername()}

                {renderNavItems()}
            </Fragment>
        )
    }
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}


export default connect()(SideBar);