import "../css/Components/farmerCommunityForumComponent.css";
import FarmerNavigation from './farmerPageNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import ProfileVector1 from '../img/profileVector1.png';
import ProfileVector2 from '../img/profileVector2.png';
import {Link} from 'react-router-dom';
import { FaEdit, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import FarmerCommunityForumComponentAddPost from '../components/farmerCommunityForumComponentAddPost';
import TopNav from '../components/topPageNavigation';


const FarmerCommunityForumComponent = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="farmerCommunityForumComponent">
     <FarmerNavigation />
      <div className="farmerCommunityForumComponentMainPanel">
        <TopNav />
        <div className="farmerCommunityForumComponentTopSection">
          <div className="farmerCommunityForumComponentMainText1">
            <b className="farmerCommunityForumComponentMainText2">             
              <p className="farmerCommunityForumComponentBlankLine">&nbsp;</p>
              <p className="farmerCommunityForumComponentBlankLine">Community Forum</p>
            </b>
          </div>
        </div>


        <button className="farmerCommunityForumComponentButton" onClick={handleButtonClick}>
          <FaEdit className="farmerCommunityForumComponentButtonIcon" />
          <div className="farmerCommunityForumComponentButtonText">Write a Post</div>
        </button>


        {showPopup && (
           <div id="farmerCommunityForumComponentPopupWindow" className="farmerCommunityForumComponentPopupWindow">
           <div className="farmerCommunityForumComponentPopupContent">      
           <span className="farmerCommunityForumComponentCloseButton" onClick={closePopup}><FaTimes/></span>          
             <FarmerCommunityForumComponentAddPost/>                     
           </div>
         </div>
        )}


        <div className="farmerCommunityForumComponentMiddleSection">
          <div className="farmerCommunityForumComponentFrameParent">
            <div className="farmerCommunityForumComponentFrameWrapper">

              <Link className="farmerCommunityForumComponentRectangleParent"  to = '/farmercommunityforumpost'>
                <img
                  className="farmerCommunityForumComponentFrameChild"
                  alt=""
                  src={OnionVector}
                />
                <div className="farmerCommunityForumComponentFrameGroup">
                  <div className="farmerCommunityForumComponentFrameContainer">
                    <div className="farmerCommunityForumComponentSubText1Wrapper">
                      <b className="farmerCommunityForumComponentSubText1">What is the SRP of Onions?</b>
                    </div>
                    <div className="farmerCommunityForumComponentSubText2Wrapper2">
                      <div className="farmerCommunityForumComponentSubText2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua....
                      </div>
                    </div>
                  </div>
                  <div className="farmerCommunityForumComponentFrameItem" />
                  <div className="farmerCommunityForumComponentFrameAuthor">
                    <img className="farmerCommunityForumComponentFrameIcon" alt="" src={ProfileVector1} />
                    <div className="farmerCommunityForumComponentAuthorText">
                      <div className="farmerCommunityForumComponentAuthorName">Jenkins Mesina</div>
                      <div className="farmerCommunityForumComponentPostTime">Posted just now</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link className="farmerCommunityForumComponentRectangleParent" to = '/farmercommunityforumpost'>
                <img
                  className="farmerCommunityForumComponentFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="farmerCommunityForumComponentFrameGroup">
                  <div className="farmerCommunityForumComponentFrameContainer">
                    <div className="farmerCommunityForumComponentSubText1Wrapper">
                      <b className="farmerCommunityForumComponentSubText1">How corn grows?</b>
                    </div>
                    <div className="farmerCommunityForumComponentSubText2Wrapper2">
                      <div className="farmerCommunityForumComponentSubText2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua....
                      </div>
                    </div>
                  </div>
                  <div className="farmerCommunityForumComponentFrameItem" />
                  <div className="farmerCommunityForumComponentFrameAuthor">
                    <img className="farmerCommunityForumComponentFrameIcon" alt="" src={ProfileVector2} />
                    <div className="farmerCommunityForumComponentAuthorText">
                      <div className="farmerCommunityForumComponentAuthorName">Marievic Anes</div>
                      <div className="farmerCommunityForumComponentPostTime">Posted just now</div>
                    </div>
                  </div>
                </div>
              </Link>

              
            </div>
             <div className="farmerCommunityForumComponentFrameWrapper">
              <Link className="farmerCommunityForumComponentRectangleParent" to = '/farmercommunityforumpost'>
                <img
                  className="farmerCommunityForumComponentFrameChild"
                  alt=""
                  src={OnionVector}
                />
                <div className="farmerCommunityForumComponentFrameGroup">
                  <div className="farmerCommunityForumComponentFrameContainer">
                    <div className="farmerCommunityForumComponentSubText1Wrapper">
                      <b className="farmerCommunityForumComponentSubText1">What is the SRP of Onions?</b>
                    </div>
                    <div className="farmerCommunityForumComponentSubText2Wrapper2">
                      <div className="farmerCommunityForumComponentSubText2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua....
                      </div>
                    </div>
                  </div>
                  <div className="farmerCommunityForumComponentFrameItem" />
                  <div className="farmerCommunityForumComponentFrameAuthor">
                    <img className="farmerCommunityForumComponentFrameIcon" alt="" src={ProfileVector1} />
                    <div className="farmerCommunityForumComponentAuthorText">
                      <div className="farmerCommunityForumComponentAuthorName">Jenkins Mesina</div>
                      <div className="farmerCommunityForumComponentPostTime">Posted just now</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link className="farmerCommunityForumComponentRectangleParent" to = '/farmercommunityforumpost'>
                <img
                  className="farmerCommunityForumComponentFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="farmerCommunityForumComponentFrameGroup">
                  <div className="farmerCommunityForumComponentFrameContainer">
                    <div className="farmerCommunityForumComponentSubText1Wrapper">
                      <b className="farmerCommunityForumComponentSubText1">How corn grows?</b>
                    </div>
                    <div className="farmerCommunityForumComponentSubText2Wrapper2">
                      <div className="farmerCommunityForumComponentSubText2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua....
                      </div>
                    </div>
                  </div>
                  <div className="farmerCommunityForumComponentFrameItem" />
                  <div className="farmerCommunityForumComponentFrameAuthor">
                    <img className="farmerCommunityForumComponentFrameIcon" alt="" src={ProfileVector2} />
                    <div className="farmerCommunityForumComponentAuthorText">
                      <div className="farmerCommunityForumComponentAuthorName">Marievic Anes</div>
                      <div className="farmerCommunityForumComponentPostTime">Posted just now</div>
                    </div>
                  </div>
                </div>
              </Link>

              
            </div>
            <div className="farmerCommunityForumComponentForumNumber">
              <div className="farmerCommunityForumComponentForumContainer">
                <div className="farmerCommunityForumComponentForumNumberBox">1</div>
              </div>
              <div className="farmerCommunityForumComponentForumContainer">
                <div className="farmerCommunityForumComponentForumNumberBox">2</div>
              </div>
              <div className="farmerCommunityForumComponentForumContainer">
                <div className="farmerCommunityForumComponentForumNumberBox">3</div>
              </div>
              <div className="farmerCommunityForumComponentForumContainer">
                <div className="farmerCommunityForumComponentForumNumberBox">4</div>
              </div>
              <div className="farmerCommunityForumComponentForumContainer">
                <div className="farmerCommunityForumComponentForumNumberBox">5</div>
              </div>
              <div className="farmerCommunityForumComponentForumContainer">
                <div className="farmerCommunityForumComponentForumNumberBox">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerCommunityForumComponent;
