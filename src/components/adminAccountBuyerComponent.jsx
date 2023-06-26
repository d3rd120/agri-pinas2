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
              <p className="adminAccountBuyerComponentBlankLine">accounts</p>
            </b>
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
            <input 
            className="adminBuyerAccountManagementRowSelect"
            type = "text"
            placeholder = "Search">                    
            </input>
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
              <th></th>       
              <th></th> 
              
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
                 <td><FaEdit /></td>   
                 <td><FaTrash /> </td>
                             
           </tr>    

            <tr> 
                 <td>B002</td>
                 <td>Romeo London III</td>
                 <td>romeo@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Sampaloc, Manila</td>
                 <td>07-12-1999</td>
                 <td>23</td>       
                 <td><FaEdit /></td>  
                 <td><FaTrash /> </td>   
                                
           </tr>          

           <tr> 
                 <td>B003</td>
                 <td>Daniella Tungol</td>
                 <td>daniella@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Tandang Sora, Quezon City</td>
                 <td>12-15-1999</td>
                 <td>23</td>       
                 <td><FaEdit /></td> 
                 <td><FaTrash /> </td>  
                                  
           </tr>    

           <tr> 
                 <td>B004</td>
                 <td>Marievic Anes</td>
                 <td>marievic@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>East Avenue, Quezon City</td>
                 <td>08-12-2000</td>
                 <td>22</td>       
                 <td><FaEdit /></td> 
                 <td><FaTrash /> </td>               
                     
           </tr>    

           <tr> 
                 <td>B005</td>
                 <td>Jenkins Mesina</td>
                 <td>jenkins@gmail.com</td>
                 <td>(+63)9234567891</td>
                 <td>Sta Mesa, Manila City</td>
                 <td>01-15-1999</td>
                 <td>23</td>       
                 <td><FaEdit /></td> 
                 <td><FaTrash /> </td>  
                                  
           </tr>    
          </tbody>
        </table>

       
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
      </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFarmerTransactions;
