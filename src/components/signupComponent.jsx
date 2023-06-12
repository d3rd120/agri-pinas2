import "../css/Components/signupComponent.css";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import {auth, registerWithEmailAndPassword} from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

const Signup = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
    navigate("/login");
  };

  const calculateAge = (event) => {
    const selectedDate = new Date(event.target.value);
    const today = new Date();
    let age = today.getFullYear() - selectedDate.getFullYear();  

    const hasBirthdayPassed =
      today.getMonth() > selectedDate.getMonth() ||
      (today.getMonth() === selectedDate.getMonth() &&
        today.getDate() >= selectedDate.getDate());
  
    if (!hasBirthdayPassed) {
      age--;
    }
  
    setAge(age);
    setDateOfBirth(event.target.value);
  };
   useEffect(() => {
    if (loading) return;
    if (user) navigate("/signup");
  }, [user, loading]);

  return (
    <div className="registerpage">
      <div className="wrapper">
        <div className="form">
          <div className="form-text">
            <div className="register">Register</div>
          </div>
          <div className="form-fields">
            <input className="input" type="text" value = {name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name" />
            <input className="input" type="text" placeholder="Contact Number" />
            <input className="input" type="text" placeholder="Address" />
            <input
              className="input"
              type="date"
              placeholder="Birthday"
              onInput={calculateAge}
            />
            <input className="input" type="text" placeholder="Age" value={age} readOnly />
            <input className="input" type="text"id={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" />
            <select className="input"> 
              <option value="">Select a role</option>             
              <option value="farmer">Farmer</option>
              <option value="buyer">Buyer</option>
            </select>
            <input className="input" type="password" 
            id={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
            <input className="input" type="password" 
            id={confirmpassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password" />
          </div>
          <button className="button" onClick={register}>
            <div className="register1">Register</div>
          </button>
          <div className="already-have-an-container">
            <span>{`Already have an account? `}</span>
            <Link className="login" to = '/login'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
