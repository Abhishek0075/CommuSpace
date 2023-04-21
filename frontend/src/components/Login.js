import React, {useState} from "react";
import logo from "./2.png";
import logo1 from "./25.png"
import { NavLink } from 'react-router-dom';
import "../App.css";

export const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (!response.ok) {
            throw new Error("Invalid email or password");
          }
    
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error.message);
        }
    };

    return (
    <>
    <div className="Bebo">
            
        
        <section className="signin">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="auth-form-container1">
                        <form className="login-form" onSubmit={handleSubmit}>
                            
                            <h2 className="form-title">Login</h2>
                            
                            <label htmlFor="email"></label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="phone/email" id="email" autoComplete="off" name="email"/>
                            <label htmlFor="password"></label>
                            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" autoComplete="off" name="password"/>
                            <button onClick={handleSubmit}>Login</button>
                        </form>
                        <NavLink to = "/register" className="signup-image-link1">Sign up to CommuSpace </NavLink>
                        <NavLink to = "/passmail" className="signup-image-link1">Forgot Password? </NavLink>
                     </div>
            
                </div>
            </div>  
        </section>
    </div>
        
    </>
        
    )
}

function CreateLoginPageWrapper() {
    return (
      <div className="create-login-page-wrapper">
        <Login/>
      </div>
    );
  }
  
  export default CreateLoginPageWrapper;
