import React, { Component, Fragment } from 'react'
import SmallNav from '../SmallNav/SmallNav'
import Navigator from '../../navigation/Navigator'
import Footer from '../footer/Footer'



class InfoUser extends Component {





    render() {



        return (
            <Fragment>
                <SmallNav />
                <Navigator />
                <h1 className="display-3 text-center mt-3 pt-3" >Customer SETTINGS</h1>
                <div className="container my-3 py-4">


                    <div class="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            value="thuta@gmail.com"
                        />

                    </div>
                    <div class="form-group">
                        <label>Username</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" value="Thuta Lukas" />

                    </div>

                    <div class="form-group">
                        <label>Address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address" value="371 Nilar 1st Street" />

                    </div>
                    <button className="btn btn-block btn-success my-4" disabled>
                        Edit Informations ?
    </button>
                </div>

                <Footer />
            </Fragment>
        )
    }
}




export default InfoUser;