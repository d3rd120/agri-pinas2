import TransactionsNav from '../components/farmerTransactionsNavigation';
import "../css/Components/farmerTransactionsCancelledComponent.css";
import FarmerNavigation from '../components/farmerPageNavigation';
import FarmerTopNav from '../components/farmerTopNav';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import {FaEdit, FaTrash,FaFolderOpen} from 'react-icons/fa';

const FarmerCommunityForumComponent = () => {
  return (
    <div className="farmerTransactionsCancelledComponent">
      <FarmerNavigation />
      <div className="farmerTransactionsCancelledComponentMainPanel">
        <FarmerTopNav />
        <div className="farmerTransactionsCancelledComponentTopSection">
          <div className="farmerTransactionsCancelledComponentMainText">
            <b className="farmerTransactionsCancelledComponentMainTextWrapper">  
              <p className="farmerTransactionsCancelledComponentBlankLine">Transactions</p>
            </b>
          </div>
        </div>    
        <TransactionsNav />

        
        <div className="farmerTransactionsCancelledComponentCard">
            <div className="farmerTransactionsCancelledComponentSubTitle"><FaFolderOpen /> Your Transactions
            </div>
            <br></br>
           <div className = "farmerTransactionsCancelledComponentShow">Show:   
           <select className="farmerTransactionsCancelledComponentRowSelect" onchange="updateRows(this.value)">
                   <option value="5">5</option>
                   <option value="10">10</option>
                   <option value="15">15</option>
                   <option value="20">20</option>
            </select>
            </div> 
            <br></br>     
    
     

        <div className="farmerTransactionsCancelledComponentMiddleSection">
        <div className="farmerTransactionsCancelledComponentFrameParent">


            <div className="farmerTransactionsCancelledComponentFrameWrapper">
              <a className="farmerTransactionsCancelledComponentRectangleParent">
                <img
                  className="farmerTransactionsCancelledComponentFrameChild"
                  alt=""
                  src={OnionVector}
                />
                <div className="farmerTransactionsCancelledComponentFrameGroup">
                  <div className="farmerTransactionsCancelledComponentFrameContainer">
                    <div className="farmerTransactionsCancelledComponentSubText1Wrapper">
                      <b className="farmerTransactionsCancelledComponentSubText1">Onions</b>
                    </div>
                    <div className="farmerTransactionsCancelledComponentSubText2Wrapper2">
                      <div className="farmerTransactionsCancelledComponentSubText2">
                       <b>User ID:</b> B005
                      </div>
                      <div className="farmerTransactionsCancelledComponentSubText2">
                       <b>Item ID:</b> N005
                      </div>
                      <div className="farmerTransactionsCancelledComponentSubText2">
                       <b>Buyer Name:</b> Marco Pangilinan
                      </div>
                      <div className="farmerTransactionsCancelledComponentSubText2">
                       <b>Date Ordered:</b> 02 / 01 / 2023
                      </div>
                      <div className="farmerTransactionsCancelledComponentSubText2">
                       <b>Unit Price:</b> 400
                      </div>
                      <div className="farmerTransactionsCancelledComponentSubText2">
                       <b>Quantity Order:</b> 2
                      </div>
                      <div className="farmerTransactionsCancelledComponentSubText2">
                       <b>Total Amount:</b> 800
                      </div>
                      <div className="farmerTransactionsCancelledComponentSubText2">
                       <b>Status:</b> Pending
                      </div>
                    </div>
                  </div>
                  <div className="farmerTransactionsCancelledComponentFrameItem" />
                  <div className="farmerTransactionsCancelledComponentDetails">
                  <button className="farmerTransactionsCancelledComponentButton">
                    <FaEdit className="farmerTransactionsCancelledComponentButtonIcon" />
                    <div className="farmerTransactionsCancelledComponentButtonText">Edit</div>
                  </button>
                  <button className="farmerTransactionsCancelledComponentButton">
                    <FaTrash className="farmerTransactionsCancelledComponentButtonIcon" />
                    <div className="farmerTransactionsCancelledComponentButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a> 
            </div>      
               


            <div className="farmerTransactionsCancelledComponentForumNumber">
              <div className="farmerTransactionsCancelledComponentForumContainer">
                <div className="farmerTransactionsCancelledComponentForumNumberBox">1</div>
              </div>
              <div className="farmerTransactionsCancelledComponentForumContainer">
                <div className="farmerTransactionsCancelledComponentForumNumberBox">2</div>
              </div>
              <div className="farmerTransactionsCancelledComponentForumContainer">
                <div className="farmerTransactionsCancelledComponentForumNumberBox">3</div>
              </div>
              <div className="farmerTransactionsCancelledComponentForumContainer">
                <div className="farmerTransactionsCancelledComponentForumNumberBox">4</div>
              </div>
              <div className="farmerTransactionsCancelledComponentForumContainer">
                <div className="farmerTransactionsCancelledComponentForumNumberBox">5</div>
              </div>
              <div className="farmerTransactionsCancelledComponentForumContainer">
                <div className="farmerTransactionsCancelledComponentForumNumberBox">6</div>
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
