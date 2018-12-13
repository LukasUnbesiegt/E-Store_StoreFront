
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'



class Footer extends Component {








    render() {





        return (


            <div className={styles.footerDark}>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className={`col-sm-6 col-md-3 ${styles.item}`}>
                                <h3>Information</h3>
                                <ul>
                                    <li><NavLink to="/terms">Terms and Conditions</NavLink></li>
                                    <li><NavLink to="/delivery">Delivery Information</NavLink></li>
                                    <li><NavLink to="/privacy">Privacy and Policy</NavLink></li>
                                </ul>
                            </div>
                            <div className={`col-sm-6 col-md-3 ${styles.item}`}>
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className={`col-sm-6 col-md-3 ${styles.item}`}>
                                <h3>E Commerce Store</h3>
                                <p className="text-white">Welcome to E Store, your reliable and convenient Online Shopping  in Myanmar. Get ready as E Store empowers you
                                 to let loose your shopaholic beast and go on a crazy online shopping spree like never before. </p>
                            </div>
                            <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                        </div>
                        <p className={`${styles.copyright}`}>E Store © 2018</p>


                    </div>
                </footer>
            </div>
        )
    }
}




export default Footer