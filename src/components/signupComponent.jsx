import "../css/Components/signupComponent.css";
import { Link } from 'react-router-dom';
import { useState } from "react";


const Signup = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");

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
  

  return (
    <div className="registerpage">
      <div className="wrapper">
        <div className="form">
          <div className="form-text">
            <div className="register">Register</div>
          </div>
          <div className="form-fields">
            <input className="input" type="text" placeholder="Full Name" />
            <input className="input" type="text" placeholder="Contact Number" />
            <input className="input" type="text" placeholder="Address" />
            <input
              className="input"
              type="date"
              placeholder="Birthday"
              onInput={calculateAge}
            />
            <input className="input" type="text" placeholder="Age" value={age} readOnly />
            <input className="input" type="text" placeholder="Email" />
            <select className="input"> 
              <option value="">Select a role</option>             
              <option value="farmer">Farmer</option>
              <option value="buyer">Buyer</option>
            </select>
            <input className="input" type="password" placeholder="Password" />
            <input className="input" type="password" placeholder="Confirm Password" />
          </div>
          <button className="button">
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
