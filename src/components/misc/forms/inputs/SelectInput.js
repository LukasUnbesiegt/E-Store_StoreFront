import React from 'react'
import { Form, Label, Select } from 'semantic-ui-react'





const SelectInput = ({ input, type, placeholder, multiple, options, meta: { touched, error } }) => {




    return (
        // <Form.Field error={touched && !!error} >
        //         <Select
        //          value={ input.value || null }
        //          onChange={(e , data) => {

        //             input.onChange(data.value)
        //          }}
        //          placeholder={placeholder}
        //          options={options}
        //          multiple={multiple}

        //         >


        //         </Select>
        //         {touched && error && <label basic color="red">{error}</label>}
        // </Form.Field>

        <div className="form-group mb-3">



            <select
                className="custom-select"
                value={input.value || null}
                onChange={(e, data) => {

                }}
                multiple={multiple}
                placeholder={placeholder}
            >

                {options.map((option) => {
                    return (
                        <option value={option.value} >{option.key}</option>
                    )
                })}

            </select>


            {touched && error && <div className="invalid-feedback">{error}</div>}

        </div>


    )
}

export default SelectInput;