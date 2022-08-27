import React from 'react'
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css'


const FormSignUp = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <div className='form-content-right' onSubmit={handleSubmit}>
            <form className='form'>
                <h1>Create your account</h1>
                <div className='form-inputs'>
                    <label htmlFor="username" className='form-label'>
                        Username
                    </label>
                    <input
                        id='username'
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder='Enter your user name'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor="email" className='form-label'>
                        Email
                    </label>
                    <input
                        id='email'
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder='Enter your user email'
                        value={values.email}
                        onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}

                </div>

                <div className='form-inputs'>
                    <label htmlFor="password" className='form-label'>
                        Password
                    </label>
                    <input
                        id='password'
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder='Enter your user password'
                        value={values.password}
                        onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}

                </div>

                <div className='form-inputs'>
                    <label htmlFor="password2" className='form-label'>
                        Confirm Password
                    </label>
                    <input
                        id='password2'
                        type="password2"
                        name="password2"
                        className="form-input"
                        placeholder='Enter your user password'
                        value={values.password2}
                        onChange={handleChange} />
                    {errors.password2 && <p>{errors.password2}</p>}

                </div>
                <button className='form-input-btn' type='submit'>Sign up</button>
                <span className='form-input-login'>
                    Already have an account? Login <a href='#'>here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignUp