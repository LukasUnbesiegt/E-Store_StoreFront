
import React from 'react'
import { Route, Switch } from 'react-router-dom'


import Header from './components/landing/header/Header'

import AdminRoutes from './components/private/AdminRoutes'


import ModalManager from './components/misc/modalManager/modalManager';






const Routes = () => {





  return (




    <div>

      <ModalManager />

      <Switch>
        <Route exact path="/" component={Header} />
        <AdminRoutes />
      </Switch>




    </div>




  )
}




export default Routes;

