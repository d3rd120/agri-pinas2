import "../css/Components/farmerCropTrackerComponentHarvested.css";
import FarmerNavigation from '../components/farmerPageNavigation';
import TopNav from '../components/topPageNavigation';
import CropTrackerNav from '../components/farmerCropTrackerNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import {FaEdit, FaTrash} from 'react-icons/fa';

const FarmerCropTrackerComponent = () => {
  return (
    <div className="farmerCropTrackerComponentHarvested">
      <FarmerNavigation />
      <div className="farmerCropTrackerComponentHarvestedMainPanel">
        <TopNav />
        <div className="farmerCropTrackerComponentHarvestedTopSection">
          <div className="farmerCropTrackerComponentHarvestedMainText">
            <b className="farmerCropTrackerComponentHarvestedMainTextWrapper">             
              <p className="farmerCropTrackerComponentHarvestedBlankLine">&nbsp;</p>
              <p className="farmerCropTrackerComponentHarvestedBlankLine">Crop Tracker</p>
            </b>
          </div>
        </div>    
        <CropTrackerNav />
        <div className="farmerCropTrackerComponentHarvestedMiddleSection">
        <div className="farmerCropTrackerComponentHarvestedFrameParent">


            <div className="farmerCropTrackerComponentHarvestedFrameWrapper">
              <a className="farmerCropTrackerComponentHarvestedRectangleParent">
                <img
                  className="farmerCropTrackerComponentHarvestedFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="farmerCropTrackerComponentHarvestedFrameGroup">
                  <div className="farmerCropTrackerComponentHarvestedFrameContainer">
                    <div className="farmerCropTrackerComponentHarvestedSubText1Wrapper">
                      <b className="farmerCropTrackerComponentHarvestedSubText1">Corn</b>
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
                  <div className="farmerCropTrackerComponentHarvestedFrameItem" />
                  <div className="farmerCropTrackerComponentHarvestedDetails">
                  <button className="farmerCropTrackerComponentHarvestedButton">
                    <FaEdit className="farmerCropTrackerComponentHarvestedButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestedButtonText">Edit</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestedButton">
                    <FaTrash className="farmerCropTrackerComponentHarvestedButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestedButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a> 
            </div>

             <div className="farmerCropTrackerComponentHarvestedFrameWrapper">

              <a className="farmerCropTrackerComponentHarvestedRectangleParent">
                <img
                  className="farmerCropTrackerComponentHarvestedFrameChild"
                  alt=""
                  src={OnionVector}
                />
                <div className="farmerCropTrackerComponentHarvestedFrameGroup">
                  <div className="farmerCropTrackerComponentHarvestedFrameContainer">
                    <div className="farmerCropTrackerComponentHarvestedSubText1Wrapper">
                      <b className="farmerCropTrackerComponentHarvestedSubText1">Onions</b>
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
                  <div className="farmerCropTrackerComponentHarvestedFrameItem" />
                  <div className="farmerCropTrackerComponentHarvestedDetails">
                  <button className="farmerCropTrackerComponentHarvestedButton">
                    <FaEdit className="farmerCropTrackerComponentHarvestedButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestedButtonText">Edit</div>
                  </button>
                  <button className="farmerCropTrackerComponentHarvestedButton">
                    <FaTrash className="farmerCropTrackerComponentHarvestedButtonIcon" />
                    <div className="farmerCropTrackerComponentHarvestedButtonText">Delete</div>
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
  );
};

export default FarmerCropTrackerComponent;