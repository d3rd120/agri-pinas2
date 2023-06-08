import { useCallback } from "react";
import Logo from '../img/agriPinasLogo.png';
import "../css/Components/mainPageNavigation.css";



const MainPageNavigation = () => {
  const onAgriPinasTextClick = useCallback(() => {
    // Please sync "Student Homepage" to the project
  }, []);

  return (
    <header className="top-header">
      <div className="top-container">
        <div className="logo">
          <img
            className="agripinaslogo-icon"
            alt=""
            src={Logo}
          />
          <b className="agripinas" onClick={onAgriPinasTextClick}>
            AgriPinas
          </b>
        </div>
        <div className="navigation-right">
          <div className="navigation-menu">
            <a className="home">Home</a>
            <a className="home">About</a>
            <a className="home">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainPageNavigation;
