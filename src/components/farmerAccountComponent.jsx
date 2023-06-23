import FarmerNavigation from '../components/farmerPageNavigation';
import '../css/Components/farmerAccountComponent.css';
import ProfileVector from '../img/profileVector3.png';
import FarmerTopNav from '../components/farmerTopNav';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';

const FarmerAccountComponent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState('Ryan Edward Amador');
  const [birthdate, setBirthdate] = useState('01 - 01 - 1999');
  const [emailAddress, setEmailAddress] = useState('ryan@gmail.com');
  const [age, setAge] = useState('23 years old');
  const [address, setAddress] = useState('Antipolo');
  const [contactNumber, setContactNumber] = useState('(+63)9123456789');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);

  };

  const handleCancelClick = () => {
    setIsEditing(false);
   
  };

  return (
    <div className="FarmerAccountComponent">
      <FarmerNavigation />
      <div className="FarmerAccountComponentMainPanel">
        <FarmerTopNav />
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
                      <b className="FarmerAccountComponentNameText">{fullName}</b>
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
                      {isEditing ? (
                        <div className="FarmerAccountComponentFullDescription">
                          <p className="FarmerAccountComponentBlankLine">
                            <b className="FarmerAccountComponentCategory">{`Full Name: `}</b>
                            <input
                              className="FarmerAccountComponentCategoryInput"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b className="FarmerAccountComponentCategory">{`Birthdate: `}</b>
                            <input
                              className="FarmerAccountComponentCategoryInput"
                              value={birthdate}
                              onChange={(e) => setBirthdate(e.target.value)}
                            />
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b>{`Email Address: `}</b>
                            <input
                              className="FarmerAccountComponentCategoryInput"
                              value={emailAddress}
                              onChange={(e) => setEmailAddress(e.target.value)}
                            />
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b className="FarmerAccountComponentCategory">{`Age: `}</b>
                            <input
                              className="FarmerAccountComponentCategoryInput"
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                            />
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b>{`Address: `}</b>
                            <input
                              className="FarmerAccountComponentCategoryInput"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b>{`Contact Number: `}</b>
                            <input
                              className="FarmerAccountComponentCategoryInput"
                              value={contactNumber}
                              onChange={(e) => setContactNumber(e.target.value)}
                            />
                          </p>
                        </div>
                      ) : (
                        <div className="FarmerAccountComponentFullDescription">
                          <p className="FarmerAccountComponentBlankLine">
                            <b className="FarmerAccountComponentCategory">{`Full Name: `}</b>
                            <span>{fullName}</span>
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b className="FarmerAccountComponentCategory">{`Birthdate: `}</b>
                            <span>{birthdate}</span>
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b>{`Email Address: `}</b>
                            <span className="FarmerAccountComponentCategory">{emailAddress}</span>
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b className="FarmerAccountComponentCategory">{`Age: `}</b>
                            <span>{age}</span>
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b>{`Address: `}</b>
                            <span className="FarmerAccountComponentCategory">{address}</span>
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b>{`Contact Number: `}</b>
                            <span className="FarmerAccountComponentCategory">{contactNumber}</span>
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="FarmerAccountComponentNameTextWrapper">
                      {isEditing ? (
                        <>
                          <button className="FarmerAccountComponentButton" onClick={handleSaveClick}>
                            <div className="FarmerAccountComponentButtonText">Save</div>
                          </button>
                          <button className="FarmerAccountComponentButton" onClick={handleCancelClick}>
                            <div className="FarmerAccountComponentButtonText">Cancel</div>
                          </button>
                        </>
                      ) : (
                        <button className="FarmerAccountComponentButton" onClick={handleEditClick}>
                          <FaEdit className="FarmerAccountComponentButtonIcon" />
                          <div className="FarmerAccountComponentButtonText">Edit Information</div>
                        </button>
                      )}
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
