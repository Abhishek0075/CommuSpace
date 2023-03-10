import React, {useState} from "react";
import logo from './logo.svg';

import reactLogo from "./1.png";

import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
    {
      currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />
    }
    <div className="right_data mt-5" style={{width: "100%"}}>
    <div className="reactLogo mt-5">
      <img src={reactLogo} alt="react logo" width="450" height="450"/>
    </div>
    </div>
            
    </div>
  );
}

export default App;
