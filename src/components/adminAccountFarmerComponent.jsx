import '../css/Components/adminAccountFarmerComponent.css';
import FarmerNavigation from '../components/farmerPageNavigation';
import { FaPeopleArrows, FaEdit, FaTrash} from 'react-icons/fa';

const AdminFarmerTransactions = () => {
  return (
    <div className="adminAccountFarmerComponent">
     <FarmerNavigation />
      <div className="adminAccountFarmerComponentMainPanel">
        <div className="adminAccountFarmerComponentTopSection">
          <div className="adminAccountFarmerComponentMainText">
            <b className="adminAccountFarmerComponentMainTextContainer">
              <p className="adminAccountFarmerComponentBlankLine">&nbsp;</p>
              <p className="adminAccountFarmerComponentBlankLine">&nbsp;</p>
              <p className="adminAccountFarmerComponentBlankLine">transactions</p>
            </b>
          </div>
        </div>

        <div className="adminAccountFarmerComponentCategories">
              <div className="adminAccountFarmerComponentPaginationContainer">
                <div className="adminAccountFarmerComponentPaginationNumber">1</div>
              </div>
              <div className="adminAccountFarmerComponentPaginationContainer">
                <div className="adminAccountFarmerComponentPaginationNumber">2</div>
              </div>
              <div className="adminAccountFarmerComponentPaginationContainer">
                <div className="adminAccountFarmerComponentPaginationNumber">3</div>
              </div>
              <div className="adminAccountFarmerComponentPaginationContainer">
                <div className="adminAccountFarmerComponentPaginationNumber">4</div>
              </div>
              <div className="adminAccountFarmerComponentPaginationContainer">
                <div className="adminAccountFarmerComponentPaginationNumber">5</div>
              </div>
              <div className="adminAccountFarmerComponentPaginationContainer">
                <div className="adminAccountFarmerComponentPaginationNumber">6</div>
              </div>
            </div>

            
        <div className="adminAccountFarmerComponentMiddleSection">
        <div className="adminFarmerAccountManagementPageLayout1">     
            <div className="adminFarmerAccountManagementPageLayout2">
        <div className="adminFarmerAccountManagementCard">
            <div className="adminFarmerAccountManagementSubTitle"><FaPeopleArrows /> Farmer Accounts
            </div>
            <br></br>
           <div className = "adminFarmerAccountManagementShow">Show:   
           <select className="adminFarmerAccountManagementRowSelect" onchange="updateRows(this.value)">
                   <option value="5">5</option>
                   <option value="10">10</option>
                   <option value="15">15</option>
                   <option value="20">20</option>
            </select>
            </div> 
            <br></br>
           
        <table className="adminFarmerAccountManagementTable">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Contact No.</th>
              <th>Address</th>
              <th>Birthday</th>
              <th>Age</th>    
              <th>Edit</th>
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
                 <td> <FaEdit /> </td> 
                 <td> <FaTrash /> </td>               
           </tr>         

           <tr> 
                 <td>B001</td>
                 <td>Arrianne Clarisse Gatpo</td>
                 <td>arriane@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Tandang Sora, Quezon City</td>
                 <td>01-15-1999</td>
                 <td>23</td>       
                 <td> <FaEdit /> </td> 
                 <td> <FaTrash /> </td>               
           </tr>         

           <tr> 
                 <td>B001</td>
                 <td>Arrianne Clarisse Gatpo</td>
                 <td>arriane@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Tandang Sora, Quezon City</td>
                 <td>01-15-1999</td>
                 <td>23</td>       
                 <td> <FaEdit /> </td> 
                 <td> <FaTrash /> </td>               
           </tr>         

           <tr> 
                 <td>B001</td>
                 <td>Arrianne Clarisse Gatpo</td>
                 <td>arriane@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Tandang Sora, Quezon City</td>
                 <td>01-15-1999</td>
                 <td>23</td>       
                 <td> <FaEdit /> </td> 
                 <td> <FaTrash /> </td>               
           </tr>        
            
           <tr> 
                 <td>B001</td>
                 <td>Arrianne Clarisse Gatpo</td>
                 <td>arriane@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Tandang Sora, Quezon City</td>
                 <td>01-15-1999</td>
                 <td>23</td>       
                 <td> <FaEdit /> </td> 
                 <td> <FaTrash /> </td>               
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
