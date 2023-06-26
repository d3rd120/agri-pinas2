import TransactionsNav from '../components/adminFarmerTransactionsNavigation';
import "../css/Components/adminFarmerTransactionsCancelledComponent.css";
import AdminNavigation from '../components/adminPageNavigation';
import SitawVector from '../img/sitaw.png';
import OkraVector from '../img/okra.png';
import { FaEdit, FaTrash, FaFolderOpen } from 'react-icons/fa';

const AdminFarmerTransactionsCancelledComponent = () => {
  return (
    <div className="adminFarmerTransactionsCancelledComponent">
      <AdminNavigation />
      <div className="adminFarmerTransactionsCancelledComponentMainPanel">
        <div className="adminFarmerTransactionsCancelledComponentTopSection">
          <div className="adminFarmerTransactionsCancelledComponentMainText">
            <b className="adminFarmerTransactionsCancelledComponentMainTextWrapper">
              <p className="adminFarmerTransactionsCancelledComponentBlankLine">&nbsp;</p>
              <p className="adminFarmerTransactionsCancelledComponentBlankLine">Transactions</p>
            </b>
          </div>
        </div>
        <TransactionsNav />

        <div className="adminFarmerTransactionsCancelledComponentCard">
          <div className="adminFarmerTransactionsCancelledComponentSubTitle">
            <FaFolderOpen /> Farmer Transactions
          </div>
          <br></br>
          <div className="adminFarmerTransactionsCancelledComponentShow">
            Show:
            <select className="adminFarmerTransactionsCancelledComponentRowSelect" onchange="updateRows(this.value)">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <input 
            className="adminFarmerTransactionsCancelledComponentRowSelect"
            type = "text"
            placeholder = "Search">                    
            </input>
          </div>
          <br></br>

          <div className="adminFarmerTransactionsCancelledComponentMiddleSection">
            <div className="adminFarmerTransactionsCancelledComponentFrameParent">


              <div className="adminFarmerTransactionsCancelledComponentFrameWrapper">
                <a className="adminFarmerTransactionsCancelledComponentRectangleParent">
                  <img
                    className="adminFarmerTransactionsCancelledComponentFrameChild"
                    alt=""
                    src={OkraVector}
                  />
                  <div className="adminFarmerTransactionsCancelledComponentFrameGroup">
                    <div className="adminFarmerTransactionsCancelledComponentFrameContainer">
                      <div className="adminFarmerTransactionsCancelledComponentSubText1Wrapper">
                        <b className="adminFarmerTransactionsCancelledComponentSubText1">Okra</b>
                      </div>
                      <div className="adminFarmerTransactionsCancelledComponentSubText2Wrapper2">
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>User ID:</b> B001
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Item ID:</b> N001
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Unit Price:</b> 400
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Quantity Order:</b> 2
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Total Amount:</b> 800
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Farmer Name:</b> Arriane Gatpo
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Status:</b> Cancelled
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </a>

                <a className="adminFarmerTransactionsCancelledComponentRectangleParent">
                  <img
                    className="adminFarmerTransactionsCancelledComponentFrameChild"
                    alt=""
                    src={SitawVector}
                  />
                  <div className="adminFarmerTransactionsCancelledComponentFrameGroup">
                    <div className="adminFarmerTransactionsCancelledComponentFrameContainer">
                      <div className="adminFarmerTransactionsCancelledComponentSubText1Wrapper">
                        <b className="adminFarmerTransactionsCancelledComponentSubText1">Sitaw</b>
                      </div>
                      <div className="adminFarmerTransactionsCancelledComponentSubText2Wrapper2">
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>User ID:</b> B001
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Item ID:</b> N001
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Unit Price:</b> 400
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Quantity Order:</b> 2
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Total Amount:</b> 800
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Farmer Name:</b> Arriane Gatpo
                        </div>
                        <div className="adminFarmerTransactionsCancelledComponentSubText2">
                          <b>Status:</b> Cancelled
                        </div>
                      </div>
                    </div>                    
                  </div>
                </a>


              </div>
                 
            
            
              <div className="adminFarmerTransactionsCancelledComponentForumNumber">
                <div className="adminFarmerTransactionsCancelledComponentForumContainer">
                  <div className="adminFarmerTransactionsCancelledComponentForumNumberBox">1</div>
                </div>
                <div className="adminFarmerTransactionsCancelledComponentForumContainer">
                  <div className="adminFarmerTransactionsCancelledComponentForumNumberBox">2</div>
                </div>
                <div className="adminFarmerTransactionsCancelledComponentForumContainer">
                  <div className="adminFarmerTransactionsCancelledComponentForumNumberBox">3</div>
                </div>
                <div className="adminFarmerTransactionsCancelledComponentForumContainer">
                  <div className="adminFarmerTransactionsCancelledComponentForumNumberBox">4</div>
                </div>
                <div className="adminFarmerTransactionsCancelledComponentForumContainer">
                  <div className="adminFarmerTransactionsCancelledComponentForumNumberBox">5</div>
                </div>
                <div className="adminFarmerTransactionsCancelledComponentForumContainer">
                  <div className="adminFarmerTransactionsCancelledComponentForumNumberBox">6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFarmerTransactionsCancelledComponent;
