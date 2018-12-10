import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import DashBoard from './dashboard/DashBoard'
import Authenticated from '../misc/auth/Authenticated'





class AdminRoutes extends Component {









  render() {





    return (




      <div>



        <Switch>
          <Route exact path="/admin" component={DashBoard} />

        </Switch>
      </div>
    )





  }
}





// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }



export default connect()(AdminRoutes);