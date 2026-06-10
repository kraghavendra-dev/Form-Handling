import React, { useState } from 'react'
import './LoginPage.css'
import { useNavigate } from "react-router-dom";



const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  
  const [errros, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    // If no errors → redirect
    if (Object.keys(validationErrors).length === 0) {
      navigate("/");
    }
  };



  return (
    <div className='login-page'>
      <h2>Form Handling</h2>
      <form className='card-container' onSubmit={handleSubmit}>
        <h2>Creact your Account</h2>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input 
              type='text'
              name="name"
              placeholder='Enter name'
              value={formData.name}
              onChange={handleChange}
            />
            {
              errros.name && (
                <p style={{ color: "red"}}>{errros.name}</p>
              )
            }
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input 
              type="email"
              name="email"
              placeholder='Enter Data'
              value={formData.email}
              onChange={handleChange}
            
            />
            {
              errros.email && (
                <p style={{ color: "red"}}>{errros.email}</p>
              )
            }
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
               type="password"
               name="password"
               placeholder='Enter Password'
               value={formData.password}
               onChange={handleChange}
            />
            {
              errros.password && (
                <p style={{ color: "red"}}>{errros.password}</p>
              )
            }
          </div>

          <button type="submit" className='submit-botton'>Submit</button>
      </form>
      <p>Enter fake details and click Submit button, you automatically redirect to Home page</p>
    </div>
  )
}

export default LoginPage
