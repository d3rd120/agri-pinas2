import "../css/Components/farmerCropTrackerComponentHarvest.css";
import FarmerNavigation from '../components/farmerPageNavigation';
import TopNav from '../components/topPageNavigation';
import CropTrackerNav from '../components/farmerCropTrackerNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import {FaEdit, FaTrash,FaFolderOpen} from 'react-icons/fa';

const FarmerCommunityForumComponent = () => {
  return (
    <div className="farmerCropTrackerComponentHarvest">
      <FarmerNavigation />
      <div className="farmerCropTrackerComponentHarvestMainPanel">
        <TopNav />
        <div className="farmerCropTrackerComponentHarvestTopSection">
          <div className="farmerCropTrackerComponentHarvestMainText">
            <b className="farmerCropTrackerComponentHarvestMainTextWrapper">             
              <p className="farmerCropTrackerComponentHarvestBlankLine">&nbsp;</p>
              <p className="farmerCropTrackerComponentHarvestBlankLine">Crop Tracker</p>
            </b>
          </div>
        </div>    
        <CropTrackerNav />

        
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
            </div> 
            <br></br>     
    
     

        <div className="farmerCropTrackerComponentHarvestMiddleSection">
        <div className="farmerCropTrackerComponentHarvestFrameParent">


            <div className="farmerCropTrackerComponentHarvestFrameWrapper">
              <a className="farmerCropTrackerComponentHarvestRectangleParent">
                <img
                  className="farmerCropTrackerComponentHarvestFrameChild"
                  alt=""
                  src={OnionVector}
                />
                <div className="farmerCropTrackerComponentHarvestFrameGroup">
                  <div className="farmerCropTrackerComponentHarvestFrameContainer">
                    <div className="farmerCropTrackerComponentHarvestSubText1Wrapper">
                      <b className="farmerCropTrackerComponentHarvestSubText1">Onions</b>
                    </div>
                    <div className="farmerCropTrackerComponentHarvestSubText2Wrapper2">
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Quantity(KG):</b> 20kgs
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Status:</b> Ready to Harvest
                      </div>
                    </div>
                  </div>
                  <div className="farmerCropTrackerComponentHarvestFrameItem" />
                  <div className="farmerCropTrackerComponentHarvestDetails">
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
                <img
                  className="farmerCropTrackerComponentHarvestFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="farmerCropTrackerComponentHarvestFrameGroup">
                  <div className="farmerCropTrackerComponentHarvestFrameContainer">
                    <div className="farmerCropTrackerComponentHarvestSubText1Wrapper">
                      <b className="farmerCropTrackerComponentHarvestSubText1">Corn</b>
                    </div>
                    <div className="farmerCropTrackerComponentHarvestSubText2Wrapper2">
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Quantity(KG):</b> 30kgs
                      </div>
                      <div className="farmerCropTrackerComponentHarvestSubText2">
                       <b>Status:</b> Ready to Harvest
                      </div>
                    </div>
                  </div>
                  <div className="farmerCropTrackerComponentHarvestFrameItem" />
                  <div className="farmerCropTrackerComponentHarvestDetails">
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
