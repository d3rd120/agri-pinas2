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
          <p className="aboutComponentParagraph">{`AgriPinas is an innovative mobile and web application designed to revolutionize the agricultural industry, specifically targeting farmers in Cabiao, Nueva Ecija, Philippines. The region, known as the "Rice Granary" of the Philippines, faces challenges such as low profits, 
          insufficient government support. `}</p>
          <p className="aboutComponentParagraph">&nbsp;</p>
          <p className="aboutComponentParagraph">
          hrough AgriPinas, farmers in Cabiao, Nueva Ecija, have the opportunity to leverage modern technology, gain market visibility, 
          and connect directly with consumers. 
          </p>
        </div>       
      </div>
    </div>
  );
};

export default AboutComponent;
