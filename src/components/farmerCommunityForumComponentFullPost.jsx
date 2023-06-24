import '../css/Components/farmerCommunityForumComponentFullPost.css';
import FarmerNavigation from './farmerPageNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import SquashVector from '../img/squash.png';
import { FaThumbsUp } from 'react-icons/fa';
import FarmerTopNav from '../components/farmerTopNav';

const FarmerMarketplace = () => {
  return (
    <div className="farmerCommunityForumComponentFullPost">
        <FarmerNavigation />      
      <div className="farmerCommunityForumComponentFullPostMainPanel">
        <FarmerTopNav />
        <div className="farmerCommunityForumComponentFullPostTopSection">
          <div className="farmerCommunityForumComponentFullPostMainTextContainer">
            <b className="farmerCommunityForumComponentFullPostMainText1">              
              <p className="farmerCommunityForumComponentFullPostBlankLine">Community Forum</p>
            </b>
          </div>
        </div>
        <div className="farmerCommunityForumComponentFullPostMiddleSection">
          <div className="farmerCommunityForumComponentFullPostCardsContainer">
            <div className="farmerCommunityForumComponentFullPostCard1">
              <img
                className="farmerCommunityForumComponentFullPostCard1Image"
                alt=""
                src={OnionVector}
              />
            </div>
            <div className="farmerCommunityForumComponentFullPostSmallCards">
              <div className="farmerCommunityForumComponentFullPostSmallCardsDescription">
                <div className="farmerCommunityForumComponentFullPostSmallCardsContent">
                  <div className="farmerCommunityForumComponentFullPostSmallCardsHeading">
                    <div className="farmerCommunityForumComponentFullPostSmallCardsDetails">
                      <b className="farmerCommunityForumComponentFullPostSmallCardsMainText">What is the SRP of Onions?</b>
                      <b className="farmerCommunityForumComponentFullPostSmallCardsDescription1">Posted by: Jenkins Mesina</b>
                    </div>
                    <div className="farmerCommunityForumComponentFullPostSmallCardsDescriptionWrapper">
                      <div className="farmerCommunityForumComponentFullPostSmallCardsFullDescription">
                      The Shortage Risk Premium (SRP) of onions refers to an additional cost or price increase imposed on onions due to the potential 
                      scarcity or limited availability of the commodity. The SRP reflects the market's anticipation of reduced onion supply, 
                      often caused by factors such as adverse weather conditions, natural disasters, pests, or disruptions in the onion production 
                      or distribution chain.
                      </div>
                    </div>
                    <b className="farmerCommunityForumComponentFullPostSmallCardsDescription2">24 people liked this post.</b>
                    <button className="farmerCommunityForumComponentFullPostButton">
                        <FaThumbsUp className="farmerCommunityForumComponentFullPostButtonIcon" />
                        <div className="farmerCommunityForumComponentFullPostButtonText">Like</div>
                    </button>
                  </div>
                  <input
                    className="farmerCommunityForumComponentFullPostCommentInput"
                    type="text"
                    placeholder="Comment Here"
                  />
                  <div className="farmerCommunityForumComponentFullPostSmallCardsDescriptionWrapper">
                    <div className="farmerCommunityForumComponentFullPostSmallCardsFullDescription">
                      <p className="farmerCommunityForumComponentFullPostBlankLine">
                        <b>Comments:</b>
                      </p>
                      <p className="farmerCommunityForumComponentFullPostBlankLine">
                        <b>&nbsp;</b>
                      </p>
                      <p className="farmerCommunityForumComponentFullPostBlankLine">
                        <b>{`Ryan Edward Amador: `}</b>
                        <span>{`I've been thinking about this for a very long time, thanks for making this as a topic. `}</span>
                      </p>
                      <p className="farmerCommunityForumComponentFullPostBlankLine">
                        <b>&nbsp;</b>
                      </p>
                      <p className="farmerCommunityForumComponentFullPostBlankLine">
                        <b>{`Marievic Anes: `}</b>
                        <span>
                         Ohhhh, That's nice to read that srp of onions is going down
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="farmerCommunityForumComponentFullPostNewCard">
          <div className="farmerCommunityForumComponentFullPostNewCardMainText">Other Posts</div>
          <div className="farmerCommunityForumComponentFullPostNewCardText">
            <button className="farmerCommunityForumComponentFullPostNewCardButton">
              <img
                className="farmerCommunityForumComponentFullPostNewCardImage"
                alt=""
                src={CornVector}
              />
              <div className="farmerCommunityForumComponentFullPostNewCardDetails">
                <div className="farmerCommunityForumComponentFullPostNewCardInner">
                  <div className="farmerCommunityForumComponentFullPostNewCardTitleWrapper">
                    <div className="farmerCommunityForumComponentFullPostNewCardTitle">How Corn Grows?</div>
                  </div>
                </div>
              </div>
            </button>

             <button className="farmerCommunityForumComponentFullPostNewCardButton">
              <img
                className="farmerCommunityForumComponentFullPostNewCardImage"
                alt=""
                src={RiceVector}
              />
              <div className="farmerCommunityForumComponentFullPostNewCardDetails">
                <div className="farmerCommunityForumComponentFullPostNewCardInner">
                  <div className="farmerCommunityForumComponentFullPostNewCardTitleWrapper">
                    <div className="farmerCommunityForumComponentFullPostNewCardTitle">How to plant rice efficiently?</div>
                  </div>
                </div>
              </div>
            </button>             

            <button className="farmerCommunityForumComponentFullPostNewCardButton">
              <img
                className="farmerCommunityForumComponentFullPostNewCardImage"
                alt=""
                src={SquashVector}
              />
              <div className="farmerCommunityForumComponentFullPostNewCardDetails">
                <div className="farmerCommunityForumComponentFullPostNewCardInner">
                  <div className="farmerCommunityForumComponentFullPostNewCardTitleWrapper">
                    <div className="farmerCommunityForumComponentFullPostNewCardTitle">Can squash survive summer?</div>
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
