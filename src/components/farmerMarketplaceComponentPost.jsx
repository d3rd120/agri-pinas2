import React, { useState } from 'react';
import '../css/Components/farmerMarketplaceComponentPost.css';
import FarmerNavigation from '../components/farmerPageNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import SitawVector from '../img/sitaw.png';
import SquashVector from '../img/squash.png';
import SiliVector from '../img/sili.png';
import FarmerMarketplaceEditProduct from '../components/farmerMarketplaceComponentEditProduct';
import FarmerMarketplaceDeleteProduct from '../components/farmerMarketplaceComponentDeleteProduct';
import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
import FarmerTopNav from '../components/farmerTopNav';

const FarmerMarketplace = () => {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [editedCategory, setEditedCategory] = useState('');
  const [editedPackaging, setEditedPackaging] = useState('');
  const [editedPrice, setEditedPrice] = useState('');
  const [editedKilogram, setEditedKilogram] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

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

  const handleSave = (newCategory, newPackaging, newPrice, newKilogram, newDescription) => {
    setEditedCategory(newCategory);
    setEditedPackaging(newPackaging);
    setEditedPrice(newPrice);
    setEditedKilogram(newKilogram);
    setEditedDescription(newDescription);
    closePopup1(); 
  };

  return (
    <div className="farmerMarketplaceComponentPost">
      <FarmerNavigation />
      <div className="farmerMarketplaceComponentPostMainPanel">
        <FarmerTopNav />
        <div className="farmerMarketplaceComponentPostTopSection">
          <div className="farmerMarketplaceComponentPostMainTextContainer">
            <b className="farmerMarketplaceComponentPostMainTextWrapper">              

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
                      <b className="farmerMarketplaceComponentPostSmallCardsFarmerName">Farmer: Marievic Anes</b>
                    </div>
                    <div className="farmerMarketplaceComponentPostSmallCardsDescriptionWrapper">
                      <div className="farmerMarketplaceComponentPostSmallCardsFullDescription">
                        <p className="farmerMarketplaceComponentPostBlankLine">
                          <b>Category: </b>
                          <span className="farmerMarketplaceComponentPostBlankLine">Fruit{editedCategory}</span>
                        </p>
                        <p className="farmerMarketplaceComponentPostBlankLine">
                          <b>Packaging: </b>
                          <span className="farmerMarketplaceComponentPostCategory">Sack{editedPackaging}</span>
                        </p>
                        <p className="farmerMarketplaceComponentPostBlankLine">
                          <b>Price:  </b>
                          <span>Php 10,000{editedPrice}</span>
                        </p>
                        <p className="farmerMarketplaceComponentPostBlankLine">
                          <b>Kilogram per unit: </b>
                          <span className="farmerMarketplaceComponentPostCategory">80 kgs{editedKilogram}</span>
                        </p>
                        <p className="farmerMarketplaceComponentPostBlankLine">
                          <b>Description: </b>
                          <span> I am selling this crop as wholesale and retail, if you need to know more just message me here and we can talk about how things needs to be done.{editedDescription}</span>
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
                            <FarmerMarketplaceEditProduct
                              closePopup1={closePopup1}
                              handleSave={handleSave}
                              editedCategory={editedCategory}
                              editedPackaging={editedPackaging}
                              editedPrice={editedPrice}
                              editedKilogram={editedKilogram}
                              editedDescription={editedDescription}
                            />
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
                src={SitawVector}
              />
              <div className="farmerMarketplaceComponentPostButtonNewCard1Details">
                <div className="farmerMarketplaceComponentPostButtonNewCard1DetailsInner">
                  <div className="farmerMarketplaceComponentPostButtonNewCard1Wrapper">
                    <div className="farmerMarketplaceComponentPostButtonNewCard1Title">Sitaw</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="farmerMarketplaceComponentPostButtonNewCard1">
              <img
                className="farmerMarketplaceComponentPostButtonNewCard1Image"
                alt=""
                src={SiliVector}
              />
              <div className="farmerMarketplaceComponentPostButtonNewCard1Details">
                <div className="farmerMarketplaceComponentPostButtonNewCard1DetailsInner">
                  <div className="farmerMarketplaceComponentPostButtonNewCard1Wrapper">
                    <div className="farmerMarketplaceComponentPostButtonNewCard1Title">Siling Labuyo</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="farmerMarketplaceComponentPostButtonNewCard1">
              <img
                className="farmerMarketplaceComponentPostButtonNewCard1Image"
                alt=""
                src={SquashVector}
              />
              <div className="farmerMarketplaceComponentPostButtonNewCard1Details">
                <div className="farmerMarketplaceComponentPostButtonNewCard1DetailsInner">
                  <div className="farmerMarketplaceComponentPostButtonNewCard1Wrapper">
                    <div className="farmerMarketplaceComponentPostButtonNewCard1Title">Squash</div>
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