import React, { Component } from 'react'
import HeaderBar from '../../styles/HeaderBar'
import { Switch, Route } from 'react-router-dom'

import Authenticated from '../../misc/auth/Authenticated'
import Table from './PromotionsTable/PromotionsTable'


import AddPromotions from './AddPromotions/AddPromotions'
import PromotionsSettings from './PromotionsSettings/PromotionSettings'

class Promotions extends Component {


    render() {



        return (

            <div>
                <HeaderBar
                    title="Promotions"
                    sectionTitle="Promotions"
                    quantity={0}
                    iconStyle="fa fa-angellist"
                    cat="Manage Promotions"
                    linkAdd="/admin/promotions/add"
                    linkTable="/admin/promotions/"
                    linkSetting="/admin/promotions/settings"
                />

                <div className="container-fluid pt-3 mt-3">
                    <div className="row">

                        <div className="col-12">

                            <Switch>
                                <Route exact path="/admin/promotions/" component={Table} />
                                <Route path="/admin/promotions/add/" component={AddPromotions} />
                                <Route path="/admin/promotions/settings/" component={PromotionsSettings} />
                            </Switch>


                        </div>



                    </div>




                </div>
            </div>

        )
    }
}



export default Authenticated(Promotions);