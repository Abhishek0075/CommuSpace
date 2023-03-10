import React, {useState} from "react";
export const Register = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>

            <label htmlFor="Create an Account in CommuSpace">Create an Account in CommuSpace</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" id="name" name="name"/>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="Phone Number" id="phone" name="phone"/>

            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourmail@gmail.com" id="email" name="email"/>
            <input value={pass} onChange= {(e) => setPass(e.target.value)} type="password" placeholder="Set Password" id="password" name="password"/>
            <input value={date} onChange= {(e) => setDate(e.target.value)} type="date" placeholder="Date of Birth" id="date" name="date"/>

            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login</button>
        </div>
    )
}