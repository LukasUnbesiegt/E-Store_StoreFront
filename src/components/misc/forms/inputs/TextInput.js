import React from 'react'






const TextInput = ({ input, type, placeholder, prepend, logo, meta: { touched, error } }) => {




    return (
        <div className="form-group mb-3">

            <div className="input-group input-group-alternative">
                {
                    prepend &&
                    (
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className={logo}></i>
                            </span>
                        </div>
                    )
                }
                <input
                    type={type}
                    className="form-control"
                    {...input}
                    placeholder={placeholder}

                />


            </div>
            {touched && error && <div className="invalid-feedback">{error}</div>}

        </div>
    )
}

export default TextInput;