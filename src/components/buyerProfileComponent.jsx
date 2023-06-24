import React, { useState } from 'react';
import '../css/BuyerPage/buyerCommunityForumPost.css';
import BuyerProfileNav from '../components/buyerProfileNav';
import ProfileVector1 from '../img/profileVector1.png';
import BuyerTopNav from '../components/buyerTopNav';

const BuyerProfile = () => {
  const [name, setName] = useState('Jenkins Mesina');
  const [phoneNumber, setPhoneNumber] = useState('0987654321');
  const [email, setEmail] = useState('jenkins123@gmail.com');
  const [dateOfBirth, setDateOfBirth] = useState('2000-01-01');

  const handleUserInfoChange = (userInfo) => {
    setName(userInfo.name);
    setPhoneNumber(userInfo.phoneNumber);
    setEmail(userInfo.email);
    setDateOfBirth(userInfo.dateOfBirth);
  };

  const formatDateOfBirth = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      return date.toISOString().split('T')[0];
    }
    return '';
  };

  return (
    <div className="buyerCommunityForumComponentFullPost">
      <BuyerProfileNav
        onUserInfoChange={handleUserInfoChange}
        name={name}
        phoneNumber={phoneNumber}
        email={email}
        dateOfBirth={dateOfBirth}
      />
      <div className="farmerMarketplaceComponentMainPanel">
        <BuyerTopNav />
        <div className="farmerCommunityForumComponentTopSection">
          <div className="farmerCommunityForumComponentMainText1">
            <b className="farmerCommunityForumComponentMainText2">
              <p className="farmerCommunityForumComponentBlankLine">My Profile</p>
            </b>
          </div>
        </div>
        <div className="buyeAccountComponentMiddleSection">
          <div className="FarmerAccountComponentCardsContainer">
            <div className="FarmerAccountComponentCardsContainerInner">
              <a className="FarmerAccountComponentRectangleParent">
                <img
                  className="FarmerAccountComponentFrameItem"
                  alt=""
                  src={ProfileVector1}
                />
                <div className="FarmerAccountComponentFrameWrapper">
                  <div className="FarmerAccountComponentFrameGroup">
                    <div className="FarmerAccountComponentNameTextWrapper">
                      <b className="FarmerAccountComponentNameText">{name}</b>
                    </div>
                    <div className="FarmerAccountComponentDetailsChild" />
                    <div className="FarmerAccountComponentRoleWrapper">
                      <div className="FarmerAccountComponentRole">
                        <b>Role: </b>
                        <span>Buyer</span>
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
                    <div className="buyerComponentSmallCardsDetails">
                      <b className="FarmerAccountComponentSmallCardsCourseName">
                        Personal Information
                      </b>
                      <div className="FarmerAccountComponentSmallCardsDetailsChild" />
                    </div>
                    <div className="FarmerAccountComponentFullDescriptionWrapper">
                      <div className="FarmerAccountComponentFullDescription">
                        <p className="FarmerAccountComponentBlankLine">
                          <b className="FarmerAccountComponentCategory">Full Name: </b>
                          <div className="name">Jenkins Mesina</div>
                        </p>
                        <p className="FarmerAccountComponentBlankLine">
                          <b className="FarmerAccountComponentCategory">Birthdate: </b>
                          <div className="bdate">1999-04-14</div>
                        </p>
                        <p className="FarmerAccountComponentBlankLine">
                          <b>Email Address: </b>
                          <div className="email">jenk*********@gmail.com</div>
                        </p>
                        <p className="FarmerAccountComponentBlankLine">
                          <b className="FarmerAccountComponentCategory">Age: </b>
                          <div className="age">24</div>
                        </p>
                        <p className="FarmerAccountComponentBlankLine">
                          <b>Address: </b>
                          <div className="address">
                            Kristong Hari, Quezon City, Metro Manila, Metro Manila
                          </div>
                        </p>
                        <p className="FarmerAccountComponentBlankLine">
                          <b>Contact Number: </b>
                          <div className="number">09675046713</div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="courses-container" style={{ marginTop: '-40px' }}>
          <div className="courseProfile">
            <div className="course-preview1">
              <div className="info">Manage and protect your account</div>
              <div className="fname">Name</div>
              <div className="name">{name}</div>
              <div className="role">Role</div>
              <img src={ProfileVector1} className="selectImageIcon" />
              <div className="role1">Buyer</div>
              <div className="email1">Email</div>
              <div className="email">{email}</div>
              <div className="pnumber">Phone Number</div>
              <div className="number">{phoneNumber}</div>
              <div className="bdaydate">Birth Date</div>
              <div className="bdate">{formatDateOfBirth(new Date(dateOfBirth))}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;
