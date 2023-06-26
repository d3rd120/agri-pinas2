import "../css/Components/adminMarketplaceComponent.css";
import AdminNavigation from '../components/adminPageNavigation';
import RiceVector from '../img/riceCardImage.png';
import CornVector from '../img/cornVector.png';
import OnionVector from '../img/onionVector.png';
import SiliVector from '../img/sili.png';
import SquashVector from '../img/squash.png';
import { FaTrash, FaStore, FaEdit } from 'react-icons/fa';

const AdminMarketplaceComponent = () => {
  return (
    <div className="adminMarketplaceComponent">
      <AdminNavigation />
      <div className="adminMarketplaceComponentMainPanel">   
        <div className="adminMarketplaceComponentTopSection">
          <div className="adminMarketplaceComponentMainText">
            <b className="adminMarketplaceComponentMainTextWrapper">       
              <p className="adminMarketplaceComponentBlankLine">&nbsp;</p>
              <p className="adminMarketplaceComponentBlankLine">Marketplace</p>
            </b>
          </div>
        </div>    
    
        
        <div className="adminMarketplaceComponentCard">
          <div className="adminMarketplaceComponentSubTitle"><FaStore /> Marketplace Management
          </div>
          <br></br>
          <div className="adminMarketplaceComponentShow">Show:   
            <select className="adminMarketplaceComponentRowSelect" onchange="updateRows(this.value)">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <input 
            className="adminMarketplaceComponentRowSelect"
            type = "text"
            placeholder = "Search">                    
            </input>
          </div> 
          <br></br>     
    
          <div className="adminMarketplaceComponentMiddleSection">
            <div className="adminMarketplaceComponentFrameParent">


            

              <div className="adminMarketplaceComponentFrameWrapper">
                <a className="adminMarketplaceComponentRectangleParent">
                  <img
                    className="adminMarketplaceComponentFrameChild"
                    alt=""
                    src={OnionVector}
                  />
                  <div className="adminMarketplaceComponentFrameGroup">
                    <div className="adminMarketplaceComponentFrameContainer">
                      <div className="adminMarketplaceComponentSubText1Wrapper">
                        <b className="adminMarketplaceComponentSubText1">Onions</b>
                      </div>
                      <div className="adminMarketplaceComponentSubText2Wrapper2">                        
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Category:</b> Vegetable
                        </div> 
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Packaging:</b> Sack
                        </div>                        
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Price:</b> Php 1,000
                        </div>    
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Kilogram per unit:</b> 5 kgs
                        </div>    
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Description:</b>  An onion is a round vegetable with a brown skin that grows underground. It has many white layers on its inside which have a strong.
                        </div>    
                      </div>
                    </div>
                    <div className="adminMarketplaceComponentFrameItem" />
                    <div className="adminMarketplaceComponentDetails">      
                    <button className="adminMarketplaceComponentButton">
                        <FaEdit className="adminMarketplaceComponentButtonIcon" />
                        <div className="adminMarketplaceComponentButtonText">Update</div>
                      </button>          
                      <button className="adminMarketplaceComponentButton">
                        <FaTrash className="adminMarketplaceComponentButtonIcon" />
                        <div className="adminMarketplaceComponentButtonText">Delete</div>
                      </button>
                    </div>         
                  </div>
                </a> 

                <a className="adminMarketplaceComponentRectangleParent">
                  <img
                    className="adminMarketplaceComponentFrameChild"
                    alt=""
                    src={SiliVector}
                  />
                  <div className="adminMarketplaceComponentFrameGroup">
                    <div className="adminMarketplaceComponentFrameContainer">
                      <div className="adminMarketplaceComponentSubText1Wrapper">
                        <b className="adminMarketplaceComponentSubText1">Siling Labuyo</b>
                      </div>
                      <div className="adminMarketplaceComponentSubText2Wrapper2">                        
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Category:</b> Fruit
                        </div> 
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Packaging:</b> Sack
                        </div>                        
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Price:</b> Php 6,000
                        </div>    
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Kilogram per unit:</b> 70 kgs
                        </div>    
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Description:</b>  Siling labuyo, also known as bird's eye chili or Thai chili, is a small, fiery chili pepper commonly found in Southeast Asian cuisine.
                        </div>    
                      </div>
                    </div>
                    <div className="adminMarketplaceComponentFrameItem" />
                    <div className="adminMarketplaceComponentDetails">   
                    <button className="adminMarketplaceComponentButton">
                        <FaEdit className="adminMarketplaceComponentButtonIcon" />
                        <div className="adminMarketplaceComponentButtonText">Update</div>
                      </button>             
                      <button className="adminMarketplaceComponentButton">
                        <FaTrash className="adminMarketplaceComponentButtonIcon" />
                        <div className="adminMarketplaceComponentButtonText">Delete</div>
                      </button>
                    </div>         
                  </div>
                </a> 


              </div>  


            

              <div className="adminMarketplaceComponentFrameWrapper">
                <a className="adminMarketplaceComponentRectangleParent">
                  <img
                    className="adminMarketplaceComponentFrameChild"
                    alt=""
                    src={SquashVector}
                  />
                  <div className="adminMarketplaceComponentFrameGroup">
                    <div className="adminMarketplaceComponentFrameContainer">
                      <div className="adminMarketplaceComponentSubText1Wrapper">
                        <b className="adminMarketplaceComponentSubText1">Squash</b>
                      </div>
                      <div className="adminMarketplaceComponentSubText2Wrapper2">                        
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Category:</b> Vegetable
                        </div> 
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Packaging:</b> Sack
                        </div>                        
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Price:</b> Php 2,000
                        </div>    
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Kilogram per unit:</b> 10 kgs
                        </div>    
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Description:</b> Squash refers to a group of edible plants that belong to the gourd family, Cucurbitaceae. 
                          It is characterized by its fleshy fruit, which can come in various shapes, sizes, and colors depending on the specific variety. 
                        </div>    
                      </div>
                    </div>
                    <div className="adminMarketplaceComponentFrameItem" />
                    <div className="adminMarketplaceComponentDetails"> 
                    <button className="adminMarketplaceComponentButton">
                        <FaEdit className="adminMarketplaceComponentButtonIcon" />
                        <div className="adminMarketplaceComponentButtonText">Update</div>
                      </button>               
                      <button className="adminMarketplaceComponentButton">
                        <FaTrash className="adminMarketplaceComponentButtonIcon" />
                        <div className="adminMarketplaceComponentButtonText">Delete</div>
                      </button>
                    </div>         
                  </div>
                </a> 

                <a className="adminMarketplaceComponentRectangleParent">
                  <img
                    className="adminMarketplaceComponentFrameChild"
                    alt=""
                    src={RiceVector}
                  />
                  <div className="adminMarketplaceComponentFrameGroup">
                    <div className="adminMarketplaceComponentFrameContainer">
                      <div className="adminMarketplaceComponentSubText1Wrapper">
                        <b className="adminMarketplaceComponentSubText1">Rice</b>
                      </div>
                      <div className="adminMarketplaceComponentSubText2Wrapper2">                        
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Category:</b> Vegetable
                        </div> 
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Packaging:</b> Sack
                        </div>                        
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Price:</b> Php 9,000
                        </div>    
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Kilogram per unit:</b> 50 kgs
                        </div>    
                        <div className="adminMarketplaceComponentSubText2">
                          <b>Description:</b> Rice is a staple food and a primary dietary component for a significant portion of the world's population. 
                          It is a cereal grain that belongs to the grass family and is the most widely consumed staple crop globally.
                        </div>    
                      </div>
                    </div>
                    <div className="adminMarketplaceComponentFrameItem" />
                    <div className="adminMarketplaceComponentDetails">  
                    <button className="adminMarketplaceComponentButton">
                        <FaEdit className="adminMarketplaceComponentButtonIcon" />
                        <div className="adminMarketplaceComponentButtonText">Update</div>
                      </button>              
                      <button className="adminMarketplaceComponentButton">
                        <FaTrash className="adminMarketplaceComponentButtonIcon" />
                        <div className="adminMarketplaceComponentButtonText">Delete</div>
                      </button>
                    </div>         
                  </div>
                </a> 
                
              </div> 





          
              <div className="adminMarketplaceComponentForumNumber">
                <div className="adminMarketplaceComponentForumContainer">
                  <div className="adminMarketplaceComponentForumNumberBox">1</div>
                </div>
                <div className="adminMarketplaceComponentForumContainer">
                  <div className="adminMarketplaceComponentForumNumberBox">2</div>
                </div>
                <div className="adminMarketplaceComponentForumContainer">
                  <div className="adminMarketplaceComponentForumNumberBox">3</div>
                </div>
                <div className="adminMarketplaceComponentForumContainer">
                  <div className="adminMarketplaceComponentForumNumberBox">4</div>
                </div>
                <div className="adminMarketplaceComponentForumContainer">
                  <div className="adminMarketplaceComponentForumNumberBox">5</div>
                </div>
                <div className="adminMarketplaceComponentForumContainer">
                  <div className="adminMarketplaceComponentForumNumberBox">6</div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default AdminMarketplaceComponent;
