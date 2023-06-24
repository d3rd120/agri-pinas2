
import "../css/Components/adminCommunityForumComponent.css";
import AdminNavigation from '../components/adminPageNavigation';
import RiceVector from '../img/riceCardImage.png';
import CornVector from '../img/cornVector.png';
import SiliVector from '../img/sili.png';
import OnionVector from '../img/onionVector.png';
import SquashVector from '../img/squash.png';
import TomatoVector from '../img/tomatoVector.png';
import { FaTrash, FaComments } from 'react-icons/fa';

const AdminCommunityForumComponent = () => {
  return (
    <div className="adminCommunityForumComponent">
      <AdminNavigation />
      <div className="adminCommunityForumComponentMainPanel">   
        <div className="adminCommunityForumComponentTopSection">
          <div className="adminCommunityForumComponentMainText">
            <b className="adminCommunityForumComponentMainTextWrapper">       
            <p className="adminCommunityForumComponentBlankLine">&nbsp;</p>
              <p className="adminCommunityForumComponentBlankLine">Community forum</p>
            </b>
          </div>
        </div>    
    
        
        <div className="adminCommunityForumComponentCard">
            <div className="adminCommunityForumComponentSubTitle"><FaComments /> Post Management
            </div>
            <br></br>
           <div className="adminCommunityForumComponentShow">Show:   
           <select className="adminCommunityForumComponentRowSelect" onchange="updateRows(this.value)">
                   <option value="5">5</option>
                   <option value="10">10</option>
                   <option value="15">15</option>
                   <option value="20">20</option>
            </select>
            </div> 
            <br></br>     
    
     

        <div className="adminCommunityForumComponentMiddleSection">
        <div className="adminCommunityForumComponentFrameParent">


            <div className="adminCommunityForumComponentFrameWrapper">
              <a className="adminCommunityForumComponentRectangleParent">
                <img
                  className="adminCommunityForumComponentFrameChild"
                  alt=""
                  src={OnionVector}
                />
                <div className="adminCommunityForumComponentFrameGroup">
                  <div className="adminCommunityForumComponentFrameContainer">
                    <div className="adminCommunityForumComponentSubText1Wrapper">
                      <b className="adminCommunityForumComponentSubText1">What is the current SRP of onions?</b>
                    </div>
                    <div className="adminCommunityForumComponentSubText2Wrapper2">
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User ID:</b> F001
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User Role</b> Farmer
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>Full Name:</b> Ryan Edward Amador
                      </div>                                         
                    </div>
                  </div>
                  <div className="adminCommunityForumComponentFrameItem" />
                  <div className="adminCommunityForumComponentDetails">                
                  <button className="adminCommunityForumComponentButton">
                    <FaTrash className="adminCommunityForumComponentButtonIcon" />
                    <div className="adminCommunityForumComponentButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a> 
            </div>  

            <div className="adminCommunityForumComponentFrameWrapper">
              <a className="adminCommunityForumComponentRectangleParent">
                <img
                  className="adminCommunityForumComponentFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="adminCommunityForumComponentFrameGroup">
                  <div className="adminCommunityForumComponentFrameContainer">
                    <div className="adminCommunityForumComponentSubText1Wrapper">
                      <b className="adminCommunityForumComponentSubText1">How corn grows?</b>
                    </div>
                    <div className="adminCommunityForumComponentSubText2Wrapper2">
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User ID:</b> F002
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User Role</b> Farmer
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>Full Name:</b> Marievic Anes
                      </div>                                     
                    </div>
                  </div>
                  <div className="adminCommunityForumComponentFrameItem" />
                  <div className="adminCommunityForumComponentDetails">                
                  <button className="adminCommunityForumComponentButton">
                    <FaTrash className="adminCommunityForumComponentButtonIcon" />
                    <div className="adminCommunityForumComponentButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a> 
            </div>  

            <div className="adminCommunityForumComponentFrameWrapper">
              <a className="adminCommunityForumComponentRectangleParent">
                <img
                  className="adminCommunityForumComponentFrameChild"
                  alt=""
                  src={RiceVector}
                />
                <div className="adminCommunityForumComponentFrameGroup">
                  <div className="adminCommunityForumComponentFrameContainer">
                    <div className="adminCommunityForumComponentSubText1Wrapper">
                      <b className="adminCommunityForumComponentSubText1">How do you plant Rice efficiently?</b>
                    </div>
                    <div className="adminCommunityForumComponentSubText2Wrapper2">
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User ID:</b> B001
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User Role</b> Buyer
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>Full Name:</b> Jenkins Mesina
                      </div>                           
                    </div>
                  </div>
                  <div className="adminCommunityForumComponentFrameItem" />
                  <div className="adminCommunityForumComponentDetails">                
                  <button className="adminCommunityForumComponentButton">
                    <FaTrash className="adminCommunityForumComponentButtonIcon" />
                    <div className="adminCommunityForumComponentButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a> 
            </div>  

            <div className="adminCommunityForumComponentFrameWrapper">
              <a className="adminCommunityForumComponentRectangleParent">
                <img
                  className="adminCommunityForumComponentFrameChild"
                  alt=""
                  src={SquashVector}
                />
                <div className="adminCommunityForumComponentFrameGroup">
                  <div className="adminCommunityForumComponentFrameContainer">
                    <div className="adminCommunityForumComponentSubText1Wrapper">
                      <b className="adminCommunityForumComponentSubText1">Can Squash survive summer?</b>
                    </div>
                    <div className="adminCommunityForumComponentSubText2Wrapper2">
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User ID:</b> B002
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User Role</b> Buyer
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>Full Name:</b> Arriane Clarisse Gatpo
                      </div>                                    
                    </div>
                  </div>
                  <div className="adminCommunityForumComponentFrameItem" />
                  <div className="adminCommunityForumComponentDetails">                
                  <button className="adminCommunityForumComponentButton">
                    <FaTrash className="adminCommunityForumComponentButtonIcon" />
                    <div className="adminCommunityForumComponentButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a> 
            </div>  

            <div className="adminCommunityForumComponentFrameWrapper">
              <a className="adminCommunityForumComponentRectangleParent">
                <img
                  className="adminCommunityForumComponentFrameChild"
                  alt=""
                  src={SiliVector}
                />
                <div className="adminCommunityForumComponentFrameGroup">
                  <div className="adminCommunityForumComponentFrameContainer">
                    <div className="adminCommunityForumComponentSubText1Wrapper">
                      <b className="adminCommunityForumComponentSubText1">What are alternatives for sili?</b>
                    </div>
                    <div className="adminCommunityForumComponentSubText2Wrapper2">
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User ID:</b> F003
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User Role</b> Farmer
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>Full Name:</b> Daniella Tungol
                      </div>                                      
                    </div>
                  </div>
                  <div className="adminCommunityForumComponentFrameItem" />
                  <div className="adminCommunityForumComponentDetails">                
                  <button className="adminCommunityForumComponentButton">
                    <FaTrash className="adminCommunityForumComponentButtonIcon" />
                    <div className="adminCommunityForumComponentButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a> 
            </div>  

            
            <div className="adminCommunityForumComponentFrameWrapper">
              <a className="adminCommunityForumComponentRectangleParent">
                <img
                  className="adminCommunityForumComponentFrameChild"
                  alt=""
                  src={TomatoVector}
                />
                <div className="adminCommunityForumComponentFrameGroup">
                  <div className="adminCommunityForumComponentFrameContainer">
                    <div className="adminCommunityForumComponentSubText1Wrapper">
                      <b className="adminCommunityForumComponentSubText1">Is tomato good source?</b>
                    </div>
                    <div className="adminCommunityForumComponentSubText2Wrapper2">
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User ID:</b> F003
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>User Role</b> Farmer
                      </div>
                      <div className="adminCommunityForumComponentSubText2">
                       <b>Full Name:</b> Daniella Tungol
                      </div>                                      
                    </div>
                  </div>
                  <div className="adminCommunityForumComponentFrameItem" />
                  <div className="adminCommunityForumComponentDetails">                
                  <button className="adminCommunityForumComponentButton">
                    <FaTrash className="adminCommunityForumComponentButtonIcon" />
                    <div className="adminCommunityForumComponentButtonText">Delete</div>
                  </button>
                </div>         
                </div>
              </a> 
            </div>  
            
          
               


            <div className="adminCommunityForumComponentForumNumber">
              <div className="adminCommunityForumComponentForumContainer">
                <div className="adminCommunityForumComponentForumNumberBox">1</div>
              </div>
              <div className="adminCommunityForumComponentForumContainer">
                <div className="adminCommunityForumComponentForumNumberBox">2</div>
              </div>
              <div className="adminCommunityForumComponentForumContainer">
                <div className="adminCommunityForumComponentForumNumberBox">3</div>
              </div>
              <div className="adminCommunityForumComponentForumContainer">
                <div className="adminCommunityForumComponentForumNumberBox">4</div>
              </div>
              <div className="adminCommunityForumComponentForumContainer">
                <div className="adminCommunityForumComponentForumNumberBox">5</div>
              </div>
              <div className="adminCommunityForumComponentForumContainer">
                <div className="adminCommunityForumComponentForumNumberBox">6</div>
              </div>
            </div>
          </div>
          </div> 
        </div>
      </div>
    </div>

  );
};

export default AdminCommunityForumComponent;
