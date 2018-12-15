import React, { Component, Fragment } from 'react'

class FAQ extends Component {



    render() {
        return (
            <Fragment>
                <h3 className="display-4 text-center">
                    Add Frequently Ask Questions
                </h3>

                <div className="">



                    <div className="col-12">

                        <form>

                            <div className="form-group">

                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Question" />

                            </div>
                            <div className="form-group">

                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Answer" />
                            </div>

                            <button type="submit" className="btn btn-success">Add FAQ</button>



                        </form>






                    </div>




                </div>

            </Fragment >
        )
    }
}




export default FAQ;