import React, { Component, Fragment } from 'react'

import Slider from './Carousel/Slider'
import { Switch, Route } from 'react-router-dom'
import Products from '../Products/Products'
import Navigator from '../../navigation/Navigator'
import Footer from '../footer/Footer'
import SmallNav from '../SmallNav/SmallNav';
import Categories from '../Categories/Categories'
import Featured from '../Featured/Featured'
import Promotions from '../Promotions/Promotions'
import Why from '../Why/Why'
import NewArrival from '../NewArrival/NewArrival'
import PeopleLoved from '../PeopleLoved/PeopleLoved'
import PromoCode from '../PromoCodes/PromoCode'
import TermsAndConds from '../TermsAndConds/TermsAndConds'
import ContactForm from '../ContactUs/ContactForm/ContactForm'
import FooterBottom from '../footer/FooterBottom/FooterBottom'
import Authenticated from '../../misc/auth/Authenticated'

import { connect } from 'react-redux'





class Header extends Component {



    render() {




        return (
            <Fragment>
                <SmallNav />
                <Navigator />

                <Slider />
                <Why />
                <Categories />
                <Featured />
                <Promotions />
                <PromoCode />
                <NewArrival />
                <PeopleLoved />
                <TermsAndConds />
                <ContactForm />


                <Footer />
                <FooterBottom />

            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}



export default connect()(Authenticated(Header, true));