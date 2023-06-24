import React, { useState } from 'react';
import "../css/Components/farmerProfileComponent.css";
import FarmerProfileNav from '../components/farmerProfileNav';
import ProfileVector2 from '../img/profileVector2.png';
import FarmerTopNav from '../components/farmerTopNav';

const BuyerProfile = () => {
  const [name, setName] = useState(' Marievic Anes');
  const [phoneNumber, setPhoneNumber] = useState('0987654321');
  const [email, setEmail] = useState('mavic123@gmail.com ');
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
    <div className="farmerProfileComponent">
      <FarmerProfileNav
        onUserInfoChange={handleUserInfoChange}
        name={name}
        phoneNumber={phoneNumber}
        email={email}
        dateOfBirth={dateOfBirth}
      />     
      <div className="farmerProfileComponentMainPanel">
        <FarmerTopNav /> 
        <div className="farmerProfileComponentTopSection">
          <div className="farmerProfileComponentMainText1">
            <b className="farmerProfileComponentMainText2">
              <p className="farmerProfileComponentBlankLine">My Profile</p>
            </b>
          </div>
        </div>
        <div style={{ marginTop: "-40px" }}>
          <div class="farmercourseProfile">
            <div class="course-preview1">
              <div class="farmerProfileComponentInfo">Manage and protect your account</div>
              <div class="farmerProfileComponentFullName">Name</div>
              <div class="farmerProfileComponentName">{name}</div>
              <div class="farmerProfileComponentRole">Role</div>
              <img src={ProfileVector2} class="farmerselectImageIcon" />
              <div class="farmerProfileComponentRole2">Farmer</div>
              <div class="farmerProfileComponentEmail1">Email</div>
              <div class="farmerProfileComponentEmail2">{email}</div>
              <div class="farmerProfileComponentPhoneNumber">Phone Number</div>
              <div class="farmerProfileComponentNumber">{phoneNumber}</div>
              <div class="farmerProfileComponentBdayDate">Birth Date</div>
              <div class="farmerProfileComponentBirthdate">{formatDateOfBirth(new Date(dateOfBirth))}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;