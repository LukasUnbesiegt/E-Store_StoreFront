import React, { Component, Fragment } from 'react'
import SmallNav from '../SmallNav/SmallNav'
import Navigator from '../../navigation/Navigator'
import Footer from '../footer/Footer'
import Authenticated from '../../misc/auth/Authenticated'
import Lists from './Lists/Lists'
import { Switch, Route } from 'react-router-dom'
import { getOrdersById } from '../../../actions/customerActions'
import CustomerOrders from './CustomerOrders/CustomerOrders'
import CustomerSettings from './CustomerSettings/CustomerSettings'
import { connect } from 'react-redux'





class InfoUser extends Component {


    componentDidMount = () => {
        this.props.getOrdersById()
    }




    render() {



        return (
            <Fragment>
                <SmallNav
                    browser={this.props.browser}
                    store={this.props.site && this.props.site.store}

                />
                <Navigator
                    user={this.props.user}
                />


                <div className="container-fluid my-3 py-4">

                    <div className="row">

                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <Lists />

                        </div>


                        <div className="col-lg-10 col-md-9 col-sm-12">

                            <Switch>

                                <Route exact path="/account/orders/" component={CustomerOrders} />
                                <Route path="/account/settings" render={() => <CustomerSettings user={this.props.user} />} />


                            </Switch>


                        </div>

                    </div>



                </div>

                <Footer />
            </Fragment>
        )
    }
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    getOrdersById
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated(InfoUser));