import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import '../css/Components/reset.css';

function Reset() {
  const [email, setEmail] = useState("");
  
 

  return (
    <div className="reset">
      <div className="reset__container">      
        <p className = "resetContainerText">Please enter your email to reset your password.</p>
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <button className="reset__btn" onClick={() => sendPasswordReset(email)}>
          Send code
        </button>

        <div>
          Don't have an account? <Link className = "resetComponentSignupText" to="/signup">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Reset;