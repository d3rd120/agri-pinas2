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
    <div className="signupComponent">
      <div className="signupComponentWrapper">
        <div className="signupComponentForm">
          <div className="signupComponentFormText">
            <div className="signupComponentMainText">Register</div>
          </div>
          <div className="signupComponentFormFields">
            <input className="signupComponentFormInput" id = "signupComponentFullName" type="text" placeholder="Full Name" />
            <input className="signupComponentFormInput" id = "signupComponentContactNumber" type="text" placeholder="Contact Number" />
            <input className="signupComponentFormInput" id = "signupComponentAddress" type="text" placeholder="Address" />
            <input className="signupComponentFormInput" id = "signupComponentBirthday" type="date" placeholder="Birthday" onInput={calculateAge}  />
            <input className="signupComponentFormInput" id = "signupComponentAge" type="text" placeholder="Age" value={age} readOnly />
            <input className="signupComponentFormInput" id = "signupComponentEmail" type="text" placeholder="Email" />
            <select className="signupComponentFormInput" id = "signupComponentRole"> 
              <option value="">Select a role</option>             
              <option value="farmer">Farmer</option>
              <option value="buyer">Buyer</option>
            </select>
            <input className="signupComponentFormInput" id = "signupComponentPassword" type="password" placeholder="Password" />
            <input className="signupComponentFormInput" id = "signupComponentConfirmPassword" type="password" placeholder="Confirm Password" />
          </div>
          <button className="signupComponentButton">
            <div className="signupComponentButtonText">Register</div>
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
