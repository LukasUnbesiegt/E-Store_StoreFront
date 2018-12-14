import React, { Component } from 'react'






class SmallNav extends Component {





    render() {




        return (



            <nav className="navbar navbar-expand-lg navbar-dark bg-success"
                style={{
                    height: '20px',
                    // backgroundColor: '#e8e2db'
                    fontSize: '20px'
                }}
            >
                <ul className="navbar-nav ml-lg-auto">
                    <li className="nav-item">
                        <a className="nav-link nav-link-icon" href="#">
                            <i className="ni ni-favourite-28"></i>
                            <span className="nav-link-inner--text"
                                style={{

                                    fontSize: '13px'
                                }}

                            >371 Nilar First Street North Okkalapa</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="#">
                            <i class="ni ni-notification-70"></i>
                            <span class="nav-link-inner--text"
                                style={{

                                    fontSize: '13px'
                                }}
                            >09968717100</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}




export default SmallNav;