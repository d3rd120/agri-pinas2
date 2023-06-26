import TransactionsNav from '../components/adminBuyerTransactionsNavigation';
import "../css/Components/adminBuyerPendingTransactionsComponent.css";
import AdminNavigation from '../components/adminPageNavigation';
import OkraVector from '../img/okra.png';
import SitawVector from '../img/sitaw.png';
import { FaEdit, FaTrash, FaFolderOpen } from 'react-icons/fa';

const AdminBuyerTransactionsPendingComponent = () => {
  return (
    <div className="adminBuyerTransactionsPendingComponent">
      <AdminNavigation />
      <div className="adminBuyerTransactionsPendingComponentMainPanel">
        <div className="adminBuyerTransactionsPendingComponentTopSection">
          <div className="adminBuyerTransactionsPendingComponentMainText">
            <b className="adminBuyerTransactionsPendingComponentMainTextWrapper">
              <p className="adminBuyerTransactionsPendingComponentBlankLine">&nbsp;</p>
              <p className="adminBuyerTransactionsPendingComponentBlankLine">Transactions</p>
            </b>
          </div>
        </div>
        <TransactionsNav />

        <div className="adminBuyerTransactionsPendingComponentCard">
          <div className="adminBuyerTransactionsPendingComponentSubTitle">
            <FaFolderOpen /> Buyer Transactions
          </div>
          <br></br>
          <div className="adminBuyerTransactionsPendingComponentShow">
            Show:
            <select className="adminBuyerTransactionsPendingComponentRowSelect" onchange="updateRows(this.value)">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <input 
            className="adminBuyerTransactionsPendingComponentRowSelect"
            type = "text"
            placeholder = "Search">                    
            </input>
          </div>
          <br></br>

          <div className="adminBuyerTransactionsPendingComponentMiddleSection">
            <div className="adminBuyerTransactionsPendingComponentFrameParent">


              <div className="adminBuyerTransactionsPendingComponentFrameWrapper">
                <a className="adminBuyerTransactionsPendingComponentRectangleParent">
                  <img
                    className="adminBuyerTransactionsPendingComponentFrameChild"
                    alt=""
                    src={OkraVector}
                  />
                  <div className="adminBuyerTransactionsPendingComponentFrameGroup">
                    <div className="adminBuyerTransactionsPendingComponentFrameContainer">
                      <div className="adminBuyerTransactionsPendingComponentSubText1Wrapper">
                        <b className="adminBuyerTransactionsPendingComponentSubText1">Okra</b>
                      </div>
                      <div className="adminBuyerTransactionsPendingComponentSubText2Wrapper2">
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>User ID:</b> B001
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Item ID:</b> N001
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Unit Price:</b> 400
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Quantity Order:</b> 2
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Total Amount:</b> 800
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Farmer Name:</b> Arriane Gatpo
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Status:</b> Pending
                        </div>
                      </div>
                    </div>
                    <div className="adminBuyerTransactionsPendingComponentFrameItem" />
                    <div className="adminBuyerTransactionsPendingComponentDetails">
                    <button className="adminBuyerTransactionsPendingComponentButton">
                        <FaEdit className="adminBuyerTransactionsPendingComponentButtonIcon" />
                        <div className="adminBuyerTransactionsPendingComponentButtonText">Update</div>
                      </button>
                      <button className="adminBuyerTransactionsPendingComponentButton">
                        <FaTrash className="adminBuyerTransactionsPendingComponentButtonIcon" />
                        <div className="adminBuyerTransactionsPendingComponentButtonText">Delete</div>
                      </button>
                    </div>
                  </div>
                </a>

                <a className="adminBuyerTransactionsPendingComponentRectangleParent">
                  <img
                    className="adminBuyerTransactionsPendingComponentFrameChild"
                    alt=""
                    src={SitawVector}
                  />
                  <div className="adminBuyerTransactionsPendingComponentFrameGroup">
                    <div className="adminBuyerTransactionsPendingComponentFrameContainer">
                      <div className="adminBuyerTransactionsPendingComponentSubText1Wrapper">
                        <b className="adminBuyerTransactionsPendingComponentSubText1">Sitaw</b>
                      </div>
                      <div className="adminBuyerTransactionsPendingComponentSubText2Wrapper2">
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>User ID:</b> B001
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Item ID:</b> N001
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Unit Price:</b> 400
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Quantity Order:</b> 2
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Total Amount:</b> 800
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Farmer Name:</b> Arriane Gatpo
                        </div>
                        <div className="adminBuyerTransactionsPendingComponentSubText2">
                          <b>Status:</b> Pending
                        </div>
                      </div>
                    </div>
                    <div className="adminBuyerTransactionsPendingComponentFrameItem" />
                    <div className="adminBuyerTransactionsPendingComponentDetails">
                    <button className="adminBuyerTransactionsPendingComponentButton">
                        <FaEdit className="adminBuyerTransactionsPendingComponentButtonIcon" />
                        <div className="adminBuyerTransactionsPendingComponentButtonText">Update</div>
                      </button>
                      <button className="adminBuyerTransactionsPendingComponentButton">
                        <FaTrash className="adminBuyerTransactionsPendingComponentButtonIcon" />
                        <div className="adminBuyerTransactionsPendingComponentButtonText">Delete</div>
                      </button>
                    </div>
                  </div>
                </a>


              </div>

           



              <div className="adminBuyerTransactionsPendingComponentForumNumber">
                <div className="adminBuyerTransactionsPendingComponentForumContainer">
                  <div className="adminBuyerTransactionsPendingComponentForumNumberBox">1</div>
                </div>
                <div className="adminBuyerTransactionsPendingComponentForumContainer">
                  <div className="adminBuyerTransactionsPendingComponentForumNumberBox">2</div>
                </div>
                <div className="adminBuyerTransactionsPendingComponentForumContainer">
                  <div className="adminBuyerTransactionsPendingComponentForumNumberBox">3</div>
                </div>
                <div className="adminBuyerTransactionsPendingComponentForumContainer">
                  <div className="adminBuyerTransactionsPendingComponentForumNumberBox">4</div>
                </div>
                <div className="adminBuyerTransactionsPendingComponentForumContainer">
                  <div className="adminBuyerTransactionsPendingComponentForumNumberBox">5</div>
                </div>
                <div className="adminBuyerTransactionsPendingComponentForumContainer">
                  <div className="adminBuyerTransactionsPendingComponentForumNumberBox">6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBuyerTransactionsPendingComponent;
