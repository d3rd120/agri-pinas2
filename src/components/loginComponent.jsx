import "../css/Components/loginComponent.css";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="loginComponent">
      <div className="loginComponentWrapper">
        <div className="loginComponentForm">
          <div className="loginComponentFormText">
            <div className="loginComponentMainText">Login</div>
          </div>
          <div className="loginComponentFormFields">
            <input
              className="loginComponentInput" id = "loginComponentEmail"
              type="text"
              placeholder="Email Address"
            />
            <input 
            className="loginComponentInput" id = "loginComponentPassword"
            type="password" 
            placeholder="Password" />
          </div>
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
