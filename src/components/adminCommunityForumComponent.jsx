import '../css/Components/adminCommunityForumComponent.css';
import AdminNavigation from '../components/adminPageNavigation';
import { FaComments, FaEdit, FaTrash} from 'react-icons/fa';
import CornVector from '../img/cornVector.png'
import OnionVector from '../img/onionVector.png';



const AdminCommunityForum = () => {
  return (
    <div className="adminCommunityForumComponent">
     <AdminNavigation />
      <div className="adminCommunityForumComponentMainPanel">
        <div className="adminCommunityForumComponentTopSection">
          <div className="adminCommunityForumComponentMainText">
            <b className="adminCommunityForumComponentMainTextContainer">
              <p className="adminCommunityForumComponentBlankLine">&nbsp;</p>              
              <p className="adminCommunityForumComponentBlankLine">Community Forum</p>
            </b>
          </div>
        </div>


        <div className="adminCommunityForumComponentCategories">
              <div className="adminCommunityForumComponentPaginationContainer">
                <div className="adminCommunityForumComponentPaginationNumber">1</div>
              </div>
              <div className="adminCommunityForumComponentPaginationContainer">
                <div className="adminCommunityForumComponentPaginationNumber">2</div>
              </div>
              <div className="adminCommunityForumComponentPaginationContainer">
                <div className="adminCommunityForumComponentPaginationNumber">3</div>
              </div>
              <div className="adminCommunityForumComponentPaginationContainer">
                <div className="adminCommunityForumComponentPaginationNumber">4</div>
              </div>
              <div className="adminCommunityForumComponentPaginationContainer">
                <div className="adminCommunityForumComponentPaginationNumber">5</div>
              </div>
              <div className="adminCommunityForumComponentPaginationContainer">
                <div className="adminCommunityForumComponentPaginationNumber">6</div>
              </div>
            </div>


        <div className="adminCommunityForumComponentMiddleSection">
        <div className="adminCommunityForumPageLayout1">          
          <div className="adminCommunityForumPageLayout2">
      <div className="adminCommunityForumCard">
          <div className="adminCommunityForumSubTitle"><FaComments /> Post Management
          </div>
          <br></br>
         <div className = "adminCommunityForumShow">Show:   
         <select className="adminCommunityForumRowSelect" onchange="updateRows(this.value)">
                 <option value="5">5</option>
                 <option value="10">10</option>
                 <option value="15">15</option>
                 <option value="20">20</option>
          </select>
          </div> 
          <br></br>
         
      <table className="adminCommunityForumTable">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Role</th>
            <th>Full Name</th>
            <th>Post</th>
            <th>Image</th>         
           
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        <tr> 
               <td>F001</td>
               <td>Farmer</td>
               <td>Arrianne Clarisse Gatpo</td>
               <td>What is the current SRP of onions?</td>    
               <td>
                 <img className = "adminCommunityForumImage"                
                  alt=""
                  src={OnionVector}
                  />
                 </td>       
            
               <td> <FaTrash /></td>               
         </tr>        

         <tr> 
               <td>F001</td>
               <td>Farmer</td>
               <td>Arrianne Clarisse Gatpo</td>
               <td>What is the current SRP of onions?</td>    
               <td>
               <img className = "adminCommunityForumImage"             
                  alt=""
                  src={CornVector}
                  />
                 </td>       
                
               <td> <FaTrash /></td>             
         </tr>
       
         <tr> 
               <td>F001</td>
               <td>Farmer</td>
               <td>Arrianne Clarisse Gatpo</td>
               <td>What is the current SRP of onions?</td>    
               <td>
               <img className = "adminCommunityForumImage"                   
                  alt=""
                  src={OnionVector}
                  />
                 </td>       
                
               <td> <FaTrash /></td>  
                          
         </tr>
       
         <tr> 
               <td>F001</td>
               <td>Farmer</td>
               <td>Arrianne Clarisse Gatpo</td>
               <td>What is the current SRP of onions?</td>    
               <td>
               <img className = "adminCommunityForumImage"               
                  alt=""
                  src={CornVector}
                  />
                 </td>       
                
               <td> <FaTrash /></td>            
         </tr>
       
           <tr> 
               <td>F001</td>
               <td>Farmer</td>
               <td>Arrianne Clarisse Gatpo</td>
               <td>What is the current SRP of onions?</td>    
               <td>
               <img className = "adminCommunityForumImage"               
                  alt=""
                  src={OnionVector}
                  />
                 </td>       
               
               <td> <FaTrash /></td>           
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

export default AdminCommunityForum;
