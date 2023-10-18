import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const { name, email, password, password2 } = formData

    const onChange = () => { }

    const onSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <section className='heading'>
            <h1>
                <FaUser /> Register
                <p>Please create an account</p>
            </h1>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={name}
                            placeholder="Enter your name"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            className="form-control"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            value={password}
                            placeholder="Enter your password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            value={password2}
                            placeholder="Confirm your password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <button type='submit'
                        className='btn btn-block'
                        >
                            Submit
                        </button>
                    </div>

                </form>

            </section>


        </section>
    )
}

export default Register