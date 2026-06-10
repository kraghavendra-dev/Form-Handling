import React from 'react'
import './HomePage.css'
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className='home-page'>
            <div className="navbar">
            <div className="logo">
                <h1>Form Handling</h1>
            </div>
            <div className="buttons">
                <Link to="/loginPage"  ><button>Sign In</button></Link>
            </div>
        </div>
        <div className='content-container'>
        <div className="card">
            <div className="content">
            <h1>Welcome to Form Handling</h1>
            <p>
                Form handling in React is used to manage user input in web applications such as login forms, registration pages, and contact forms. React mainly uses controlled components, where form data is managed using state with the useState hook.<br/>
                Please Click below button for Sign Page, view form and its error handling.
            </p>

            <Link to="/loginPage"  ><button>Sign In</button></Link>
             </div>
        </div>
        </div>
    </div>
  )
}

export default HomePage