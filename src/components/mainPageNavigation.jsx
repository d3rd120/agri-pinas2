import { useCallback } from "react";
import Logo from '../img/agriPinasLogo.png';
import "../css/Components/mainPageNavigation.css";



const MainPageNavigation = () => {
  const onAgriPinasTextClick = useCallback(() => {
    // Please sync "Student Homepage" to the project
  }, []);

  return (
    <header className="mainNavigationHeader">
      <div className="mainNavigationContainer">
        <div className="mainNavigationLogo">
          <img
            className="mainNavigationLogoIcon"
            alt=""
            src={Logo}
          />
          <b className="mainNavigationMainText" onClick={onAgriPinasTextClick}>
            AgriPinas
          </b>
        </div>
        <div className="mainNavigationRightLinks">
          <div className="mainNavigationMenu">
            <a className="mainNavigationLink">Home</a>
            <a className="mainNavigationLink">About</a>
            <a className="mainNavigationLink">Posts</a>
            <a className="mainNavigationLink">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainPageNavigation;
