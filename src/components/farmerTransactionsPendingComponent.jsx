import TransactionsNav from '../components/farmerTransactionsNavigation';

import "../css/Components/farmerTransactionsPendingComponent.css";
import FarmerNavigation from '../components/farmerPageNavigation';
import TopNav from '../components/topPageNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import {FaEdit, FaTrash,FaFolderOpen} from 'react-icons/fa';

const FarmerCommunityForumComponent = () => {
  return (
    <div className="farmerTransactionsPendingComponent">
      <FarmerNavigation />
      <div className="farmerTransactionsPendingComponentMainPanel">
        <TopNav />
        <div className="farmerTransactionsPendingComponentTopSection">
          <div className="farmerTransactionsPendingComponentMainText">
            <b className="farmerTransactionsPendingComponentMainTextWrapper">             
              <p className="farmerTransactionsPendingComponentBlankLine">&nbsp;</p>
              <p className="farmerTransactionsPendingComponentBlankLine">Transactions</p>
            </b>
          </div>
        </div>    
        <TransactionsNav />

        
        <div className="farmerTransactionsPendingComponentCard">
            <div className="farmerTransactionsPendingComponentSubTitle"><FaFolderOpen /> Your Transactions
            </div>
            <br></br>
           <div className = "farmerTransactionsPendingComponentShow">Show:   
           <select className="farmerTransactionsPendingComponentRowSelect" onchange="updateRows(this.value)">
                   <option value="5">5</option>
                   <option value="10">10</option>
                   <option value="15">15</option>
                   <option value="20">20</option>
            </select>
            </div> 
            <br></br>     
    
     

        <div className="farmerTransactionsPendingComponentMiddleSection">
        <div className="farmerTransactionsPendingComponentFrameParent">


            <div className="farmerTransactionsPendingComponentFrameWrapper">
              <a className="farmerTransactionsPendingComponentRectangleParent">
                <img
                  className="farmerTransactionsPendingComponentFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="farmerTransactionsPendingComponentFrameGroup">
                  <div className="farmerTransactionsPendingComponentFrameContainer">
                    <div className="farmerTransactionsPendingComponentSubText1Wrapper">
                      <b className="farmerTransactionsPendingComponentSubText1">Corn</b>
                    </div>
                    <div className="farmerTransactionsPendingComponentSubText2Wrapper2">
                      <div className="farmerTransactionsPendingComponentSubText2">
                       <b>User ID:</b> B001
                      </div>
                      <div className="farmerTransactionsPendingComponentSubText2">
                       <b>Item ID:</b> N001
                      </div>
                      <div className="farmerTransactionsPendingComponentSubText2">
                       <b>Buyer Name:</b> Ryan Edward Amador
                      </div>
                      <div className="farmerTransactionsPendingComponentSubText2">
                       <b>Date Ordered:</b> 02 / 01 / 2023
                      </div>
                      <div className="farmerTransactionsPendingComponentSubText2">
                       <b>Unit Price:</b> 400
                      </div>
                      <div className="farmerTransactionsPendingComponentSubText2">
                       <b>Quantity Order:</b> 2
                      </div>
                      <div className="farmerTransactionsPendingComponentSubText2">
                       <b>Total Amount:</b> 800
                      </div>
                      <div className="farmerTransactionsPendingComponentSubText2">
                       <b>Status:</b> Pending
                      </div>
                    </div>
                  </div>
                  <div className="farmerTransactionsPendingComponentFrameItem" />
                  <div className="farmerTransactionsPendingComponentDetails">
                  <button className="farmerTransactionsPendingComponentButton">
                    <FaEdit className="farmerTransactionsPendingComponentButtonIcon" />
                    <div className="farmerTransactionsPendingComponentButtonText">Edit</div>
                  </button>
                  <button className="farmerTransactionsPendingComponentButton">
                    <FaTrash className="farmerTransactionsPendingComponentButtonIcon" />
                    <div className="farmerTransactionsPendingComponentButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a> 
            </div>
          
               


            <div className="farmerTransactionsPendingComponentForumNumber">
              <div className="farmerTransactionsPendingComponentForumContainer">
                <div className="farmerTransactionsPendingComponentForumNumberBox">1</div>
              </div>
              <div className="farmerTransactionsPendingComponentForumContainer">
                <div className="farmerTransactionsPendingComponentForumNumberBox">2</div>
              </div>
              <div className="farmerTransactionsPendingComponentForumContainer">
                <div className="farmerTransactionsPendingComponentForumNumberBox">3</div>
              </div>
              <div className="farmerTransactionsPendingComponentForumContainer">
                <div className="farmerTransactionsPendingComponentForumNumberBox">4</div>
              </div>
              <div className="farmerTransactionsPendingComponentForumContainer">
                <div className="farmerTransactionsPendingComponentForumNumberBox">5</div>
              </div>
              <div className="farmerTransactionsPendingComponentForumContainer">
                <div className="farmerTransactionsPendingComponentForumNumberBox">6</div>
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
