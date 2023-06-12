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
    <div className="signupComponent">
      <div className="signupComponentWrapper">
        <div className="signupComponentForm">
          <div className="signupComponentFormText">
            <div className="signupComponentMainText">Register</div>
          </div>
          <div className="signupComponentFormFields">
            <input className="signupComponentFormInput" id = "signupComponentFullName" type="text" value = {name} 
            onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
            <input className="signupComponentFormInput" id = "signupComponentContactNumber" type="text" placeholder="Contact Number" />
            <input className="signupComponentFormInput" id = "signupComponentAddress" type="text" placeholder="Address" />
            <input className="signupComponentFormInput" id = "signupComponentBirthday" type="date" placeholder="Birthday" onInput={calculateAge}  />
            <input className="signupComponentFormInput" id = "signupComponentAge" type="text" placeholder="Age" value={age} readOnly />
            <input className="signupComponentFormInput" id = {email} type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <select className="signupComponentFormInput" id = "signupComponentRole"> 
              <option value="">Select a role</option>             
              <option value="farmer">Farmer</option>
              <option value="buyer">Buyer</option>
            </select>
            <input className="signupComponentFormInput" id = {password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <input className="signupComponentFormInput" id = {confirmpassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
          </div>
          <button className="signupComponentButton">
            <div className="signupComponentButtonText"onClick={register}>Register</div>
          </button>
          <div className="signupComponentSubTextContainer">
            <span>{`Already have an account? `}</span>
            <Link className="signupComponentLoginLink" to = '/login'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;