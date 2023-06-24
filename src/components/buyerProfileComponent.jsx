import React, { useState } from 'react';
import "../css/BuyerPage/buyerCommunityForumPost.css"
import BuyerProfileNav from '../components/buyerProfileNav';
import ProfileVector1 from '../img/profileVector1.png';
import BuyerTopNav from '../components/buyerTopNav';



const BuyerProfile= () => {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState('Jenkins Mesina');


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
                      <b className="FarmerAccountComponentNameText">{fullName}</b>
                    </div>
                    <div className="FarmerAccountComponentDetailsChild" />
                    <div className="FarmerAccountComponentRoleWrapper">
                      <div className="FarmerAccountComponentRole">
                        <b>{`Role: `}</b>
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
                      <b className="FarmerAccountComponentSmallCardsCourseName">Personal Information</b>
                      <div className="FarmerAccountComponentSmallCardsDetailsChild" />
                    </div>
                    <div className="FarmerAccountComponentFullDescriptionWrapper">
                     
                        <div className="FarmerAccountComponentFullDescription">
                          <p className="FarmerAccountComponentBlankLine">
                            <b className="FarmerAccountComponentCategory">{`Full Name: `}</b>
                            <div class="name">Jenkins Mesina </div>
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b className="FarmerAccountComponentCategory">{`Birthdate: `}</b>
                            <div class="bdate">1999-04-14</div>
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b>{`Email Address: `}</b>
                            <div class="email">jenk*********@gmail.com </div>
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b className="FarmerAccountComponentCategory">{`Age: `}</b>
                            <div class="age">24</div>
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b>{`Address: `}</b>
                            <div class="address">Kristong Hari, Quezon City, Metro Manila, Metro Manila</div>
                          </p>
                          <p className="FarmerAccountComponentBlankLine">
                            <b>{`Contact Number: `}</b>
                            <div class="number">09675046713</div>
                          </p>
                        </div>
                      
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

export default BuyerProfile;
