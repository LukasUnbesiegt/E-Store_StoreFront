import React, { Component, Fragment } from 'react'

import Slider from './Carousel/Slider'
import { Switch, Route } from 'react-router-dom'
import Products from '../Products/Products'
import Navigator from '../../navigation/Navigator'
import Footer from '../footer/Footer'
import SmallNav from '../SmallNav/SmallNav';


class Header extends Component {



    render() {




        return (
            <Fragment>
                <SmallNav />
                <Navigator />
                <Switch>
                    <Slider />
                    <Route exact path="/products" component={Products} />
                </Switch>
                <Footer />
            </Fragment>
        )
    }
}




export default Header;