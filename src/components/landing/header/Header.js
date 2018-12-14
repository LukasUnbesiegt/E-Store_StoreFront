import React, { Component, Fragment } from 'react'

import Slider from './Carousel/Slider'
import { Switch, Route } from 'react-router-dom'
import Products from '../Products/Products'
import Navigator from '../../navigation/Navigator'
import Footer from '../footer/Footer'
import SmallNav from '../SmallNav/SmallNav';
import Categories from '../Categories/Categories'
import Featured from '../Featured/Featured'
import Promotions from '../Promotions/Promotions'
import Why from '../Why/Why'

class Header extends Component {



    render() {




        return (
            <Fragment>
                <SmallNav />
                <Navigator />

                <Slider />
                <Why />
                <Categories />
                <Featured />
                <Promotions />



                <Footer />

            </Fragment>
        )
    }
}




export default Header;