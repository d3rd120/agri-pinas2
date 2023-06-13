import React from 'react';
import '../css/Components/farmerCropTrackerComponent.css';
import CarrotVector from '../img/carrotCardImage.png';
import TomatoVector from '../img/tomatoVector.png';
import RiceVector from '../img/riceCardImage.png';
import CornVector from '../img/cornVector.png';
import OnionVector from '../img/onionVector.png';
import FarmerNavigation from '../components/farmerPageNavigation';
import { FaFolderOpen, FaEdit, FaTrash } from 'react-icons/fa';

const FarmerCropTracker = () => {
  return (
    <div className="farmerCropTrackerComponent">
      <FarmerNavigation />
      <div className="farmerCropTrackerComponentMainPanel">
        <div className="farmerCropTrackerComponentTopSection">
          <div className="farmerCropTrackerComponentMainText">
            <b className="farmerCropTrackerComponentMainTextContainer">
              <p className="farmerCropTrackerComponentBlankLine">&nbsp;</p>
              <p className="farmerCropTrackerComponentBlankLine">&nbsp;</p>
              <p className="farmerCropTrackerComponentBlankLine">Crop Tracker</p>
            </b>
          </div>
        </div>

        <div className="farmerCropTrackerComponentCategories">
              <div className="farmerCropTrackerComponentPaginationContainer">
                <div className="farmerCropTrackerComponentPaginationNumber">1</div>
              </div>
              <div className="farmerCropTrackerComponentPaginationContainer">
                <div className="farmerCropTrackerComponentPaginationNumber">2</div>
              </div>
              <div className="farmerCropTrackerComponentPaginationContainer">
                <div className="farmerCropTrackerComponentPaginationNumber">3</div>
              </div>
              <div className="farmerCropTrackerComponentPaginationContainer">
                <div className="farmerCropTrackerComponentPaginationNumber">4</div>
              </div>
              <div className="farmerCropTrackerComponentPaginationContainer">
                <div className="farmerCropTrackerComponentPaginationNumber">5</div>
              </div>
              <div className="farmerCropTrackerComponentPaginationContainer">
                <div className="farmerCropTrackerComponentPaginationNumber">6</div>
              </div>
            </div>

        <div className="farmerCropTrackerComponentMiddleSection">      
      <div className="farmerCropTrackerPageLayout2">        
      <div className="farmerCropTrackerCard">
          <div className="farmerCropTrackerSubTitle"><FaFolderOpen /> Farmer Transactions
          </div>
          <br></br>
         <div className = "farmerCropTrackerShow">Show:   
         <select className="farmerCropTrackerRowSelect" onchange="updateRows(this.value)">
                 <option value="5">5</option>
                 <option value="10">10</option>
                 <option value="15">15</option>
                 <option value="20">20</option>
          </select>
          </div> 
          <br></br>
         
      <table className="farmerCropTrackerTable">
        <thead>
          <tr>             
            <th>Crops</th>
            <th>Image</th>
            <th>Quantity (KG)</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

             <tr className='farmerCropTrackerTr'>               
              <td>Onions</td>
              <td><img alt="" src={OnionVector} className="farmerCropTrackerImage" /></td>
              <td>40kg</td>
              <td>
                <select className="farmerCropTrackerDropdown">
                  <option value="option1">Harvest</option>
                  <option value="option2">Harvested</option>               
                </select>
              </td>
              <td><FaEdit/> </td> 
              <td><FaTrash/></td>               
            </tr>         

             <tr className='farmerCropTrackerTr'>               
              <td>Carrots</td>
              <td><img alt="" src={CarrotVector} className="farmerCropTrackerImage" /></td>
              <td>35kg</td>
              <td>
                <select className="farmerCropTrackerDropdown">
                  <option value="option1">Harvest</option>
                  <option value="option2">Harvested</option>               
                </select>
              </td>
              <td><FaEdit/> </td> 
              <td><FaTrash/></td>               
            </tr>          

             <tr className='farmerCropTrackerTr'>               
              <td>Corn</td>
              <td><img alt="" src={CornVector} className="farmerCropTrackerImage" /></td>
              <td>20kg</td>
              <td>
                <select className="farmerCropTrackerDropdown">
                  <option value="option1">Harvest</option>
                  <option value="option2">Harvested</option>               
                </select>
              </td>
              <td><FaEdit/> </td> 
              <td><FaTrash/></td>                 
            </tr>               

            <tr className='farmerCropTrackerTr'>               
              <td>Rice</td>
              <td><img alt="" src={RiceVector} className="farmerCropTrackerImage" /></td>
              <td>15kg</td>
              <td>
                <select className="farmerCropTrackerDropdown">
                  <option value="option1">Harvest</option>
                  <option value="option2">Harvested</option>               
                </select>
              </td>
              <td><FaEdit/> </td> 
              <td><FaTrash/></td>                 
            </tr>          

            <tr className='farmerCropTrackerTr'>               
              <td>Tomato</td>
              <td><img alt="" src={TomatoVector} className="farmerCropTrackerImage" /></td>
              <td>55kg</td>
              <td>
                <select className="farmerCropTrackerDropdown">
                  <option value="option1">Harvest</option>
                  <option value="option2">Harvested</option>               
                </select>
              </td>
              <td><FaEdit/> </td> 
              <td><FaTrash/></td>                 
            </tr>          
                     
        </tbody>
      </table>
      </div>
      </div>     
        </div>
      </div>
    </div>
  );
};

export default FarmerCropTracker;
