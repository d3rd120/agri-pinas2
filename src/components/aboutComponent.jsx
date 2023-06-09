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
          <p className="as-one-of">{`As one of the alpine countries, landlocked Switzerland with her mountains has to compete not only with her neighbours but with other destinations. There are, e.g., no coastal resorts. `}</p>
          <p className="as-one-of">&nbsp;</p>
          <p className="as-one-of">
            The advantage is that tourism in Switzerland benefits of a large
            diversity of beautiful landscapes in a relatively small space.
          </p>
        </div>
        <button className="view-full-gallery-button">
          <div className="view-more">View more</div>
        </button>
      </div>
    </div>
  );
};

export default CalloutSection;
