import "../css/Components/farmerCropTrackerComponentHarvest.css";
import FarmerNavigation from '../components/farmerPageNavigation';
import FarmerTopNav from '../components/farmerTopNav';
import CropTrackerNav from '../components/farmerCropTrackerNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import SitawVector from '../img/sitaw.png';
import SquashVector from '../img/squash.png';
import SiliVector from '../img/sili.png';
import {FaEdit, FaTrash,FaFolderOpen,FaHandHoldingMedical, FaPlus, FaTimes} from 'react-icons/fa';
import FarmerCropTrackerAdd from '../components/farmerCropTrackerComponentAdd';
import React, { useState } from 'react';

const FarmerCommunityForumComponent = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

 
  return (
    <div className="farmerCropTrackerComponentHarvest">
      <FarmerNavigation />
      <div className="farmerCropTrackerComponentHarvestMainPanel">
        <FarmerTopNav />
        <div className="farmerCropTrackerComponentHarvestTopSection">
          <div className="farmerCropTrackerComponentHarvestMainText">
            <b className="farmerCropTrackerComponentHarvestMainTextWrapper">          
              <p className="farmerCropTrackerComponentHarvestBlankLine">Crop Tracker</p>
            </b>
          </div>
        </div>    
          
        <CropTrackerNav />
      

        {showPopup && (
          <div id="farmerCropTrackerComponentPopupWindow" className="farmerCropTrackerComponentPopupWindow">
            <div className="farmerCropTrackerComponentPopupContent">      
              <span className="farmerCropTrackerComponentCloseButton" onClick={closePopup}><FaTimes/></span>          
              <FarmerCropTrackerAdd/>                     
            </div>
          </div>
        )}



        
        <div className="farmerCropTrackerComponentHarvestCard">
            <div className="farmerCropTrackerComponentHarvestSubTitle"><FaFolderOpen /> Your Inventory
            </div>
            <br></br>
           <div className = "farmerCropTrackerComponentHarvestShow">Show:   
           <select className="farmerCropTrackerComponentHarvestRowSelect" onchange="updateRows(this.value)">
                   <option value="5">5</option>
                   <option value="10">10</option>
                   <option value="15">15</option>
                   <option value="20">20</option>
            </select>
            <input 
            className="farmerCropTrackerComponentHarvestRowSelect"
            type = "text"
            placeholder = "Search">                    
            </input>    
            <button className="farmerCropTrackerComponentHarvestRowSelect2" onClick={handleButtonClick}>         
          <div className="farmerCropTrackerComponentButtonText1">Add Crop</div>
           </button>     
            
            </div> 
            <br></br>     
    
     

        <div className="farmerCropTrackerComponentHarvestMiddleSection">
        <div className="farmerCropTrackerComponentHarvestFrameParent">


            <div className="farmerCropTrackerComponentHarvestFrameWrapper">
              <a className="farmerCropTrackerComponentHarvestRectangleParent">
               
                <div className="farmerCropTrackerComponentHarvestFrameGroup">
                  <div className="farmerCropTrackerComponentHarvestFrameContainer">
                    <div className="farmerCropTrackerComponentHarvestSubText1Wrapper">
                      <b className="farmerCropTrackerComponentHarvestSubText1">Onions</b>
                    </div>
                    <div className="farmerCropTrackerComponentHarvestSubText2Wrapper2">                     
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Date Planted:</b> 01 / 03 / 2023
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Estimated Date to Harvest:</b> 02 / 05 / 2023
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Status:</b> Ready to Harvest
                      </div>
                    </div>
                  </div>
                  <div className="farmerCropTrackerComponentHarvestFrameItem" />
                  <div className="farmerCropTrackerComponentHarvestDetails">
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaHandHoldingMedical className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Harvest</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaEdit className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Edit</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaTrash className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a> 
              <a className="farmerCropTrackerComponentHarvestRectangleParent">
                
                <div className="farmerCropTrackerComponentHarvestFrameGroup">
                  <div className="farmerCropTrackerComponentHarvestFrameContainer">
                    <div className="farmerCropTrackerComponentHarvestSubText1Wrapper">
                      <b className="farmerCropTrackerComponentHarvestSubText1">Corn</b>
                    </div>
                    <div className="farmerCropTrackerComponentHarvestSubText2Wrapper2">
                    <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Date Planted:</b> 02 / 05 / 2023
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Estimated Date to Harvest:</b> 05 / 02 / 2023
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Status:</b> Delayed
                      </div>
                    </div>
                  </div>
                  <div className="farmerCropTrackerComponentHarvestFrameItem" />
                  <div className="farmerCropTrackerComponentHarvestDetails">
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaHandHoldingMedical className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Harvest</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaEdit className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Edit</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaTrash className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a>  
            </div>
           

            <div className="farmerCropTrackerComponentHarvestFrameWrapper">
              <a className="farmerCropTrackerComponentHarvestRectangleParent">
               
                <div className="farmerCropTrackerComponentHarvestFrameGroup">
                  <div className="farmerCropTrackerComponentHarvestFrameContainer">
                    <div className="farmerCropTrackerComponentHarvestSubText1Wrapper">
                      <b className="farmerCropTrackerComponentHarvestSubText1">Sitaw</b>
                    </div>
                    <div className="farmerCropTrackerComponentHarvestSubText2Wrapper2">
                    <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Date Planted:</b> 02 / 05 / 2023
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Estimated Date to Harvest:</b> 05 / 02 / 2023
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Status:</b> Delayed
                      </div>
                    </div>
                  </div>
                  <div className="farmerCropTrackerComponentHarvestFrameItem" />
                  <div className="farmerCropTrackerComponentHarvestDetails">
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaHandHoldingMedical className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Harvest</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaEdit className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Edit</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaTrash className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a> 
              <a className="farmerCropTrackerComponentHarvestRectangleParent">
              
                <div className="farmerCropTrackerComponentHarvestFrameGroup">
                  <div className="farmerCropTrackerComponentHarvestFrameContainer">
                    <div className="farmerCropTrackerComponentHarvestSubText1Wrapper">
                      <b className="farmerCropTrackerComponentHarvestSubText1">Siling Labuyo</b>
                    </div>
                    <div className="farmerCropTrackerComponentHarvestSubText2Wrapper2">
                    <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Date Planted:</b> 01 / 03 / 2023
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Estimated Date to Harvest:</b> 02 / 05 / 2023
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Status:</b> Ready to Harvest
                      </div>
                    </div>
                  </div>
                  <div className="farmerCropTrackerComponentHarvestFrameItem" />
                  <div className="farmerCropTrackerComponentHarvestDetails">
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaHandHoldingMedical className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Harvest</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaEdit className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Edit</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaTrash className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a>  
            </div>
           
            <div className="farmerCropTrackerComponentHarvestFrameWrapper">
              <a className="farmerCropTrackerComponentHarvestRectangleParent">
              
                <div className="farmerCropTrackerComponentHarvestFrameGroup">
                  <div className="farmerCropTrackerComponentHarvestFrameContainer">
                    <div className="farmerCropTrackerComponentHarvestSubText1Wrapper">
                      <b className="farmerCropTrackerComponentHarvestSubText1">Squash</b>
                    </div>
                    <div className="farmerCropTrackerComponentHarvestSubText2Wrapper2">
                    <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Date Planted:</b> 01 / 03 / 2023
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Estimated Date to Harvest:</b> 02 / 05 / 2023
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Status:</b> Ready to Harvest
                      </div>
                    </div>
                  </div>
                  <div className="farmerCropTrackerComponentHarvestFrameItem" />
                  <div className="farmerCropTrackerComponentHarvestDetails">
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaHandHoldingMedical className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Harvest</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaEdit className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Edit</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestButton">
                    <FaTrash className="farmerCropTrackerComponentHarvestButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a>               
              <a className="farmerCropTrackerComponentHarvestRectangleParent">                
              </a>         
         
            </div>
         

            <div className="farmerCropTrackerComponentHarvestForumNumber">
              <div className="farmerCropTrackerComponentHarvestForumContainer">
                <div className="farmerCropTrackerComponentHarvestForumNumberBox">1</div>
              </div>
              <div className="farmerCropTrackerComponentHarvestForumContainer">
                <div className="farmerCropTrackerComponentHarvestForumNumberBox">2</div>
              </div>
              <div className="farmerCropTrackerComponentHarvestForumContainer">
                <div className="farmerCropTrackerComponentHarvestForumNumberBox">3</div>
              </div>
              <div className="farmerCropTrackerComponentHarvestForumContainer">
                <div className="farmerCropTrackerComponentHarvestForumNumberBox">4</div>
              </div>
              <div className="farmerCropTrackerComponentHarvestForumContainer">
                <div className="farmerCropTrackerComponentHarvestForumNumberBox">5</div>
              </div>
              <div className="farmerCropTrackerComponentHarvestForumContainer">
                <div className="farmerCropTrackerComponentHarvestForumNumberBox">6</div>
              </div>
            </div>
          </div>
          </div> 
        </div>
      </div>
    </div>

  );
};

export default FarmerCommunityForumComponent;
