import React, { Component } from 'react'
import { connect } from 'react-redux'






class DashBoard extends Component {








    render() {



        const renderDashboard = () => {

            if (this.props.async.loading) {

                return (
                    <div>
                        <h1>Loading</h1>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h1>ADMIN</h1>
                    </div>
                )
            }





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


export default connect(mapStateToProps)(DashBoard);