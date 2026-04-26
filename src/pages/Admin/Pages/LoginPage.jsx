import React from 'react'
import "./css/loginpage.css";
const LoginPage = () => {
    const baseUrl = import.meta.env.BASE_URL;
  return (
    <div className='login-page'>
        <div className="wall-img">
            <img src={`${baseUrl}/img/account-protection.png`} alt="" />
        </div>
        <form className='login-form' >
        <div className="login-heading-container">
            <h1 className='login-heading'>Admin Login</h1>
            <p className='login-subheading'>Please enter your credentials to access the admin dashboard.</p>

        </div>
            <div className="input-field">

            <input type="email" placeholder='Enter your Email' name="email" className='login-input' />
            </div>

            <div className='input-field'>

            <input type="password" placeholder='Enter your Password' name="password" className="login-input" />
            </div>
            <button className='form-btn'>
                Login
            </button>
        </form>
    </div>
  )
}

export default LoginPage;