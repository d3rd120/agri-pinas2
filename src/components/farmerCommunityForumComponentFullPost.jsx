import '../css/Components/farmerCommunityForumComponentFullPost.css';
import FarmerNavigation from './farmerPageNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import TomatoVector from '../img/tomatoVector.png';
import { FaThumbsUp } from 'react-icons/fa';

const FarmerMarketplace = () => {
  return (
    <div className="farmermarketplace">
        <FarmerNavigation />      
      <div className="main-panel">
        <div className="top-section">
          <div className="welcome-to-dashboard">
            <b className="community-forum">
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">Community Forum</p>
            </b>
          </div>
        </div>
        <div className="middle-section">
          <div className="cards-container">
            <div className="zermatt-card">
              <img
                className="zermatt-card-image"
                alt=""
                src={OnionVector}
              />
            </div>
            <div className="small-cards">
              <div className="description">
                <div className="content">
                  <div className="heading-and-subheading">
                    <div className="details">
                      <b className="course-name">What is the SRP of Onions?</b>
                      <b className="description1">Posted by: Jenkins Mesina</b>
                    </div>
                    <div className="fulldescription-wrapper">
                      <div className="fulldescription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                    </div>
                    <b className="description2">24 people liked this post.</b>
                    <button className="search-flights-button">
                        <FaThumbsUp className="iconplus" />
                        <div className="button">Like</div>
                    </button>
                  </div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Comment Here"
                  />
                  <div className="fulldescription-wrapper">
                    <div className="fulldescription">
                      <p className="blank-line">
                        <b>Comments:</b>
                      </p>
                      <p className="blank-line">
                        <b>&nbsp;</b>
                      </p>
                      <p className="blank-line">
                        <b>{`Ryan Edward Amador: `}</b>
                        <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</span>
                      </p>
                      <p className="blank-line">
                        <b>&nbsp;</b>
                      </p>
                      <p className="blank-line">
                        <b>{`Marievic Anes: `}</b>
                        <span>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="new">
          <div className="other-posts">Other Posts</div>
          <div className="courses">
            <button className="rec-card-1">
              <img
                className="unsplash5mv818tzxeo-icon"
                alt=""
                src={CornVector}
              />
              <div className="holiday-details">
                <div className="holiday-details-inner">
                  <div className="how-corn-grows-wrapper">
                    <div className="how-corn-grows">How Corn Grows?</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="rec-card-1">
              <img
                className="unsplash5mv818tzxeo-icon"
                alt=""
                src={RiceVector}
              />
              <div className="holiday-details">
                <div className="holiday-details-child">
                  <div className="how-corn-grows-wrapper">
                    <div className="how-corn-grows">Planting Rice</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="rec-card-1">
              <img
                className="unsplash5mv818tzxeo-icon"
                alt=""
                src={TomatoVector}
              />
              <div className="holiday-details">
                <div className="holiday-details-child">
                  <div className="how-corn-grows-wrapper">
                    <div className="how-corn-grows">How to Plant Tomato?</div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerMarketplace;
