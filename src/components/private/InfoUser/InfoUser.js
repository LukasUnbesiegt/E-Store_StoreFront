import React, { Component, Fragment } from 'react'

class InfoUser extends Component {





    render() {



        return (
            <Fragment>
                <h1 className="display-3 text-center" >USER SETTINGS</h1>
                <div className="container">


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
                        <label>Role</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Role" value="Admin" />

                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address" value="371 Nilar 1st Street" />

                    </div>
                    <button className="btn btn-block btn-success my-4" disabled>
                        Edit Informations ?
    </button>
                </div>
            </Fragment>
        )
    }
}




export default InfoUser;