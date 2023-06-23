import React, { useState } from 'react';
import "../css/BuyerPage/buyerCommunityForumPost.css"
import BuyerProfileNav from '../components/buyerProfileNav';
import ProfileVector1 from '../img/profileVector1.png';
import BuyerTopNav from '../components/buyerTopNav';

const BuyerProfile = () => {
  const [name, setName] = useState(' Jenkins Mesina');
  const [phoneNumber, setPhoneNumber] = useState('0987654321');
  const [email, setEmail] = useState('jenkins123@gmail.com ');
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
        <div class="courses-container" style={{ marginTop: "-40px" }}>
          <div class="courseProfile">
            <div class="course-preview1">
              <div class="info">Manage and protect your account</div>
              <div class="fname">Name</div>
              <div class="name">{name}</div>
              <div class="role">Role</div>
              <img src={ProfileVector1} class="selectImageIcon" />
              <div class="role1">Buyer</div>
              <div class="email1">Email</div>
              <div class="email">{email}</div>
              <div class="pnumber">Phone Number</div>
              <div class="number">{phoneNumber}</div>
              <div class="bdaydate">Birth Date</div>
              <div class="bdate">{formatDateOfBirth(new Date(dateOfBirth))}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;