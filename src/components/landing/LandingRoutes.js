import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigator from '../navigation/Navigator'
import Footer from './footer/Footer'
import SmallNav from './SmallNav/SmallNav'
import Header from './header/Header'


class LandingRoutes extends Component {





    render() {






        return (
            <div>
                <SmallNav />
                <Navigator />
                <Switch>

                    <Route exact component={Header} path="/" />
                </Switch>
                <Footer />
            </div>

        )
    }
}





export default LandingRoutes;