import '../css/Components/adminAccountBuyerComponent.css';
import AdminNavigation from './adminPageNavigation';
import { FaPeopleArrows, FaEdit, FaTrash} from 'react-icons/fa';

const AdminFarmerTransactions = () => {
  return (
    <div className="adminAccountBuyerComponent">
      <AdminNavigation />
      <div className="adminAccountBuyerComponentMainPanel">
        <div className="adminAccountBuyerComponentTopSection">
          <div className="adminAccountBuyerComponentMainText">
            <b className="adminAccountBuyerComponentMainTextContainer">              
              <p className="adminAccountBuyerComponentBlankLine">&nbsp;</p>
              <p className="adminAccountBuyerComponentBlankLine">transactions</p>
            </b>
          </div>
        </div>

        <div className="adminAccountBuyerComponentCategories">
              <div className="adminAccountBuyerComponentPaginationContainer">
                <div className="adminAccountBuyerComponentPaginationNumber">1</div>
              </div>
              <div className="adminAccountBuyerComponentPaginationContainer">
                <div className="adminAccountBuyerComponentPaginationNumber">2</div>
              </div>
              <div className="adminAccountBuyerComponentPaginationContainer">
                <div className="adminAccountBuyerComponentPaginationNumber">3</div>
              </div>
              <div className="adminAccountBuyerComponentPaginationContainer">
                <div className="adminAccountBuyerComponentPaginationNumber">4</div>
              </div>
              <div className="adminAccountBuyerComponentPaginationContainer">
                <div className="adminAccountBuyerComponentPaginationNumber">5</div>
              </div>
              <div className="adminAccountBuyerComponentPaginationContainer">
                <div className="adminAccountBuyerComponentPaginationNumber">6</div>
              </div>
            </div>


        <div className="adminAccountBuyerComponentMiddleSection">            
        <div className="adminBuyerAccountManagementPageLayout1">    
            <div className="adminBuyerAccountManagementPageLayout2">
        <div className="adminBuyerAccountManagementCard">
            <div className="adminBuyerAccountManagementSubTitle"><FaPeopleArrows /> Buyer Accounts
            </div>
            <br></br>
           <div className = "adminBuyerAccountManagementShow">Show:   
           <select className="adminBuyerAccountManagementRowSelect" onchange="updateRows(this.value)">
                   <option value="5">5</option>
                   <option value="10">10</option>
                   <option value="15">15</option>
                   <option value="20">20</option>
            </select>
            </div> 
            <br></br>
           
        <table className="adminBuyerAccountManagementTable">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Contact No.</th>
              <th>Address</th>
              <th>Birthday</th>
              <th>Age</th>             
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          <tr> 
                 <td>B001</td>
                 <td>Arrianne Clarisse Gatpo</td>
                 <td>arriane@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Tandang Sora, Quezon City</td>
                 <td>01-15-1999</td>
                 <td>23</td>       
                
                 <td><FaTrash /> </td>               
           </tr>    

            <tr> 
                 <td>B001</td>
                 <td>Arrianne Clarisse Gatpo</td>
                 <td>arriane@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Tandang Sora, Quezon City</td>
                 <td>01-15-1999</td>
                 <td>23</td>       
                
                 <td><FaTrash /> </td>               
           </tr>          

           <tr> 
                 <td>B001</td>
                 <td>Arrianne Clarisse Gatpo</td>
                 <td>arriane@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Tandang Sora, Quezon City</td>
                 <td>01-15-1999</td>
                 <td>23</td>       
                 
                 <td><FaTrash /> </td>               
           </tr>    

           <tr> 
                 <td>B001</td>
                 <td>Arrianne Clarisse Gatpo</td>
                 <td>arriane@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Tandang Sora, Quezon City</td>
                 <td>01-15-1999</td>
                 <td>23</td>       
             
                 <td><FaTrash /> </td>               
           </tr>    

           <tr> 
                 <td>B001</td>
                 <td>Arrianne Clarisse Gatpo</td>
                 <td>arriane@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Tandang Sora, Quezon City</td>
                 <td>01-15-1999</td>
                 <td>23</td>       
             
                 <td><FaTrash /> </td>               
           </tr>    
          </tbody>
        </table>
        </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFarmerTransactions;
