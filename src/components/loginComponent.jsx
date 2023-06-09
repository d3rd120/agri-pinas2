import "../css/Components/loginComponent.css";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="loginpage">
      <div className="wrapper">
        <div className="form">
          <div className="form-text">
            <div className="login">Login</div>
          </div>
          <div className="form-fields">
            <input
              className="input"
              type="text"
              placeholder="Email Address"
            />
            <input className="input" type="password" placeholder="Password" />
          </div>
          <button className="button">
            <div className="login1">Login</div>
          </button>
          <div className="dont-have-an-container">
            <span>{`Don’t have an account? `}</span>
            <Link className="sign-up" to = '/signup'>SignUp</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
