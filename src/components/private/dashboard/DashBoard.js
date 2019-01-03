import React, { Component } from 'react'
import { connect } from 'react-redux'
import Authenticated from '../../misc/auth/Authenticated'




class DashBoard extends Component {








    render() {



        const renderDashboard = () => {


            return (
                <div>

                </div>
            )






        }






        return (
            <div>
                {renderDashboard()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    async: state.async

})

// const mapDispatchToProps = {

// }


export default connect(mapStateToProps)(Authenticated(DashBoard));