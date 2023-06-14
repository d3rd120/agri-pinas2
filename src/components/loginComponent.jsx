import "../css/Components/loginComponent.css";
import { Link } from 'react-router-dom';
import { auth, logInWithEmailAndPassword as loginWithEmail } from "./firebase";
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import React from 'react';
import Logo from '../img/agriPinasLogo2.png'


const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  return (
    <div className="loginComponent">
      <div className="loginComponentWrapper">
        <div className="loginComponentForm">
          
          <div className="loginComponentFormText">
            <img className="loginComponentLogo" alt="" src={Logo} />
            <div className="loginComponentMainText">Login</div>
          </div>
          <div className="loginComponentFormFields">
            <input
              className="loginComponentInput" id = "loginComponentEmail"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            <input 
            className="loginComponentInput" id = "loginComponentPassword"
            type="password"value={password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" />
          </div>
          <a className="logInPageSubText2" href= "reset">Forgot Password?</a>
          <button className="loginComponentButton">
            <div className="loginComponentButtonText">Login</div>
          </button>
          <div className="loginComponentSubTextContainter">
            <span>{`Don’t have an account? `}</span>
            
            <Link className="loginComponentSignUpLink" to = '/signup'>Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
