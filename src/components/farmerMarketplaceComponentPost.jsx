import "../css/Components/farmerMarketplaceComponentPost.css";
import FarmerNavigation from '../components/farmerPageNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import TomatoVector from '../img/tomatoVector.png';
import FarmerMarketplaceEditProduct from '../components/farmerMarketplaceComponentEditProduct';
import FarmerMarketplaceDeleteProduct from '../components/farmerMarketplaceComponentDeleteProduct';
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

const FarmerMarketplace = () => {

  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const openPopup1 = () => {
    setShowPopup1(true);
  };

  const closePopup1 = () => {
    setShowPopup1(false);
  };

  const openPopup2 = () => {
    setShowPopup2(true);
  };

  const closePopup2 = () => {
    setShowPopup2(false);
  };




  return (
    <div className="farmerMarketplaceComponentPost">
     <FarmerNavigation />
      <div className="farmerMarketplaceComponentPostMainPanel">
        <div className="farmerMarketplaceComponentPostTopSection">
          <div className="farmerMarketplaceComponentPostMainTextContainer">
            <b className="farmerMarketplaceComponentPostMainTextWrapper">
              <p className="farmerMarketplaceComponentPostBlankLine">&nbsp;</p>
              <p className="farmerMarketplaceComponentPostBlankLine">&nbsp;</p>
              <p className="farmerMarketplaceComponentPostBlankLine">Marketplace</p>
            </b>
          </div>
        </div>
        <div className="farmerMarketplaceComponentPostMiddleSection">
          <div className="farmerMarketplaceComponentPostCardsContainer">
            <div className="farmerMarketplaceComponentPostCard1">
              <img
                className="farmerMarketplaceComponentPostCard1Image"
                alt=""
                src={CornVector}
              />
            </div>
            <div className="farmerMarketplaceComponentPostSmallCards">
              <div className="farmerMarketplaceComponentPostSmallCardsDescription">
                <div className="farmerMarketplaceComponentPostSmallCardsContent">
                  <div className="farmerMarketplaceComponentPostSmallCardsHeading">
                    <div className="farmerMarketplaceComponentPostSmallCardsDetails">
                      <b className="farmerMarketplaceComponentPostSmallCardsProductName">Corn</b>
                      <b className="farmerMarketplaceComponentPostSmallCardsFarmerName">Farmer: Jenkins Mesina</b>
                    </div>
                    <div className="farmerMarketplaceComponentPostSmallCardsDescriptionWrapper">
                      <div className="farmerMarketplaceComponentPostSmallCardsFullDescription">
                        <p className="farmerMarketplaceComponentPostBlankLine">
                          <b>{`Category: `}</b>
                          <span className="farmerMarketplaceComponentPostBlankLine">Vegetable</span>
                        </p>
                        <p className="farmerMarketplaceComponentPostBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="farmerMarketplaceComponentPostCategory">Sack</span>
                        </p>
                        <p className="farmerMarketplaceComponentPostBlankLine">
                          <b className="farmerMarketplaceComponentPostCategory">{`Price: `}</b>
                          <span>Php 3,000</span>
                        </p>
                        <p className="farmerMarketplaceComponentPostBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="farmerMarketplaceComponentPostCategory">50 kgs</span>
                        </p>
                        <p className="farmerMarketplaceComponentPostBlankLine">
                          <b className="farmerMarketplaceComponentPostCategory">{`Description: `}</b>
                          <span>
                            Onions are a versatile and widely used vegetable
                            known for their distinct flavor and pungent aroma.
                            They belong to the Allium genus, which also includes
                            garlic, shallots, and chives. Onions come in various
                            shapes, sizes, and colors, ranging from small and
                            white to large and yellow or red.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="farmerMarketplaceComponentPostButtonContainer">
                         <button className="farmerMarketplaceComponentPostButton" onClick={openPopup1}>
                        <FaEdit className="farmerMarketplaceComponentPostButtonIcon" />
                        <div className="farmerMarketplaceComponentPostButtonText">Edit</div>
                      </button>

                      {showPopup1 && (
                      <div id="farmerMarketplaceComponentPostPopupWindow" className="farmerMarketplaceComponentPopupWindow">
                        <div className="farmerMarketplaceComponentPostPopupContent">                                
                          <FarmerMarketplaceEditProduct closePopup1={closePopup1}/>                  
                        </div>
                      </div>
                    )}

                  <button className="farmerMarketplaceComponentPostButton" onClick={openPopup2}>
                            <FaTrash className="farmerMarketplaceComponentPostButtonIcon" />
                            <div className="farmerMarketplaceComponentPostButtonText">Delete</div>
                          </button>

                          {showPopup2 && (
                            <div id="farmerMarketplaceComponentPostPopupWindow" className="farmerMarketplaceComponentPopupWindow">
                              <div className="farmerMarketplaceComponentPostPopupContent">                               
                                <FarmerMarketplaceDeleteProduct closePopup={closePopup2} />
                              </div>
                            </div>
                          )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="farmerMarketplaceComponentPostButtonNew">
          <div className="farmerMarketplaceComponentPostButtonNewTitle">Your Other Products</div>
          <div className="farmerMarketplaceComponentPostButtonNewCourses">
            <button className="farmerMarketplaceComponentPostButtonNewCard1">
              <img
                className="farmerMarketplaceComponentPostButtonNewCard1Image"
                alt=""
                src={TomatoVector}
              />
              <div className="farmerMarketplaceComponentPostButtonNewCard1Details">
                <div className="farmerMarketplaceComponentPostButtonNewCard1DetailsInner">
                  <div className="farmerMarketplaceComponentPostButtonNewCard1Wrapper">
                    <div className="farmerMarketplaceComponentPostButtonNewCard1Title">Tomato</div>
                  </div>
                </div>
              </div>
            </button>   
            <button className="farmerMarketplaceComponentPostButtonNewCard1">
              <img
                className="farmerMarketplaceComponentPostButtonNewCard1Image"
                alt=""
                src={OnionVector}
              />
              <div className="farmerMarketplaceComponentPostButtonNewCard1Details">
                <div className="farmerMarketplaceComponentPostButtonNewCard1DetailsInner">
                  <div className="farmerMarketplaceComponentPostButtonNewCard1Wrapper">
                    <div className="farmerMarketplaceComponentPostButtonNewCard1Title">Onion</div>
                  </div>
                </div>
              </div>
            </button>           
            <button className="farmerMarketplaceComponentPostButtonNewCard1">
              <img
                className="farmerMarketplaceComponentPostButtonNewCard1Image"
                alt=""
                src={RiceVector}
              />
              <div className="farmerMarketplaceComponentPostButtonNewCard1Details">
                <div className="farmerMarketplaceComponentPostButtonNewCard1DetailsInner">
                  <div className="farmerMarketplaceComponentPostButtonNewCard1Wrapper">
                    <div className="farmerMarketplaceComponentPostButtonNewCard1Title">Rice</div>
                  </div>
                </div>
              </div>
            </button>   
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerMarketplace;
