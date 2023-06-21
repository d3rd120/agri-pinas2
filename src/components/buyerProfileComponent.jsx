import React, { useState } from 'react';
import "../css/BuyerPage/buyerCommunityForumPost.css"
import BuyerProfileNav from '../components/buyerProfileNav';
import ProfileVector1 from '../img/profileVector1.png';
import BuyerTopNav from '../components/buyerTopNav';



const BuyerProfile= () => {


  return (
      <div className="buyerCommunityForumComponentFullPost">
          <BuyerProfileNav />     
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
 
  <div class="info ">Manage and protect your account</div>
    <div class="fname">Name</div>
    <div class="name">Jenkins Mesina </div>
    <div class="role">Role</div>
    <img src={ProfileVector1}class="selectImageIcon"/>
    <div class="role1">Buyer</div>
    <div class="email1">Email</div>
    <div class="email">jenk*********@gmail.com </div>
    <div class="pnumber">Phone Number</div>
    <div class="number">09675046713</div>
    <div class="bdaydate">Birth Date</div>
    <div class="bdate">1996-04-14</div>
  </div>
</div>

</div>



    
      </div>
      </div>
     
  );
};

export default BuyerProfile;
