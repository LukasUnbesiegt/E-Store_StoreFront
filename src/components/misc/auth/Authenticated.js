
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../../actions/userActions';
import { withRouter } from 'react-router-dom'




export default function (ComposedClass, reload, adminRoute = null) {


    class AuthenticationCheck extends Component {



        componentDidMount() {


            this.props.auth(this.props.history, reload, adminRoute);


        }

        render() {


            if (this.props.user.userData) {

                return (
                    <ComposedClass {...this.props} user={this.props.user.userData} />
                );
            } else {
                return (<div>
                    Loading
                </div>)
            }







        }
    }


    const mapStateToProps = (state) => ({
        user: state.user
    })

    const mapDispatchToProps = {
        auth
    }




    return connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthenticationCheck))
}

