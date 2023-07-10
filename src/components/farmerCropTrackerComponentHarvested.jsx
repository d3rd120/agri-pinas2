import "../css/Components/farmerCropTrackerComponentHarvested.css";
import FarmerNavigation from '../components/farmerPageNavigation';
import FarmerTopNav from '../components/farmerTopNav';
import CropTrackerNav from '../components/farmerCropTrackerNavigation';
import RiceVector from '../img/riceCardImage.png';
import TomatoVector from '../img/tomatoVector.png';
import FarmerMarketplaceAddProductComponent from '../components/farmerMarketplaceComponentAddProduct';
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

import {FaEdit, FaTrash, FaFolderOpen,FaPlus,FaTimes } from 'react-icons/fa';

const FarmerCropTrackerComponent = () => {


  const [showPopup, setShowPopup] = useState(false);
  const [products, setProducts] = useState([]);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
   
  }
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Products"), (snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    });
  
    return () => unsubscribe();
  }, []);


  return (
    <div className="farmerCropTrackerComponentHarvested">
      <FarmerNavigation />
      <div className="farmerCropTrackerComponentHarvestedMainPanel">
        <FarmerTopNav />
        <div className="farmerCropTrackerComponentHarvestedTopSection">
          <div className="farmerCropTrackerComponentHarvestedMainText">
            <b className="farmerCropTrackerComponentHarvestedMainTextWrapper">        
              <p className="farmerCropTrackerComponentHarvestedBlankLine">Crop Tracker</p>
            </b>
          </div>
        </div>    
        <CropTrackerNav />

        <div className="farmerCropTrackerComponentHarvestedCard">
            <div className="farmerCropTrackerComponentHarvestedSubTitle"><FaFolderOpen /> Your Inventory
            </div>
            <br></br>
           <div className = "farmerCropTrackerComponentHarvestedShow">Show:   
           <select className="farmerCropTrackerComponentHarvestedRowSelect" onchange="updateRows(this.value)">
                   <option value="5">5</option>
                   <option value="10">10</option>
                   <option value="15">15</option>
                   <option value="20">20</option>
            </select>
            <input 
            className="farmerCropTrackerComponentHarvestedRowSelect"
            type = "text"
            placeholder = "Search">                    
            </input> 
            </div> 
            <br></br>     
    
        <div className="farmerCropTrackerComponentHarvestedMiddleSection">
        <div className="farmerCropTrackerComponentHarvestedFrameParent">


            <div className="farmerCropTrackerComponentHarvestedFrameWrapper">
              <a className="farmerCropTrackerComponentHarvestedRectangleParent">
                <img
                  className="farmerCropTrackerComponentHarvestedFrameChild"
                  alt=""
                  src={RiceVector}
                />
                <div className="farmerCropTrackerComponentHarvestedFrameGroup">
                  <div className="farmerCropTrackerComponentHarvestedFrameContainer">
                    <div className="farmerCropTrackerComponentHarvestedSubText1Wrapper">
                      <b className="farmerCropTrackerComponentHarvestedSubText1">Rice</b>
                    </div>
                    <div className="farmerCropTrackerComponentHarvestedSubText2Wrapper2">
                      <div className="farmerCropTrackerComponentHarvestedSubText2">
                       <b>Quantity(KG):</b> 20kgs
                      </div>
                      <div className="farmerCropTrackerComponentHarvestedSubText2">
                       <b>Status:</b> Harvested
                      </div>
                    </div>
                  </div>
                  <div className="farmerCropTrackerComponentHarvestDetails">

                  <button className="farmerCropTrackerComponentHarvestButton" onClick={openPopup}>
                    <FaPlus className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Add</div>
                  </button>

                  
                  {showPopup && (
                    <div id="farmerMarketplaceComponentPopupWindow" className="farmerMarketplaceComponentPopupWindow">
                      <div className="farmerMarketplaceComponentPopupContent">      
                      <span className="farmerMarketplaceComponentCloseButton" onClick={closePopup}><FaTimes/></span>          
                        <FarmerMarketplaceAddProductComponent/>                     
                      </div>
                    </div>
                  )}

                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaEdit className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Update</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaTrash className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Delete</div>
                  </button>
                </div>                     
                </div>
              </a> 

              <a className="farmerCropTrackerComponentHarvestedRectangleParent">
                <img
                  className="farmerCropTrackerComponentHarvestedFrameChild"
                  alt=""
                  src={TomatoVector}
                />
                <div className="farmerCropTrackerComponentHarvestedFrameGroup">
                  <div className="farmerCropTrackerComponentHarvestedFrameContainer">
                    <div className="farmerCropTrackerComponentHarvestedSubText1Wrapper">
                      <b className="farmerCropTrackerComponentHarvestedSubText1">Tomato</b>
                    </div>
                    <div className="farmerCropTrackerComponentHarvestedSubText2Wrapper2">
                      <div className="farmerCropTrackerComponentHarvestedSubText2">
                       <b>Quantity(KG):</b> 100kgs
                      </div>
                      <div className="farmerCropTrackerComponentHarvestedSubText2">
                       <b>Status:</b> Harvested
                      </div>
                    </div>
                  </div>
                  <div className="farmerCropTrackerComponentHarvestDetails">
                    
                  <button className="farmerCropTrackerComponentHarvestButton" onClick={openPopup}>
                    <FaPlus className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Add</div>
                  </button>

                  
                  {showPopup && (
                    <div id="farmerMarketplaceComponentPopupWindow" className="farmerMarketplaceComponentPopupWindow">
                      <div className="farmerMarketplaceComponentPopupContent">      
                      <span className="farmerMarketplaceComponentCloseButton" onClick={closePopup}><FaTimes/></span>          
                        <FarmerMarketplaceAddProductComponent/>                     
                      </div>
                    </div>
                  )}
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaEdit className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Update</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaTrash className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Delete</div>
                  </button>
                </div>                    
                </div>
              </a> 


            </div>

          
            <div className="farmerCropTrackerComponentHarvestedForumNumber">
              <div className="farmerCropTrackerComponentHarvestedForumContainer">
                <div className="farmerCropTrackerComponentHarvestedForumNumberBox">1</div>
              </div>
              <div className="farmerCropTrackerComponentHarvestedForumContainer">
                <div className="farmerCropTrackerComponentHarvestedForumNumberBox">2</div>
              </div>
              <div className="farmerCropTrackerComponentHarvestedForumContainer">
                <div className="farmerCropTrackerComponentHarvestedForumNumberBox">3</div>
              </div>
              <div className="farmerCropTrackerComponentHarvestedForumContainer">
                <div className="farmerCropTrackerComponentHarvestedForumNumberBox">4</div>
              </div>
              <div className="farmerCropTrackerComponentHarvestedForumContainer">
                <div className="farmerCropTrackerComponentHarvestedForumNumberBox">5</div>
              </div>
              <div className="farmerCropTrackerComponentHarvestedForumContainer">
                <div className="farmerCropTrackerComponentHarvestedForumNumberBox">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default FarmerCropTrackerComponent;
