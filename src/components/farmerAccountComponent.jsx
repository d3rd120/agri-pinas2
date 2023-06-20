import FarmerNavigation from '../components/farmerPageNavigation';
import '../css/Components/farmerAccountComponent.css';
import ProfileVector from '../img/profileVector3.png';
import TopNav from '../components/topPageNavigation';
import {FaEdit} from 'react-icons/fa';

const FarmerAccountComponent = () => {
  return (
    <div className="FarmerAccountComponent">
      <FarmerNavigation />
      <div className="FarmerAccountComponentMainPanel">
        <TopNav />
        <div className="FarmerAccountComponentTopSection">
          <div className="FarmerAccountComponentMainText">
            <b className="FarmerAccountComponentSubText">      
              <p className="FarmerAccountComponentBlankLine">&nbsp;</p>
              <p className="FarmerAccountComponentBlankLine">Account profile</p>
            </b>
          </div>
        </div>
        <div className="FarmerAccountComponentMiddleSection">
          <div className="FarmerAccountComponentCardsContainer">
            <div className="FarmerAccountComponentCardsContainerInner">
              <a className="FarmerAccountComponentRectangleParent">
                <img
                  className="FarmerAccountComponentFrameItem"
                  alt=""
                  src={ProfileVector}
                />
                <div className="FarmerAccountComponentFrameWrapper">
                  <div className="FarmerAccountComponentFrameGroup">
                    <div className="FarmerAccountComponentNameTextWrapper">
                      <b className="FarmerAccountComponentNameText">Marievic Anes</b>
                    </div>
                    <div className="FarmerAccountComponentDetailsChild" />
                    <div className="FarmerAccountComponentRoleWrapper">
                      <div className="FarmerAccountComponentRole">
                        <b>{`Role: `}</b>
                        <span>Farmer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="FarmerAccountComponentSmallCards">
              <div className="FarmerAccountComponentSmallCardsDescription">
                <div className="FarmerAccountComponentSmallCardsContent">
                  <div className="FarmerAccountComponentSmallCardsHeading">
                    <div className="FarmerAccountComponentSmallCardsDetails">
                      <b className="FarmerAccountComponentSmallCardsCourseName">Personal Information</b>
                      <div className="FarmerAccountComponentSmallCardsDetailsChild" />
                    </div>
                    <div className="FarmerAccountComponentFullDescriptionWrapper">
                      <div className="FarmerAccountComponentFullDescription">
                        <p className="FarmerAccountComponentBlankLine">
                          <b className="FarmerAccountComponentCategory">{`Full Name: `}</b>
                          <span>Ryan Edward Amador</span>
                        </p>
                        <p className="FarmerAccountComponentBlankLine">
                          <b className="FarmerAccountComponentCategory">{`Birthdate: `}</b>
                          <span>01 - 01 - 1999</span>
                        </p>
                        <p className="FarmerAccountComponentBlankLine">
                          <b>{`Email Address: `}</b>
                          <span className="FarmerAccountComponentCategory">ryan@gmail.com</span>
                        </p>
                        <p className="FarmerAccountComponentBlankLine">
                          <b className="FarmerAccountComponentCategory">{`Age: `}</b>
                          <span>23 years old</span>
                        </p>
                      </div>
                    </div>
                    <div className="FarmerAccountComponentFullDescriptionWrapper">
                      <div className="FarmerAccountComponentFullDescription">
                        <p className="FarmerAccountComponentBlankLine">
                          <b>{`Address: `}</b>
                          <span className="FarmerAccountComponentCategory">Antipolo</span>
                        </p>
                        <p className="FarmerAccountComponentBlankLine">
                          <b>{`Contact Number: `}</b>
                          <span className="FarmerAccountComponentCategory">(+63)9123456789</span>
                        </p>
                        <p className="FarmerAccountComponentBlankLine">
                          <b>Password: ***********</b>
                        </p>
                      </div>
                    </div>
                    <div className="FarmerAccountComponentNameTextWrapper">
                        <button className="FarmerAccountComponentButton">
                        <FaEdit className="FarmerAccountComponentButtonIcon" />
                        <div className="FarmerAccountComponentButtonText">Edit Information</div>
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerAccountComponent;
