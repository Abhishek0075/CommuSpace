import React, {useState} from "react";
import reactLogo from "./1.png";
export const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(email);
}

    return (
        <div className="auth-form-container1">
            <form className="login-form" onSubmit={handleSubmit}>
            
            <label htmlFor="email">Phone number/email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="phone/email" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password"/>
            <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Register to CommuSpace</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Forgot Password?</button>

        <div className="right_data mt-5" style={{width: "100%"}}>
    <div className="reactLogo mt-5">
      <img src={reactLogo} alt="react logo" width="450" height="450"/>
    </div>
    </div>
        </div>
    )
}