import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navigator from '../../navigation/Navigator'
import Footer from '../footer/Footer'

class Header extends Component {



    render() {




        return (
            <div className="">
                <Navigator />

                <h3>Welcome to E Store</h3>

                <Footer />
            </div>
        )
    }
}




export default Header;