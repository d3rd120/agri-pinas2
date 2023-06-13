import BuyerNavigation from '../components/buyerNavigation';
import "../css/BuyerPage/buyerCommunityForumComponent.css"
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import ProfileVector1 from '../img/profileVector1.png';
import ProfileVector2 from '../img/profileVector2.png';
import {Link} from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

const BuyerCommunityForumComponent = () => {
  return (
    <div className="buyerCommunityForumComponent">
     <BuyerNavigation />
      <div className="buyerCommunityForumComponentMainPanel">
        <div className="buyerCommunityForumComponentTopSection">
          <div className="buyerCommunityForumComponentMainText1">
            <b className="buyerCommunityForumComponentMainText2">
              <p className="buyerCommunityForumComponentBlankLine">&nbsp;</p>
              <p className="buyerCommunityForumComponentBlankLine">&nbsp;</p>
              <p className="buyerCommunityForumComponentBlankLine">Community Forum</p>
            </b>
          </div>
        </div>
        <button className="buyerCommunityForumComponentButton">
        <FaEdit className="buyerCommunityForumComponentButtonIcon" />
          <div className="buyerCommunityForumComponentButtonText">Write a Post</div>
        </button>
        <div className="buyerCommunityForumComponentMiddleSection">
          <div className="buyerCommunityForumComponentFrameParent">
            <div className="buyerCommunityForumComponentFrameWrapper">

              <Link className="buyerCommunityForumComponentRectangleParent"  to = '/buyercommunityforumpost'>
                <img
                  className="buyerCommunityForumComponentFrameChild"
                  alt=""
                  src={OnionVector}
                />
                <div className="buyerCommunityForumComponentFrameGroup">
                  <div className="buyerCommunityForumComponentFrameContainer">
                    <div className="buyerCommunityForumComponentSubText1Wrapper">
                      <b className="buyerCommunityForumComponentSubText1">What is the SRP of Onions?</b>
                    </div>
                    <div className="buyerCommunityForumComponentSubText2Wrapper2">
                      <div className="buyerCommunityForumComponentSubText2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua....
                      </div>
                    </div>
                  </div>
                  <div className="buyerCommunityForumComponentFrameItem" />
                  <div className="buyerCommunityForumComponentFrameAuthor">
                    <img className="buyerCommunityForumComponentFrameIcon" alt="" src={ProfileVector1} />
                    <div className="buyerCommunityForumComponentAuthorText">
                      <div className="buyerCommunityForumComponentAuthorName">Jenkins Mesina</div>
                      <div className="buyerCommunityForumComponentPostTime">Posted just now</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link className="buyerCommunityForumComponentRectangleParent" to = '/buyercommunityforumpost'>
                <img
                  className="buyerCommunityForumComponentFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="buyerCommunityForumComponentFrameGroup">
                  <div className="buyerCommunityForumComponentFrameContainer">
                    <div className="buyerCommunityForumComponentSubText1Wrapper">
                      <b className="buyerCommunityForumComponentSubText1">How corn grows?</b>
                    </div>
                    <div className="buyerCommunityForumComponentSubText2Wrapper2">
                      <div className="buyerCommunityForumComponentSubText2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua....
                      </div>
                    </div>
                  </div>
                  <div className="buyerCommunityForumComponentFrameItem" />
                  <div className="buyerCommunityForumComponentFrameAuthor">
                    <img className="buyerCommunityForumComponentFrameIcon" alt="" src={ProfileVector2} />
                    <div className="buyerCommunityForumComponentAuthorText">
                      <div className="buyerCommunityForumComponentAuthorName">Marievic Anes</div>
                      <div className="buyerCommunityForumComponentPostTime">Posted just now</div>
                    </div>
                  </div>
                </div>
              </Link>

              
            </div>
             <div className="buyerCommunityForumComponentFrameWrapper">
              <Link className="buyerCommunityForumComponentRectangleParent" to = '/buyercommunityforumpost'>
                <img
                  className="buyerCommunityForumComponentFrameChild"
                  alt=""
                  src={OnionVector}
                />
                <div className="buyerCommunityForumComponentFrameGroup">
                  <div className="buyerCommunityForumComponentFrameContainer">
                    <div className="buyerCommunityForumComponentSubText1Wrapper">
                      <b className="buyerCommunityForumComponentSubText1">What is the SRP of Onions?</b>
                    </div>
                    <div className="buyerCommunityForumComponentSubText2Wrapper2">
                      <div className="buyerCommunityForumComponentSubText2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua....
                      </div>
                    </div>
                  </div>
                  <div className="buyerCommunityForumComponentFrameItem" />
                  <div className="buyerCommunityForumComponentFrameAuthor">
                    <img className="buyerCommunityForumComponentFrameIcon" alt="" src={ProfileVector1} />
                    <div className="buyerCommunityForumComponentAuthorText">
                      <div className="buyerCommunityForumComponentAuthorName">Jenkins Mesina</div>
                      <div className="buyerCommunityForumComponentPostTime">Posted just now</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link className="buyerCommunityForumComponentRectangleParent" to = '/buyercommunityforumpost'>
                <img
                  className="buyerCommunityForumComponentFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="buyerCommunityForumComponentFrameGroup">
                  <div className="buyerCommunityForumComponentFrameContainer">
                    <div className="buyerCommunityForumComponentSubText1Wrapper">
                      <b className="buyerCommunityForumComponentSubText1">How corn grows?</b>
                    </div>
                    <div className="buyerCommunityForumComponentSubText2Wrapper2">
                      <div className="buyerCommunityForumComponentSubText2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua....
                      </div>
                    </div>
                  </div>
                  <div className="buyerCommunityForumComponentFrameItem" />
                  <div className="buyerCommunityForumComponentFrameAuthor">
                    <img className="buyerCommunityForumComponentFrameIcon" alt="" src={ProfileVector2} />
                    <div className="buyerCommunityForumComponentAuthorText">
                      <div className="buyerCommunityForumComponentAuthorName">Marievic Anes</div>
                      <div className="buyerCommunityForumComponentPostTime">Posted just now</div>
                    </div>
                  </div>
                </div>
              </Link>

              
            </div>
            <div className="buyerCommunityForumComponentForumNumber">
              <div className="buyerCommunityForumComponentForumContainer">
                <div className="buyerCommunityForumComponentForumNumberBox">1</div>
              </div>
              <div className="buyerCommunityForumComponentForumContainer">
                <div className="buyerCommunityForumComponentForumNumberBox">2</div>
              </div>
              <div className="buyerCommunityForumComponentForumContainer">
                <div className="buyerCommunityForumComponentForumNumberBox">3</div>
              </div>
              <div className="buyerCommunityForumComponentForumContainer">
                <div className="buyerCommunityForumComponentForumNumberBox">4</div>
              </div>
              <div className="buyerCommunityForumComponentForumContainer">
                <div className="buyerCommunityForumComponentForumNumberBox">5</div>
              </div>
              <div className="buyerCommunityForumComponentForumContainer">
                <div className="buyerCommunityForumComponentForumNumberBox">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerCommunityForumComponent;
