
import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Badge, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink as BSNavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem , Dropdown
} from 'reactstrap';
import { connect } from 'react-redux'
import { openModal } from '../misc/modalManager/modalActions'
import { logoutUser, accountKitLogin } from '../../actions/userActions'
import AccountKit from '../../services/accountkit';
import { FB_APP_ID , globalStyle  , storeStatics} from '../../config'




class Navigator extends Component {


    state = {
        isOpen: false,
        width: window.innerWidth ,
        dropdownOpen: false ,
        dropdownOpen2: false
    };



    handleWidthChange = () => {
        this.setState({
            width: window.innerWidth
        })
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleWidthChange)
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleWidthChange)
    }

    toggleDropDown = () => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
      toggleDropDown2 = () => {
        this.setState(prevState => ({
          dropdownOpen2: !prevState.dropdownOpen2
        }));
      }
    
    toggle = () => {


        if (this.state.width < 500) {
            this.setState({
                isOpen: !this.state.isOpen
            });

        }

    }
    accountKitLoginHandler = (resp) => {

        this.props.accountKitLogin(resp.code)

    }

    renderLists = (arr , type) => {

return arr.map((list) => {


    return (
        <DropdownItem tag="a" href={`/products?${type}=${list._id}`}  style={{fontSize : '1.1rem' , color : 'black'}}  >{list.name}</DropdownItem>
    )
        


})
      


    }
    renderListsCollection = (arr , type) => {

        return arr.map((list) => {
        
        
            return (
                <DropdownItem tag="a" href={`/collection/?type=collections&id=${list._id}`}  style={{fontSize : '1.1rem' , color : 'black'}}  >{list.name}</DropdownItem>
            )
                
        
        
        })
              
        
        
            }

    render() {

        const renderUserDropdown = () => {
            let AdminAccess;
            if (this.props.user) {
                AdminAccess = this.props.user.isEditor || this.props.user.isAdmin;
            }

       


            if (this.props.user && this.props.user.isAuth) {

                return (

                    <li className="nav-item dropdown hoverable">
                        <NavLink className="nav-link nav-link-icon" to="/" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ni ni-circle-08" style={{ fontSize: '20px' }}></i>
                            <span className="nav-link-inner--text d-lg-none">User</span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                            <NavLink className="dropdown-item" to="/account/orders">Account</NavLink>

                            {
                                AdminAccess && (<NavLink className="dropdown-item" to="/admin/products">Admin Dashboard</NavLink>)
                            }


                            <div className="dropdown-divider"></div>
                            <button
                                className="dropdown-item"
                                onClick={() => { this.props.logoutUser() }}
                            >
                                LogOut
                            </button>
                        </div>
                    </li>

                )


            } else {
                return (

                    <li className="nav-item" onClick={this.toggle} >

                        <AccountKit
                            appId={FB_APP_ID}
                            version="v1.1"
                            onResponse={(resp) => { this.accountKitLoginHandler(resp) }}
                            csrf={'yngWIE273929'}
                            countryCode={'+95'}
                            display={"modal"}



                        >
                            {p => <button className="btn btn-white"  {...p} > Shopper Login</button>}
                        </AccountKit>

                    </li>
                )
            }


        }

        const renderNavLinks = () => {

            const {categories , collections} = this.props;

            return (
                <ul className="navbar-nav ml-lg-auto">
                  
                   <li className="nav-item">
                   <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown} style={{cursor : 'pointer'}} >
  <DropdownToggle caret tag="a"  style={{fontSize : '1.1rem'}} className="nav-link">
      Products
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem  style={{fontSize : '1.1rem' , color : 'black'}} tag="a" href="/products">All Products</DropdownItem>
                {
                    this.renderLists(this.props.categories ? categories : [] , 'category')
                }
    
  </DropdownMenu>
</Dropdown>
                   </li>
                   <li className="nav-item">
                   <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggleDropDown2} style={{cursor : 'pointer'}} >
  <DropdownToggle caret tag="a"  style={{fontSize : '1.1rem'}} className="nav-link">
      Collections
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem  style={{fontSize : '1.1rem' , color : 'black'}} tag="a" href="/products">All Collections</DropdownItem>
                {
                    this.renderListsCollection(this.props.collections ? collections : [] , 'collections')
                }
    
  </DropdownMenu>
</Dropdown>
                   </li>
                  
                   
                    <li className="nav-item">
                        <NavLink activeStyle={{borderBottom : '1px solid #fff'}} className="nav-link" to="/onsale" style={{fontSize: '1.1rem'}}>On Sale</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeStyle={{borderBottom : '1px solid #fff'}} className="nav-link" to="/about" style={{fontSize: '1.1rem'}}>About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeStyle={{borderBottom : '1px solid #fff'}} className="nav-link" to="/admin" style={{fontSize: '1.1rem'}}>Owner Login</NavLink>
                    </li>
                 

                    {renderUserDropdown()}

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/carts">

                            <i className="fa fa-shopping-cart"
                                style={{
                                    fontSize: '24px',
                                    position: 'relative'
                                }}
                            >
                                <Badge
                                    color="light"
                                    style={{
                                        position: 'absolute',
                                        bottom: '5px',
                                        color: '#fff'

                                    }}
                                >
                                    {

                                        this.props.totalQuantity

                                    }
                                </Badge>
                            </i>
                        </NavLink>
                    </li>
                </ul>

            )

        }



        const renderCart = () => {

            if (this.props.browser.orientation === 'landscape') {

                return (
                    <a className="navbar-brand " style={{ color: '#fff' , fontSize : '1.4rem' , cursor : 'pointer' }} href="/" >
                        <i className="ni ni-shop m-2"></i>
                        {storeStatics.logoName}
                </a>
                )

            } else {
                return (<Fragment>
                    <NavLink className="nav-link" to="/carts" style={{ color: '#fff' }}>

                        <i className="fa fa-shopping-cart"
                            style={{
                                fontSize: '24px',
                                position: 'relative'
                            }}
                        >
                            <Badge
                                color="light"
                                style={{
                                    position: 'absolute',
                                    bottom: '5px',
                                    color: '#fff'

                                }}
                            >
                                {

                                    this.props.totalQuantity

                                }
                            </Badge>
                        </i>
                    </NavLink>
                    <NavLink className="navbar-brand" style={{ color: '#fff' }} to="/">
                        <i className="ni ni-shop m-2"></i>
                        {storeStatics.logoName}
                  </NavLink>

                </Fragment>)
            }

        }


        const renderNavigations = () => {





            return (

                <div className="container-fluid">


                    {renderCart()}
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="/">
                                        <i className="ni ni-shop m-2"></i>

                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" onClick={this.toggle}>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {renderNavLinks()}

                    </Collapse>


                </div>



            )

        }




        return (


            <Navbar
                expand="md"
                style={{ backgroundImage: `linear-gradient(to right,  ${globalStyle.backgroundColor} 0%, ${globalStyle.backgroundColor} 100%)` }}
                dark

            >
                {renderNavigations()}
            </Navbar>



        )
    }
}




const mapStateToProps = (state) => {



    return {
        totalQuantity: state.products.cartItems ? state.products.cartItems.totalQuantity : null,
        categories : state.products ? state.products.categories : [] ,
        collections : state.products ? state.products.collections : [] ,
        browser: state.browser
    }






}

const mapDispatchToProps = {
    openModal,
    logoutUser,
    accountKitLogin
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigator);