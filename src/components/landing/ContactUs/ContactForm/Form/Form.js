
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'
import TextArea from '../../../../misc/forms/inputs/TextArea'


function Form({
    handleSubmit,
    submitCallback
}) {
    return (
        <div>
            <form onSubmit={handleSubmit(submitCallback)}>

                <Field
                    component={TextInput}
                    name="name"
                    placeholder="your name"
                    style={{
                        color: 'black'
                    }}
                />
                <Field
                    component={TextInput}
                    name="phone"
                    placeholder="your phone"
                    style={{
                        color: 'grey'
                    }}
                />
                <Field
                    component={TextArea}
                    name="description"
                    placeholder="your message description"
                    rows={5}
                    style={{
                        color: 'grey'
                    }}
                />

                <button className="btn btn-block" type="submit"> Send your message</button>

            </form>
        </div>
    )
}



export default reduxForm({ form: 'contact' })(Form)