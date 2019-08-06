import React, { Component } from 'react'
import Form from './Form'
import { connect } from 'react-redux'
import { applyPromo } from '../../../../actions/customerActions'
import { toastr } from 'react-redux-toastr'



class PromoCode extends Component {

    submitCallbackHandler = (data) => {

        const toastrConfirmOptions = {
            onOk: () => this.props.applyPromo(data.promocode),
            onCancel: () => console.log('CANCEL: clicked')
        };
        toastr.confirm('apply promo code only when u ready to checkout', toastrConfirmOptions)


    }



    render() {




        return (


            <div>
                <Form
                    submitCallback={this.submitCallbackHandler}
                    errorsServer={this.props.errors.errors ? this.props.errors.errors : {}}

                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    errors: state.errors
})

const mapDispatchToProps = {
    applyPromo
}


export default connect(mapStateToProps, mapDispatchToProps)(PromoCode)