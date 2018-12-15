import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap';


import Faq from './FAQ/FAQ'
import SiteInfo from './SiteInfo/SiteInfo'
import Currency from './Currency/Currency'

class Settings extends Component {







    render() {


        const Lists = [

            {
                name: 'Currency',
                linkTo: '/admin/settings/currency'
            },
            {
                name: 'FAQs',
                linkTo: '/admin/settings/faq'
            },
            {
                name: 'Site Info',
                linkTo: '/admin/settings/siteinfo'
            }


        ]
        const renderListItems = () => {



            return Lists.map((list) => {
                return (

                    <ListGroupItem
                        tag="a"
                        href={list.linkTo}
                        action
                    >
                        {list.name}
                    </ListGroupItem>
                )
            })


        }



        return (
            <Fragment>
                <div className="mt-3">
                    <div className="row">

                        <div className="col-md-3 col-lg-4">
                            <ListGroup>
                                {renderListItems()}
                            </ListGroup>


                        </div>

                        <div className="col-md-9 col-lg-8">

                            <Switch>
                                <Route exact path="/admin/settings/currency" component={Currency} />
                                <Route path="/admin/settings/faq" component={Faq} />
                                <Route path="/admin/settings/siteinfo" component={SiteInfo} />
                            </Switch>

                        </div>

                    </div>

                </div>


            </Fragment>
        );
    }
}





export default Settings;