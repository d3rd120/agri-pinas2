import TransactionsNav from '../components/adminFarmerTransactionsNavigation';
import "../css/Components/adminFarmerTransactionsCompletedComponent.css";
import AdminNavigation from '../components/adminPageNavigation';
import RiceVector from '../img/riceCardImage.png';
import CornVector from '../img/cornVector.png';
import { FaEdit, FaTrash, FaFolderOpen } from 'react-icons/fa';

const AdminFarmerTransactionsCompletedComponent = () => {
  return (
    <div className="adminFarmerTransactionsCompletedComponent">
      <AdminNavigation />
      <div className="adminFarmerTransactionsCompletedComponentMainPanel">
        <div className="adminFarmerTransactionsCompletedComponentTopSection">
          <div className="adminFarmerTransactionsCompletedComponentMainText">
            <b className="adminFarmerTransactionsCompletedComponentMainTextWrapper">
              <p className="adminFarmerTransactionsCompletedComponentBlankLine">&nbsp;</p>
              <p className="adminFarmerTransactionsCompletedComponentBlankLine">Transactions</p>
            </b>
          </div>
        </div>
        <TransactionsNav />

        <div className="adminFarmerTransactionsCompletedComponentCard">
          <div className="adminFarmerTransactionsCompletedComponentSubTitle">
            <FaFolderOpen /> Farmer Transactions
          </div>
          <br></br>
          <div className="adminFarmerTransactionsCompletedComponentShow">
            Show:
            <select className="adminFarmerTransactionsCompletedComponentRowSelect" onChange="updateRows(this.value)">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <br></br>

          <div className="adminFarmerTransactionsCompletedComponentMiddleSection">
            <div className="adminFarmerTransactionsCompletedComponentFrameParent">
              <div className="adminFarmerTransactionsCompletedComponentFrameWrapper">
                <a className="adminFarmerTransactionsCompletedComponentRectangleParent">
                  <img
                    className="adminFarmerTransactionsCompletedComponentFrameChild"
                    alt=""
                    src={CornVector}
                  />
                  <div className="adminFarmerTransactionsCompletedComponentFrameGroup">
                    <div className="adminFarmerTransactionsCompletedComponentFrameContainer">
                      <div className="adminFarmerTransactionsCompletedComponentSubText1Wrapper">
                        <b className="adminFarmerTransactionsCompletedComponentSubText1">Corn</b>
                      </div>
                      <div className="adminFarmerTransactionsCompletedComponentSubText2Wrapper2">
                        <div className="adminFarmerTransactionsCompletedComponentSubText2">
                          <b>User ID:</b> B001
                        </div>
                        <div className="adminFarmerTransactionsCompletedComponentSubText2">
                          <b>Item ID:</b> N001
                        </div>
                        <div className="adminFarmerTransactionsCompletedComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                        </div>
                        <div className="adminFarmerTransactionsCompletedComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                        </div>
                        <div className="adminFarmerTransactionsCompletedComponentSubText2">
                          <b>Unit Price:</b> 400
                        </div>
                        <div className="adminFarmerTransactionsCompletedComponentSubText2">
                          <b>Quantity Order:</b> 2
                        </div>
                        <div className="adminFarmerTransactionsCompletedComponentSubText2">
                          <b>Total Amount:</b> 800
                        </div>
                        <div className="adminFarmerTransactionsCompletedComponentSubText2">
                          <b>Farmer Name:</b> Arriane Gatpo
                        </div>
                        <div className="adminFarmerTransactionsCompletedComponentSubText2">
                          <b>Status:</b> Completed
                        </div>
                      </div>
                    </div>
                    <div className="adminFarmerTransactionsCompletedComponentFrameItem" />
                    <div className="adminFarmerTransactionsCompletedComponentDetails">
                      <button className="adminFarmerTransactionsCompletedComponentButton">
                        <FaTrash className="adminFarmerTransactionsCompletedComponentButtonIcon" />
                        <div className="adminFarmerTransactionsCompletedComponentButtonText">Delete</div>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="adminFarmerTransactionsCompletedComponentForumNumber">
                <div className="adminFarmerTransactionsCompletedComponentForumContainer">
                  <div className="adminFarmerTransactionsCompletedComponentForumNumberBox">1</div>
                </div>
                <div className="adminFarmerTransactionsCompletedComponentForumContainer">
                  <div className="adminFarmerTransactionsCompletedComponentForumNumberBox">2</div>
                </div>
                <div className="adminFarmerTransactionsCompletedComponentForumContainer">
                  <div className="adminFarmerTransactionsCompletedComponentForumNumberBox">3</div>
                </div>
                <div className="adminFarmerTransactionsCompletedComponentForumContainer">
                  <div className="adminFarmerTransactionsCompletedComponentForumNumberBox">4</div>
                </div>
                <div className="adminFarmerTransactionsCompletedComponentForumContainer">
                  <div className="adminFarmerTransactionsCompletedComponentForumNumberBox">5</div>
                </div>
                <div className="adminFarmerTransactionsCompletedComponentForumContainer">
                  <div className="adminFarmerTransactionsCompletedComponentForumNumberBox">6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFarmerTransactionsCompletedComponent;
