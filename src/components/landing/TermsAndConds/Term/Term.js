

import React, { Component, Fragment } from 'react'
import { ListGroup, ListGroupItem, Collapse } from 'reactstrap';




class Term extends Component {


    state = {
        collapse: false
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {





        return (


            <Fragment>
                <ListGroupItem
                    tag="button"
                    action
                    onClick={() => { this.toggle() }}


                >
                    {this.props.question} <i className="ni ni-bold-down pl-3"></i>
                </ListGroupItem>

                <Collapse isOpen={this.state.collapse}>

                    <div className="container my-3 py-3">

                        <div className="row">
                            <div className="col-12 text-center bg-white">

                                <p>  {this.props.answer}</p>
                            </div>

                        </div>

                    </div>

                </Collapse>
            </Fragment>


        )
    }
}




export default Term;