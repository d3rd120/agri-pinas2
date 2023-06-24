import TransactionsNav from '../components/adminBuyerTransactionsNavigation';
import "../css/Components/adminBuyerTransactionsCompletedComponent.css";
import AdminNavigation from '../components/adminPageNavigation';
import RiceVector from '../img/riceCardImage.png';
import CornVector from '../img/cornVector.png';
import OnionVector from '../img/onionVector.png';
import { FaEdit, FaTrash, FaFolderOpen } from 'react-icons/fa';

const AdminBuyerTransactionsCompletedComponent = () => {
  return (
    <div className="adminBuyerTransactionsCompletedComponent">
      <AdminNavigation />
      <div className="adminBuyerTransactionsCompletedComponentMainPanel">
        <div className="adminBuyerTransactionsCompletedComponentTopSection">
          <div className="adminBuyerTransactionsCompletedComponentMainText">
            <b className="adminBuyerTransactionsCompletedComponentMainTextWrapper">
              <p className="adminBuyerTransactionsCompletedComponentBlankLine">&nbsp;</p>
              <p className="adminBuyerTransactionsCompletedComponentBlankLine">Transactions</p>
            </b>
          </div>
        </div>
        <TransactionsNav />

        <div className="adminBuyerTransactionsCompletedComponentCard">
          <div className="adminBuyerTransactionsCompletedComponentSubTitle">
            <FaFolderOpen /> Buyer Transactions
          </div>
          <br></br>
          <div className="adminBuyerTransactionsCompletedComponentShow">
            Show:
            <select className="adminBuyerTransactionsCompletedComponentRowSelect" onchange="updateRows(this.value)">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <br></br>

          <div className="adminBuyerTransactionsCompletedComponentMiddleSection">
            <div className="adminBuyerTransactionsCompletedComponentFrameParent">


              <div className="adminBuyerTransactionsCompletedComponentFrameWrapper">
                <a className="adminBuyerTransactionsCompletedComponentRectangleParent">
                  <img
                    className="adminBuyerTransactionsCompletedComponentFrameChild"
                    alt=""
                    src={OnionVector}
                  />
                  <div className="adminBuyerTransactionsCompletedComponentFrameGroup">
                    <div className="adminBuyerTransactionsCompletedComponentFrameContainer">
                      <div className="adminBuyerTransactionsCompletedComponentSubText1Wrapper">
                        <b className="adminBuyerTransactionsCompletedComponentSubText1">Onions</b>
                      </div>
                      <div className="adminBuyerTransactionsCompletedComponentSubText2Wrapper2">
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>User ID:</b> B001
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Item ID:</b> N001
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Unit Price:</b> 400
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Quantity Order:</b> 2
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Total Amount:</b> 800
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Farmer Name:</b> Arriane Gatpo
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Status:</b> Completed
                        </div>
                      </div>
                    </div>
                    <div className="adminBuyerTransactionsCompletedComponentFrameItem" />
                    <div className="adminBuyerTransactionsCompletedComponentDetails">
                      <button className="adminBuyerTransactionsCompletedComponentButton">
                        <FaTrash className="adminBuyerTransactionsCompletedComponentButtonIcon" />
                        <div className="adminBuyerTransactionsCompletedComponentButtonText">Delete</div>
                      </button>
                    </div>
                  </div>
                </a>
              </div>

                
              <div className="adminBuyerTransactionsCompletedComponentFrameWrapper">
                <a className="adminBuyerTransactionsCompletedComponentRectangleParent">
                  <img
                    className="adminBuyerTransactionsCompletedComponentFrameChild"
                    alt=""
                    src={RiceVector}
                  />
                  <div className="adminBuyerTransactionsCompletedComponentFrameGroup">
                    <div className="adminBuyerTransactionsCompletedComponentFrameContainer">
                      <div className="adminBuyerTransactionsCompletedComponentSubText1Wrapper">
                        <b className="adminBuyerTransactionsCompletedComponentSubText1">Rice</b>
                      </div>
                      <div className="adminBuyerTransactionsCompletedComponentSubText2Wrapper2">
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>User ID:</b> B001
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Item ID:</b> N001
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Unit Price:</b> 400
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Quantity Order:</b> 2
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Total Amount:</b> 800
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Farmer Name:</b> Arriane Gatpo
                        </div>
                        <div className="adminBuyerTransactionsCompletedComponentSubText2">
                          <b>Status:</b> Completed
                        </div>
                      </div>
                    </div>
                    <div className="adminBuyerTransactionsCompletedComponentFrameItem" />
                    <div className="adminBuyerTransactionsCompletedComponentDetails">
                      <button className="adminBuyerTransactionsCompletedComponentButton">
                        <FaTrash className="adminBuyerTransactionsCompletedComponentButtonIcon" />
                        <div className="adminBuyerTransactionsCompletedComponentButtonText">Delete</div>
                      </button>
                    </div>
                  </div>
                </a>
              </div>


              <div className="adminBuyerTransactionsCompletedComponentForumNumber">
                <div className="adminBuyerTransactionsCompletedComponentForumContainer">
                  <div className="adminBuyerTransactionsCompletedComponentForumNumberBox">1</div>
                </div>
                <div className="adminBuyerTransactionsCompletedComponentForumContainer">
                  <div className="adminBuyerTransactionsCompletedComponentForumNumberBox">2</div>
                </div>
                <div className="adminBuyerTransactionsCompletedComponentForumContainer">
                  <div className="adminBuyerTransactionsCompletedComponentForumNumberBox">3</div>
                </div>
                <div className="adminBuyerTransactionsCompletedComponentForumContainer">
                  <div className="adminBuyerTransactionsCompletedComponentForumNumberBox">4</div>
                </div>
                <div className="adminBuyerTransactionsCompletedComponentForumContainer">
                  <div className="adminBuyerTransactionsCompletedComponentForumNumberBox">5</div>
                </div>
                <div className="adminBuyerTransactionsCompletedComponentForumContainer">
                  <div className="adminBuyerTransactionsCompletedComponentForumNumberBox">6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBuyerTransactionsCompletedComponent;
