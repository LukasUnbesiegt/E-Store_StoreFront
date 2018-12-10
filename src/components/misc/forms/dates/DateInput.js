
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'



const DateInput = ({ input: { value, onChange, onBlur, ...restInput }, width, placeholder, meta: { touched, error }, ...rest }) => {





    if (value) {
        value = moment(value, 'X')
    }


    return (


        <div className="form-group mb-3" >
            <DatePicker
                {...rest}
                placeholderText={placeholder}
                selected={value ? moment(value) : null}
                onChange={onChange}
                onBlur={() => onBlur()}
                {...restInput}

            />

            {touched && error && <label basic color="red">{error}</label>}
        </div>


    )


}


export default DateInput;