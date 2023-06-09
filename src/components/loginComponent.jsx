import "../css/Components/loginComponent.css";
const Loginpage = () => {
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
              placeholder="Username or email address"
            />
            <input className="input" type="text" placeholder="Password" />
          </div>
          <button className="button">
            <div className="login1">Login</div>
          </button>
          <div className="new-user-sign">New user? Sign up!</div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
