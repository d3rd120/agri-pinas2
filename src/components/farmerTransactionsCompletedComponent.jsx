import TransactionsNav from '../components/farmerTransactionsNavigation';
import "../css/Components/farmerTransactionsCompletedComponent.css";
import FarmerNavigation from '../components/farmerPageNavigation';
import FarmerTopNav from '../components/farmerTopNav';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import { FaEdit, FaTrash, FaFolderOpen } from 'react-icons/fa';

const FarmerCommunityForumComponent = () => {
  return (
    <div className="farmerTransactionsCompletedComponent">
      <FarmerNavigation />
      <div className="farmerTransactionsCompletedComponentMainPanel">
        <FarmerTopNav />
        <div className="farmerTransactionsCompletedComponentTopSection">
          <div className="farmerTransactionsCompletedComponentMainText">
            <b className="farmerTransactionsCompletedComponentMainTextWrapper">   
              <p className="farmerTransactionsCompletedComponentBlankLine">Transactions</p>
            </b>
          </div>
        </div>
        <TransactionsNav />

        <div className="farmerTransactionsCompletedComponentCard">
          <div className="farmerTransactionsCompletedComponentSubTitle"><FaFolderOpen /> Your Transactions</div>
          <br></br>
          <div className="farmerTransactionsCompletedComponentShow">Show:
            <select className="farmerTransactionsCompletedComponentRowSelect" onchange="updateRows(this.value)">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <br></br>

          <div className="farmerTransactionsCompletedComponentMiddleSection">
            <div className="farmerTransactionsCompletedComponentFrameParent">

              <div className="farmerTransactionsCompletedComponentFrameWrapper">
                <a className="farmerTransactionsCompletedComponentRectangleParent">
                  <img
                    className="farmerTransactionsCompletedComponentFrameChild"
                    alt=""
                    src={RiceVector}
                  />
                  <div className="farmerTransactionsCompletedComponentFrameGroup">
                    <div className="farmerTransactionsCompletedComponentFrameContainer">
                      <div className="farmerTransactionsCompletedComponentSubText1Wrapper">
                        <b className="farmerTransactionsCompletedComponentSubText1">Rice</b>
                      </div>
                      <div className="farmerTransactionsCompletedComponentSubText2Wrapper2">
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>User ID:</b> B001
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Item ID:</b> N001
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Unit Price:</b> 400
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Quantity Order:</b> 2
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Total Amount:</b> 800
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Status:</b> Pending
                      </div>
                      </div>
                      <div className="farmerTransactionsCompletedComponentFrameItem" />
                      <div className="farmerTransactionsCompletedComponentDetails">
                        <button className="farmerTransactionsCompletedComponentButton">
                          <FaEdit className="farmerTransactionsCompletedComponentButtonIcon" />
                          <div className="farmerTransactionsCompletedComponentButtonText">Edit</div>
                        </button>
                        <button className="farmerTransactionsCompletedComponentButton">
                          <FaTrash className="farmerTransactionsCompletedComponentButtonIcon" />
                          <div className="farmerTransactionsCompletedComponentButtonText">Delete</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="farmerTransactionsCompletedComponentFrameWrapper">
                <a className="farmerTransactionsCompletedComponentRectangleParent">
                  <img
                    className="farmerTransactionsCompletedComponentFrameChild"
                    alt=""
                    src={OnionVector}
                  />
                  <div className="farmerTransactionsCompletedComponentFrameGroup">
                    <div className="farmerTransactionsCompletedComponentFrameContainer">
                      <div className="farmerTransactionsCompletedComponentSubText1Wrapper">
                        <b className="farmerTransactionsCompletedComponentSubText1">Onions</b>
                      </div>
                      <div className="farmerTransactionsCompletedComponentSubText2Wrapper2">
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>User ID:</b> B001
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Item ID:</b> N001
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Unit Price:</b> 400
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Quantity Order:</b> 2
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Total Amount:</b> 800
                      </div>
                        <div className="farmerTransactionsCompletedComponentSubText2">
                          <b>Status:</b> Pending
                      </div>
                      </div>
                      <div className="farmerTransactionsCompletedComponentFrameItem" />
                      <div className="farmerTransactionsCompletedComponentDetails">
                        <button className="farmerTransactionsCompletedComponentButton">
                          <FaEdit className="farmerTransactionsCompletedComponentButtonIcon" />
                          <div className="farmerTransactionsCompletedComponentButtonText">Edit</div>
                        </button>
                        <button className="farmerTransactionsCompletedComponentButton">
                          <FaTrash className="farmerTransactionsCompletedComponentButtonIcon" />
                          <div className="farmerTransactionsCompletedComponentButtonText">Delete</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="farmerTransactionsCompletedComponentForumNumber">
                <div className="farmerTransactionsCompletedComponentForumContainer">
                  <div className="farmerTransactionsCompletedComponentForumNumberBox">1</div>
                </div>
                <div className="farmerTransactionsCompletedComponentForumContainer">
                  <div className="farmerTransactionsCompletedComponentForumNumberBox">2</div>
                </div>
                <div className="farmerTransactionsCompletedComponentForumContainer">
                  <div className="farmerTransactionsCompletedComponentForumNumberBox">3</div>
                </div>
                <div className="farmerTransactionsCompletedComponentForumContainer">
                  <div className="farmerTransactionsCompletedComponentForumNumberBox">4</div>
                </div>
                <div className="farmerTransactionsCompletedComponentForumContainer">
                  <div className="farmerTransactionsCompletedComponentForumNumberBox">5</div>
                </div>
                <div className="farmerTransactionsCompletedComponentForumContainer">
                  <div className="farmerTransactionsCompletedComponentForumNumberBox">6</div>
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
