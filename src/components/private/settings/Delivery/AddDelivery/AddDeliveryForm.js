import React, { Component } from 'react'
import { Table, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class AddDeliveryForm extends Component {




    render() {
        return (
            <div>


                <div class="form-group">

                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Township or Gate" />

                </div>
                <div class="form-group">

                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Town" />

                </div>
                <div class="form-group">

                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Price" />

                </div>
                <button className="btn btn-block btn-success my-4">
                   Add Delivery
                    </button>
            </div>

        )
    }
}


export default AddDeliveryForm;
