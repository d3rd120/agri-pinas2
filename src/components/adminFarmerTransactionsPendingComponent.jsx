import TransactionsNav from '../components/adminFarmerTransactionsNavigation';
import "../css/Components/adminFarmerTransactionsPendingComponent.css";
import AdminNavigation from '../components/adminPageNavigation';
import RiceVector from '../img/riceCardImage.png';
import CornVector from '../img/cornVector.png';
import { FaEdit, FaTrash, FaFolderOpen } from 'react-icons/fa';

const AdminFarmerTransactionsPendingComponent = () => {
  return (
    <div className="adminFarmerTransactionsPendingComponent">
      <AdminNavigation />
      <div className="adminFarmerTransactionsPendingComponentMainPanel">
        <div className="adminFarmerTransactionsPendingComponentTopSection">
          <div className="adminFarmerTransactionsPendingComponentMainText">
            <b className="adminFarmerTransactionsPendingComponentMainTextWrapper">
              <p className="adminFarmerTransactionsPendingComponentBlankLine">&nbsp;</p>
              <p className="adminFarmerTransactionsPendingComponentBlankLine">Transactions</p>
            </b>
          </div>
        </div>
        <TransactionsNav />

        <div className="adminFarmerTransactionsPendingComponentCard">
          <div className="adminFarmerTransactionsPendingComponentSubTitle">
            <FaFolderOpen /> Farmer Transactions
          </div>
          <br></br>
          <div className="adminFarmerTransactionsPendingComponentShow">
            Show:
            <select className="adminFarmerTransactionsPendingComponentRowSelect" onchange="updateRows(this.value)">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <br></br>

          <div className="adminFarmerTransactionsPendingComponentMiddleSection">
            <div className="adminFarmerTransactionsPendingComponentFrameParent">
              <div className="adminFarmerTransactionsPendingComponentFrameWrapper">
                <a className="adminFarmerTransactionsPendingComponentRectangleParent">
                  <img
                    className="adminFarmerTransactionsPendingComponentFrameChild"
                    alt=""
                    src={CornVector}
                  />
                  <div className="adminFarmerTransactionsPendingComponentFrameGroup">
                    <div className="adminFarmerTransactionsPendingComponentFrameContainer">
                      <div className="adminFarmerTransactionsPendingComponentSubText1Wrapper">
                        <b className="adminFarmerTransactionsPendingComponentSubText1">Corn</b>
                      </div>
                      <div className="adminFarmerTransactionsPendingComponentSubText2Wrapper2">
                        <div className="adminFarmerTransactionsPendingComponentSubText2">
                          <b>User ID:</b> B001
                        </div>
                        <div className="adminFarmerTransactionsPendingComponentSubText2">
                          <b>Item ID:</b> N001
                        </div>
                        <div className="adminFarmerTransactionsPendingComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                        </div>
                        <div className="adminFarmerTransactionsPendingComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                        </div>
                        <div className="adminFarmerTransactionsPendingComponentSubText2">
                          <b>Unit Price:</b> 400
                        </div>
                        <div className="adminFarmerTransactionsPendingComponentSubText2">
                          <b>Quantity Order:</b> 2
                        </div>
                        <div className="adminFarmerTransactionsPendingComponentSubText2">
                          <b>Total Amount:</b> 800
                        </div>
                        <div className="adminFarmerTransactionsPendingComponentSubText2">
                          <b>Farmer Name:</b> Arriane Gatpo
                        </div>
                        <div className="adminFarmerTransactionsPendingComponentSubText2">
                          <b>Status:</b> Pending
                        </div>
                      </div>
                    </div>
                    <div className="adminFarmerTransactionsPendingComponentFrameItem" />
                    <div className="adminFarmerTransactionsPendingComponentDetails">
                      <button className="adminFarmerTransactionsPendingComponentButton">
                        <FaTrash className="adminFarmerTransactionsPendingComponentButtonIcon" />
                        <div className="adminFarmerTransactionsPendingComponentButtonText">Delete</div>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="adminFarmerTransactionsPendingComponentForumNumber">
                <div className="adminFarmerTransactionsPendingComponentForumContainer">
                  <div className="adminFarmerTransactionsPendingComponentForumNumberBox">1</div>
                </div>
                <div className="adminFarmerTransactionsPendingComponentForumContainer">
                  <div className="adminFarmerTransactionsPendingComponentForumNumberBox">2</div>
                </div>
                <div className="adminFarmerTransactionsPendingComponentForumContainer">
                  <div className="adminFarmerTransactionsPendingComponentForumNumberBox">3</div>
                </div>
                <div className="adminFarmerTransactionsPendingComponentForumContainer">
                  <div className="adminFarmerTransactionsPendingComponentForumNumberBox">4</div>
                </div>
                <div className="adminFarmerTransactionsPendingComponentForumContainer">
                  <div className="adminFarmerTransactionsPendingComponentForumNumberBox">5</div>
                </div>
                <div className="adminFarmerTransactionsPendingComponentForumContainer">
                  <div className="adminFarmerTransactionsPendingComponentForumNumberBox">6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFarmerTransactionsPendingComponent;
