import React, { useEffect, useState } from 'react'
import FormSignUp from './FormSignUp'
import './Form.css'
import { useNavigate } from 'react-router'

const Form = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true)
  }

  return (
    <div>
      <div className='form-container'>
        <span className='close-btn'>x</span>
        <div className='form-content-left'>
          <img src='img/img-2.svg' alt='' className='form-img' />
        </div>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          navigate("/settings")
        )}
      </div>
    </div>
  )
}

export default Form
