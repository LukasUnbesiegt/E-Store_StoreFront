import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddPromotionsForm from './AddPromotionsForm'






class AddPromotions extends Component {




    addUser = () => {



    }



    render() {







        return (


            <div className="text-center">

                <h4 className="text-center display-4"> Add Promo Codes</h4>
                <AddPromotionsForm
                    submitCallback={this.addUser}


                />
            </div>
        )
    }
}



export default AddPromotions;