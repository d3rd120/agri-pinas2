<<<<<<< Updated upstream
import "../css/Components/signupComponent.css";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import {auth, registerWithEmailAndPassword} from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import Logo from '../img/agriPinasLogo2.png';

const Signup = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");
=======
import React, { useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import "../css/Components/signupComponent.css";
import { auth, registerWithEmailAndPassword } from "./firebase";

const Signup = () => {
  const [birthdate, setBirthdate] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [age, setAge] = React.useState("");
  const [role, setRole] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const [fullname, setFullName] = React.useState("");
>>>>>>> Stashed changes
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
<<<<<<< Updated upstream
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
=======
    if (!fullname) alert("Please enter name");
    registerWithEmailAndPassword(fullname, contact, address, birthdate, age, email, role, password);
>>>>>>> Stashed changes
    navigate("/login");
  };

  const calculateAge = (event) => {
    const selectedDate = new Date(event.target.value);
    const today = new Date();
<<<<<<< Updated upstream
    let age = today.getFullYear() - selectedDate.getFullYear();  
=======
    let age = today.getFullYear() - selectedDate.getFullYear();
>>>>>>> Stashed changes

    const hasBirthdayPassed =
      today.getMonth() > selectedDate.getMonth() ||
      (today.getMonth() === selectedDate.getMonth() &&
        today.getDate() >= selectedDate.getDate());
  
    if (!hasBirthdayPassed) {
      age--;
    }
  
    setAge(age);
<<<<<<< Updated upstream
    setDateOfBirth(event.target.value);
=======
    setBirthdate(event.target.value);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <img className="signUpComponentLogo" alt="" src={Logo} />
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
=======
            <div className="signupComponentMainText">Register</div>
          </div>
          <div className="signupComponentFormFields">
            <input className="signupComponentFormInput" id = "signupComponentFullName" type="text" value = {fullname}
            onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required/>
            <input className="signupComponentFormInput" id = "signupComponentContactNumber" type="text" placeholder="Contact Number" value = {contact}
            onChange={(e) => setContact(e.target.value)} required/>
            <input className="signupComponentFormInput" id = "signupComponentAddress" type="text" placeholder="Address" value = {address}
            onChange={(e) => setAddress(e.target.value)} required/>
            <input className="signupComponentFormInput" id = "signupComponentBirthday" type="date" placeholder="Birthday" onInput={calculateAge}  value = {birthdate}
            onChange={(e) => setBirthdate(e.target.value)} required/>
            <input className="signupComponentFormInput" id = "signupComponentAge" type="text" placeholder="Age" value={age}
            onChange={(e) => setAge(e.target.value)} readOnly />
            <input className="signupComponentFormInput" id = {email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
            <select className="signupComponentFormInput" id = "signupComponentRole" value = {role} onChange={(e) => setRole(e.target.value)} required>
              <option value="" disabled>Select a role</option>
              <option value="Farmer">Farmer</option>
              <option value="Buyer">Buyer</option>
            </select>
            <input className="signupComponentFormInput" id = {password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
            <input className="signupComponentFormInput" id = {confirmpassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required/>
>>>>>>> Stashed changes
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