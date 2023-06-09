import "../css/Components/aboutComponent.css";
import AboutImage1 from '../img/aboutImage1.png';
import AboutImage2 from '../img/aboutImage2.png';
import AboutImage3 from '../img/aboutImage3.png';

const CalloutSection = () => {
  return (
    <div className="callout-section">
      <div className="callout-images">
        <img
          className="callout-swiss-winter-image"
          alt=""
          src={AboutImage1}
        />
        <div className="callout-images-column">
          <img
            className="callout-switzerland-mountains"
            alt=""
            src={AboutImage2}
          />
          <img
            className="callout-switzerland-sunset-ima"
            alt=""
            src={AboutImage3}
          />
        </div>
      </div>
      <div className="callout-copywriting">
        <b className="about-agripinas">About AgriPinas</b>
        <div className="callout-text">
          <p className="as-one-of">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  `}</p>
          <p className="as-one-of">&nbsp;</p>
          <p className="as-one-of">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>       
      </div>
    </div>
  );
};

export default CalloutSection;
