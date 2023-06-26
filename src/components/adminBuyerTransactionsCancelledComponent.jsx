import TransactionsNav from '../components/adminBuyerTransactionsNavigation';
import "../css/Components/adminBuyerTransactionsCancelledComponent.css";
import AdminNavigation from '../components/adminPageNavigation';
import RiceVector from '../img/riceCardImage.png';
import SiliVector from '../img/sili.png';
import SquashVector from '../img/squash.png';
import { FaEdit, FaTrash, FaFolderOpen } from 'react-icons/fa';

const AdminBuyerTransactionsCancelledComponent = () => {
  return (
    <div className="adminBuyerTransactionsCancelledComponent">
      <AdminNavigation />
      <div className="adminBuyerTransactionsCancelledComponentMainPanel">
        <div className="adminBuyerTransactionsCancelledComponentTopSection">
          <div className="adminBuyerTransactionsCancelledComponentMainText">
            <b className="adminBuyerTransactionsCancelledComponentMainTextWrapper">
              <p className="adminBuyerTransactionsCancelledComponentBlankLine">&nbsp;</p>
              <p className="adminBuyerTransactionsCancelledComponentBlankLine">Transactions</p>
            </b>
          </div>
        </div>
        <TransactionsNav />

        <div className="adminBuyerTransactionsCancelledComponentCard">
          <div className="adminBuyerTransactionsCancelledComponentSubTitle">
            <FaFolderOpen /> Buyer Transactions
          </div>
          <br></br>
          <div className="adminBuyerTransactionsCancelledComponentShow">
            Show:
            <select className="adminBuyerTransactionsCancelledComponentRowSelect" onchange="updateRows(this.value)">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <input 
            className="adminBuyerTransactionsCancelledComponentRowSelect"
            type = "text"
            placeholder = "Search">                    
            </input>
          </div>
          <br></br>

          <div className="adminBuyerTransactionsCancelledComponentMiddleSection">
            <div className="adminBuyerTransactionsCancelledComponentFrameParent">


              <div className="adminBuyerTransactionsCancelledComponentFrameWrapper">
                <a className="adminBuyerTransactionsCancelledComponentRectangleParent">
                  <img
                    className="adminBuyerTransactionsCancelledComponentFrameChild"
                    alt=""
                    src={SiliVector}
                  />
                  <div className="adminBuyerTransactionsCancelledComponentFrameGroup">
                    <div className="adminBuyerTransactionsCancelledComponentFrameContainer">
                      <div className="adminBuyerTransactionsCancelledComponentSubText1Wrapper">
                        <b className="adminBuyerTransactionsCancelledComponentSubText1">Siling Labuyo</b>
                      </div>
                      <div className="adminBuyerTransactionsCancelledComponentSubText2Wrapper2">
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>User ID:</b> B001
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Item ID:</b> N001
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Unit Price:</b> 400
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Quantity Order:</b> 2
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Total Amount:</b> 800
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Farmer Name:</b> Arriane Gatpo
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Status:</b> Cancelled
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </a>

                <a className="adminBuyerTransactionsCancelledComponentRectangleParent">
                  <img
                    className="adminBuyerTransactionsCancelledComponentFrameChild"
                    alt=""
                    src={SquashVector}
                  />
                  <div className="adminBuyerTransactionsCancelledComponentFrameGroup">
                    <div className="adminBuyerTransactionsCancelledComponentFrameContainer">
                      <div className="adminBuyerTransactionsCancelledComponentSubText1Wrapper">
                        <b className="adminBuyerTransactionsCancelledComponentSubText1">Squash</b>
                      </div>
                      <div className="adminBuyerTransactionsCancelledComponentSubText2Wrapper2">
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>User ID:</b> B001
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Item ID:</b> N001
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Buyer Name:</b> Ryan Edward Amador
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Date Ordered:</b> 02 / 01 / 2023
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Unit Price:</b> 400
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Quantity Order:</b> 2
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Total Amount:</b> 800
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Farmer Name:</b> Arriane Gatpo
                        </div>
                        <div className="adminBuyerTransactionsCancelledComponentSubText2">
                          <b>Status:</b> Cancelled
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </a>


              </div>



              <div className="adminBuyerTransactionsCancelledComponentForumNumber">
                <div className="adminBuyerTransactionsCancelledComponentForumContainer">
                  <div className="adminBuyerTransactionsCancelledComponentForumNumberBox">1</div>
                </div>
                <div className="adminBuyerTransactionsCancelledComponentForumContainer">
                  <div className="adminBuyerTransactionsCancelledComponentForumNumberBox">2</div>
                </div>
                <div className="adminBuyerTransactionsCancelledComponentForumContainer">
                  <div className="adminBuyerTransactionsCancelledComponentForumNumberBox">3</div>
                </div>
                <div className="adminBuyerTransactionsCancelledComponentForumContainer">
                  <div className="adminBuyerTransactionsCancelledComponentForumNumberBox">4</div>
                </div>
                <div className="adminBuyerTransactionsCancelledComponentForumContainer">
                  <div className="adminBuyerTransactionsCancelledComponentForumNumberBox">5</div>
                </div>
                <div className="adminBuyerTransactionsCancelledComponentForumContainer">
                  <div className="adminBuyerTransactionsCancelledComponentForumNumberBox">6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBuyerTransactionsCancelledComponent;
