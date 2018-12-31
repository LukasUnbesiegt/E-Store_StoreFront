import React from 'react'
import { Field, FieldArray } from 'redux-form'
import TextInput, { } from '../../../../misc/forms/inputs/TextInput'


function FieldArrayComponent(props) {



    const renderItems = ({ fields }) => {
        console.log(typeof fields)
        return (
            <div className="">

                <button
                    className="btn btn-sm btn-success"
                    onClick={() => { fields.push('') }}
                    type="button"

                >
                    {props.placeholder}
                </button>
                <ul
                    style={{
                        listStyle: 'none'
                    }}

                >
                    {fields.map((member, index) =>
                        <li key={index}>


                            <i className="fa fa-trash" onClick={() => fields.remove(index)} type="button"></i>



                            <Field
                                name={`${member}.${props.name}`}
                                type="text"
                                component={TextInput}
                                placeholder={props.placeholder} />

                        </li>
                    )}
                </ul>

            </div>)



    }


    return (
        <div>
            <FieldArray name={props.name} component={renderItems} />
        </div>
    )
}


export default FieldArrayComponent;