
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'



function CSForm({

    handleSubmit,
    submitCallback,
  
}) {


 




    return (


        <form
            onSubmit={handleSubmit(submitCallback)}


        >


            <Field
                component={TextInput}
                name="username"
                type="text"
                styleFrom={{
                    color: 'black'
                }}
              
            />
            <Field
                component={TextInput}
                name="email"
                styleFrom={{
                    color: 'black'
                }}
                type="text"
              

            />

            <button
                type="submit"
                className="btn btn-success  
                btn-block "
            >
                Edit Account
            </button>

        </form>
    )
}




export default reduxForm({
    form: 'customeraccount'
})(CSForm)