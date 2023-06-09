import "../css/Components/newsComponent.css";
import FarmingCardImage from '../img/farmingCardImage.png';
import OnionCardImage from '../img/onionCardImage.png';
import ElNinoCardImage from '../img/elNinoCardImage.png';
import CarrotCardImage from '../img/carrotCardImage.png';
import RiceCardImage from '../img/riceCardImage.png';


const RecentStoriesFrame = () => {
  return (
    <div className="recent-stories-frame">
      <div className="catch-up-to-our-posts-parent">
        <b className="catch-up-to">catch up to our posts</b>
        <b className="recent-story-entries">Recent community forum entries</b>
      </div>
      <div className="cards-container">
        <div className="zermatt-card">
          <img
            className="zermatt-card-image"
            alt=""
            src={CarrotCardImage}
          />
          <div className="zermatt-card-details">
            <b className="zermatt-card-title">Recent Price Hike on Carrots</b>
            <div className="zermatt-card-description-container">
              <span>
                The recent price hike on carrots has sparked concerns and drawn
                public attention to the escalating cost of this commonly
                consumed vegetable...
              </span>
              <span className="view-full-blog">view full blog</span>
            </div>
          </div>
        </div>
        <div className="small-cards">
          <div className="tuscany-card">
            <img
              className="tuscany-card-image"
              alt=""
              src={OnionCardImage}
            />
            <div className="tuscany-card-details">
              <b className="zermatt-card-title">How to Plant Onions?</b>
              <div className="zermatt-card-description-container">
                <span>
                  Onions are a versatile and widely consumed vegetable that can
                  be grown in various climates and regions...
                </span>
                <span className="view-full-blog1">view full blog</span>
              </div>
            </div>
          </div>
          <div className="tuscany-card">
            <img className="kyoto-card-image" alt="" src={ElNinoCardImage} />
            <div className="tuscany-card-details">
              <b className="zermatt-card-title">El Niño</b>
              <div className="zermatt-card-description-container">
                <span>
                  El Niño, a climatic phenomenon that occurs irregularly, has
                  captured the attention of scientists, researchers...
                </span>
                <span className="view-full-blog1">view full blog</span>
              </div>
            </div>
          </div>
          <div className="tuscany-card">
            <img className="kyoto-card-image" alt="" src={FarmingCardImage}/>
            <div className="tuscany-card-details">
              <b className="zermatt-card-title">Farming Tips</b>
              <div className="farming-is-a-container">
                <span>
                  Farming is a vital profession that plays a crucial role in
                  providing food and resources for communities around the
                  world...
                </span>
                <span className="view-full-blog1">view full blog</span>
              </div>
            </div>
          </div>
          <div className="tuscany-card">
            <img className="kyoto-card-image" alt="" src={RiceCardImage}/>
            <div className="tuscany-card-details">
              <b className="zermatt-card-title">Rice Planting</b>
              <div className="farming-is-a-container">
                <span>
                  Farming is a vital profession that plays a crucial role in
                  providing food and resources for communities around the
                  world...
                </span>
                <span className="view-full-blog1">view full blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentStoriesFrame;


