import React, { Component, Fragment } from 'react'
import SmallNav from '../SmallNav/SmallNav'
import Navigator from '../../navigation/Navigator'
import Footer from '../footer/Footer'

import './PromoCode.css'






class PromoCode extends Component {





    render() {




        return (



            <Fragment>


                <section className="py-2"  >
                    <div className="newsletter-subscribe">
                        <div class="intro">
                            <h2 class="text-center">Want to know when discounts get ?</h2>
                            <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
                        </div>
                        <form class="form-inline" >
                            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Your Email" /></div>
                            <div class="form-group"><button class="btn btn-primary" type="submit">Subscribe </button></div>
                        </form>
                    </div>





                </section >


            </Fragment >
        )
    }
}



export default PromoCode;