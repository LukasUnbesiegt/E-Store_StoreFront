
import React, { Component, Fragment } from 'react'
import Footer from '../footer/Footer'
import SmallNav from '../SmallNav/SmallNav'
import Navigator from '../../navigation/Navigator'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Authenticated from '../../misc/auth/Authenticated'
import OrderForm from './OrderForm/index'
import AccountKit from '../../../services/accountkit'
import { accountKitLogin } from '../../../actions/userActions'
import { FB_APP_ID } from '../../../config'



class Orders extends Component {



    accountKitLoginHandler = (resp) => {

        this.props.accountKitLogin(resp.code)

    }

    render() {


        const renderOrderSubmitForm = () => {

            if (this.props.user && this.props.user.isAuth) {




                return (
                    <OrderForm



                    />
                )


            } else {



                return (

                    <div
                        className="my-3 py-3"
                    >

                        <h5>You are not logged in yet</h5>
                        <AccountKit
                            appId={FB_APP_ID}
                            version="v1.1"
                            onResponse={(resp) => { this.accountKitLoginHandler(resp) }}
                            csrf={'yngWIE273929'}
                            countryCode={'+95'}
                            display={"modal"}



                        >
                            {p => <button className="btn btn-success"  {...p} > Shopper Login</button>}
                        </AccountKit>
                    </div>
                )



            }


        }


        return (
            <Fragment>
                <SmallNav
                    browser={this.props.browser}
                    store={this.props.site && this.props.site.store}
                />
                <Navigator
                    user={this.props.user}
                />


                <div className="container py-4 my-2">

                    <div className="my-2">
                        <Link className="btn btn-sm btn-success" to="/carts">Back to Cart</Link>
                    </div>

                    <h5 className="text-center text-muted display-4 mb-3">User Information and Payment Form</h5>
                    {renderOrderSubmitForm()}

                </div>






                <Footer />
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({

})


const mapDispatchToProps = {
    accountKitLogin

}



export default connect(null, mapDispatchToProps)(Authenticated(Orders, true));