import React, { Component, Fragment } from 'react'
import { Table, Button, ButtonGroup } from 'reactstrap';

import AddDeliveryForm from './AddDelivery/AddDeliveryForm'


class Delivery extends Component {

    state = {

        isFormOpen: false
    }
    openForm = () => {
        this.setState({ isFormOpen: !this.state.isFormOpen });

    }

    render() {




        return (
            <Fragment>
                <h3 className="display-4 text-center mb-3">
                    Delivery Informations

                </h3>

                <div className="container">

                    <div className="row">
                        <div className="col-12 text-center py-4 ">
                            <ButtonGroup>
                                <Button onClick={() => this.openForm()}>Add Delivery</Button>
                                <Button>Manage Delivery</Button>

                            </ButtonGroup>
                        </div>
                    </div>
                    {
                        this.state.isFormOpen && <div className="row">
                            <div className="col-12">
                                <AddDeliveryForm />
                            </div>


                        </div>
                    }

                    <div className="row">

                        <Table>
                            <thead>
                                <tr>

                                    <th>Town</th>
                                    <th>Township</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Yangon</td>
                                    <td>North Okkalapa</td>
                                    <td>4000</td>
                                </tr>
                                <tr>

                                    <td>Mandalay</td>
                                    <td>Elite Bus</td>
                                    <td>2000</td>
                                </tr>
                                <tr>

                                    <td>Monywa</td>
                                    <td>Myint</td>
                                    <td>3100</td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>


                </div>



            </Fragment>
        )
    }
}



export default Delivery