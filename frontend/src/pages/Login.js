import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,   
            [e.target.name] :e.target.value
        }))
     }

    const onSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <section className='heading'>
            <h1>
                <FaSignInAlt /> Login
                <p>Login and start setting goals</p>
            </h1>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email"
                            className="form-control"
                            value={email}
                            name='email'
                            placeholder="Enter your email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            value={password}
                            name='password'
                            placeholder="Enter your password"
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

export default Login