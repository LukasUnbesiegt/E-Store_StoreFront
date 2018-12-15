
import React, { Component } from 'react'





class Navigator extends Component {











    render() {

        const renderUserDropdown = () => {

                return (

                    <li className="nav-item dropdown hoverable">
                    <a className="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="ni ni-circle-08" style={{fontSize : '20px'}}></i>
                        <span className="nav-link-inner--text d-lg-none">User</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                        <a className="dropdown-item" href="/myaccount">Account</a>
                        <a className="dropdown-item" href="/orders">Your Orders</a>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item">LogOut</button>
                    </div>
                </li>

                )

                // return (

                //     <li className="nav-item">
                //     <a className="nav-link" href="/customer-login">Login | Register</a>
                //    </li>
                // )

        }

        const renderNavLinks = () => {

                return (
                    <ul className="navbar-nav ml-lg-auto">
                      <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                      <li className="nav-item">
                    <a className="nav-link" href="/products">Products</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="/orders">Your Orders</a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="/storeinfo">Shopper Info
                    </a>
                  </li>
                   

                    {renderUserDropdown()}
                    <li className="nav-item">
                        <a className="nav-link" href="/carts">
                        <i className="fa fa-lg fa-shopping-cart"></i>
                        </a>
                     </li>
                </ul>
                    
                )
            
        }


        

        const renderNavigations = () => {

            return (

                <div className="container">
                    <a className="navbar-brand" href="/">
                    <i class="ni ni-shop m-2"></i>
                            E-Store
                        
                    </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-default">
                            <div className="navbar-collapse-header">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="/">
                                        <i class="ni ni-shop m-2"></i>
                            E-Store
                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                    
                        </div>

                        {renderNavLinks()}
                </div>



                    )
        
                }
        
        
                return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundImage : 'linear-gradient(to right,  #38f9d7 0%, #43e97b 100%)'}}>
                        {renderNavigations()}
                    </nav>

                    )
                }
            }
            
          
            
            
            
export default Navigator;