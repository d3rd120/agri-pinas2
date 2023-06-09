import "../css/Components/aboutComponent.css";
import AboutImage1 from '../img/aboutImage1.png';
import AboutImage2 from '../img/aboutImage2.png';
import AboutImage3 from '../img/aboutImage3.png';

const AboutComponent = () => {
  return (
    <div className="aboutComponentSection">
      <div className="aboutComponentImages">
        <img
          className="aboutComponentImage1"
          alt=""
          src={AboutImage1}
        />
        <div className="aboutComponentImageColumn">
          <img
            className="aboutComponentImage2"
            alt=""
            src={AboutImage2}
          />
          <img
            className="aboutComponentImage3"
            alt=""
            src={AboutImage3}
          />
        </div>
      </div>
      <div className="aboutComponentAgriPinas">
        <b className="aboutComponentAgriPinasText">About AgriPinas</b>
        <div className="aboutComponentText">
          <p className="aboutComponentParagraph">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  `}</p>
          <p className="aboutComponentParagraph">&nbsp;</p>
          <p className="aboutComponentParagraph">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>       
      </div>
    </div>
  );
};

export default AboutComponent;
