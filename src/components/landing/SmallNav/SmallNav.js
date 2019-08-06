import React, { Component, Fragment } from 'react'
import {

    Navbar,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';





class SmallNav extends Component {




    renderLinks = () => {

        let isPadding = this.props.browser && this.props.browser.orientation === 'portrait' ? '' : 'pr-1'
        return (

            <Fragment>
                <ul className="nav ml-auto m-2 p-2">
                    <NavItem >
                        <NavLink> <i className={`fas fa-phone ${isPadding}`}></i>{this.props.store ? this.props.store.phone : 'phone number'}</NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink> <i className={`ni ni-email-83 ${isPadding}`}></i>{this.props.store ? this.props.store.email : 'email'} </NavLink>

                    </NavItem>
                </ul>
            </Fragment>
        )




    }







    render() {



        let height = this.props.browser && this.props.browser.orientation === 'portrait' ? '100%' : '60px'

        let navStyle = {
            backgroundColor: '#fff',
            height: height,
        }







        return (



            <nav className="nav" style={navStyle}>
                {
                    this.renderLinks()
                }
            </nav>
        )
    }
}




export default SmallNav;