import React, { Component } from 'react'

import './ContactForm.css'



class ContactForm extends Component {




    render() {




        return (
            <div id="contact">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6">
                            <div id="contact-left">

                                <h3>VESCO</h3>


                                <div id="contact-info">


                                    <strong>Headquarters:</strong>
                                    <p> 371 Nilar first street
                                   North Okkalapa, Yangon 11787 Myanmar</p>

                                    <div id="phone-fax-email">

                                        <strong>Phone:</strong><span> 09 43207314 </span> <br />
                                        <strong>Fax:</strong><span>  09 968717100  </span>  <br />
                                        <strong>Email:</strong><span>  support@estore.com  </span>  <br />

                                    </div>

                                </div>
                                <ul className="social-list">
                                    <li><a href="#" className="social-icon icon-white"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="social-icon icon-white"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" className="social-icon icon-white"><i className="fa fa-youtube-play"></i></a></li>
                                    <li><a href="#" className="social-icon icon-white"><i className="fa fa-google-plus"></i></a></li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="contact-right">

                                <h3>Contact Us</h3>
                                <form action="#">

                                    <input type="text" name="full-name" placeholder="Full Name" className="form-control" />
                                    <input type="text" name="email" placeholder="Email Address" className="form-control" />
                                    <textarea rows="5" name="message" placeholder="Message..." className="form-control"></textarea>

                                    <div id="send-btn">
                                        <a className="btn btn-block btn-lg btn-general btn-white my-3" href="#" role="button">SEND</a>
                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}



export default ContactForm;