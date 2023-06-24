import "../css/Components/farmerCommunityForumComponent.css";
import FarmerNavigation from './farmerPageNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import SquashVector from '../img/squash.png';
import SiliVector from '../img/sili.png';
import TomatoVector from '../img/tomatoVector.png';
import ProfileVector1 from '../img/profileVector1.png';
import ProfileVector2 from '../img/profileVector2.png';
import {Link} from 'react-router-dom';
import { FaEdit, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import FarmerCommunityForumComponentAddPost from '../components/farmerCommunityForumComponentAddPost';
import FarmerTopNav from '../components/farmerTopNav';


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
        <FarmerTopNav />
        <div className="farmerCommunityForumComponentTopSection">
          <div className="farmerCommunityForumComponentMainText1">
            <b className="farmerCommunityForumComponentMainText2">    
              <p className="farmerCommunityForumComponentBlankLine">Community Forum</p>
            </b>
          </div>
        </div>


        <button className="farmerCommunityForumComponentButton1" onClick={handleButtonClick}>
          <FaEdit className="farmerCommunityForumComponentButtonIcon1" />
          <div className="farmerCommunityForumComponentButtonText1">Write a Post</div>
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
                      The Shortage Risk Premium (SRP) of onions refers to an additional cost or price increase 
                      imposed on onions due to the potential scarcity or limited availability of....
                      </div>
                    </div>
                  </div>
                  <div className="farmerCommunityForumComponentFrameItem" />
                  <div className="farmerCommunityForumComponentFrameAuthor">
                    <img className="farmerCommunityForumComponentFrameIcon" alt="" src={ProfileVector1} />
                    <div className="farmerCommunityForumComponentAuthorText">
                      <div className="farmerCommunityForumComponentAuthorName">Ryan Amador</div>
                      <div className="farmerCommunityForumComponentPostTime">Just now</div>
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
                      Corn is grown for various purposes, including human consumption, animal feed, 
                      and industrial uses such as biofuel production...
                      </div>
                    </div>
                  </div>
                  <div className="farmerCommunityForumComponentFrameItem" />
                  <div className="farmerCommunityForumComponentFrameAuthor">
                    <img className="farmerCommunityForumComponentFrameIcon" alt="" src={ProfileVector2} />
                    <div className="farmerCommunityForumComponentAuthorText">
                      <div className="farmerCommunityForumComponentAuthorName">Marievic Anes</div>
                      <div className="farmerCommunityForumComponentPostTime">2hrs ago</div>
                    </div>
                  </div>
                </div>
              </Link>              
            </div>


            <div className="farmerCommunityForumComponentFrameWrapper">

            <Link className="farmerCommunityForumComponentRectangleParent"  to = '/farmercommunityforumpost'>
              <img
                className="farmerCommunityForumComponentFrameChild"
                alt=""
                src={RiceVector}
              />
              <div className="farmerCommunityForumComponentFrameGroup">
                <div className="farmerCommunityForumComponentFrameContainer">

                  <div className="farmerCommunityForumComponentSubText1Wrapper">
                    <b className="farmerCommunityForumComponentSubText1">How to plant rice efficiently?</b>
                  </div>
                  <div className="farmerCommunityForumComponentSubText2Wrapper2">
                    <div className="farmerCommunityForumComponentSubText2">
                    Seed selection and preparation: Farmers select high-quality rice seeds based on 
                    factors such as yield potential, disease resistance, and adaptability...
                    </div>
                  </div>
                </div>
                <div className="farmerCommunityForumComponentFrameItem" />
                <div className="farmerCommunityForumComponentFrameAuthor">
                  <img className="farmerCommunityForumComponentFrameIcon" alt="" src={ProfileVector1} />
                  <div className="farmerCommunityForumComponentAuthorText">
                    <div className="farmerCommunityForumComponentAuthorName">Jenkins Mesina</div>
                    <div className="farmerCommunityForumComponentPostTime">5hrs ago</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link className="farmerCommunityForumComponentRectangleParent" to = '/farmercommunityforumpost'>
              <img
                className="farmerCommunityForumComponentFrameChild"
                alt=""
                src={SquashVector}
              />
              <div className="farmerCommunityForumComponentFrameGroup">
                <div className="farmerCommunityForumComponentFrameContainer">
                  <div className="farmerCommunityForumComponentSubText1Wrapper">
                    <b className="farmerCommunityForumComponentSubText1">Can Squash survive summer?</b>
                  </div>
                  <div className="farmerCommunityForumComponentSubText2Wrapper2">
                    <div className="farmerCommunityForumComponentSubText2">
                    Squash plants have relatively high water needs, especially during the summer when evaporation rates are high. 
                    Adequate irrigation is crucial to ensure the...
                    </div>
                  </div>
                </div>
                <div className="farmerCommunityForumComponentFrameItem" />
                <div className="farmerCommunityForumComponentFrameAuthor">
                  <img className="farmerCommunityForumComponentFrameIcon" alt="" src={ProfileVector2} />
                  <div className="farmerCommunityForumComponentAuthorText">
                    <div className="farmerCommunityForumComponentAuthorName">Arriane Gatpo</div>
                    <div className="farmerCommunityForumComponentPostTime">9hrs ago</div>
                  </div>
                </div>
              </div>
            </Link>              
            </div>

            <div className="farmerCommunityForumComponentFrameWrapper">

          <Link className="farmerCommunityForumComponentRectangleParent"  to = '/farmercommunityforumpost'>
            <img
              className="farmerCommunityForumComponentFrameChild"
              alt=""
              src={SiliVector}
            />
            <div className="farmerCommunityForumComponentFrameGroup">
              <div className="farmerCommunityForumComponentFrameContainer">

                <div className="farmerCommunityForumComponentSubText1Wrapper">
                  <b className="farmerCommunityForumComponentSubText1">What are alternatives for sili?</b>
                </div>
                <div className="farmerCommunityForumComponentSubText2Wrapper2">
                  <div className="farmerCommunityForumComponentSubText2">
                  Bell peppers are mild and have a crunchy texture, making them a suitable alternative 
                  if you prefer a milder flavor. They come in various colors, such as...
                  </div>
                </div>
              </div>
              <div className="farmerCommunityForumComponentFrameItem" />
              <div className="farmerCommunityForumComponentFrameAuthor">
                <img className="farmerCommunityForumComponentFrameIcon" alt="" src={ProfileVector2} />
                <div className="farmerCommunityForumComponentAuthorText">
                  <div className="farmerCommunityForumComponentAuthorName">Daniella Tungol</div>
                  <div className="farmerCommunityForumComponentPostTime">1 day ago</div>
                </div>
              </div>
            </div>
          </Link>

            <Link className="farmerCommunityForumComponentRectangleParent" to = '/farmercommunityforumpost'>
              <img
                className="farmerCommunityForumComponentFrameChild"
                alt=""
                src={TomatoVector}
              />
              <div className="farmerCommunityForumComponentFrameGroup">
                <div className="farmerCommunityForumComponentFrameContainer">
                  <div className="farmerCommunityForumComponentSubText1Wrapper">
                    <b className="farmerCommunityForumComponentSubText1">Is tomato good source?</b>
                  </div>
                  <div className="farmerCommunityForumComponentSubText2Wrapper2">
                    <div className="farmerCommunityForumComponentSubText2">
                    Vitamins and minerals: Tomatoes are rich in essential vitamins and minerals. 
                    They are an excellent source of vitamin C, which supports immune function and...
                    </div>
                  </div>
                </div>
                <div className="farmerCommunityForumComponentFrameItem" />
                <div className="farmerCommunityForumComponentFrameAuthor">
                  <img className="farmerCommunityForumComponentFrameIcon" alt="" src={ProfileVector2} />
                  <div className="farmerCommunityForumComponentAuthorText">
                    <div className="farmerCommunityForumComponentAuthorName">Marievic Anes</div>
                    <div className="farmerCommunityForumComponentPostTime">2 days ago</div>
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
