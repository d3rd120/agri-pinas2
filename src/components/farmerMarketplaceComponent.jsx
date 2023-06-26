import React, { useState } from 'react';
import '../css/Components/farmerMarketplaceComponent.css';
import FarmerNavigation from '../components/farmerPageNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import SiliVector from '../img/sili.png';
import SquashVector from '../img/squash.png';
import SitawVector from '../img/sitaw.png';
import ProfileVector2 from '../img/profileVector2.png';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaTimes } from 'react-icons/fa';
import FarmerMarketplaceAddProductComponent from '../components/farmerMarketplaceComponentAddProduct';
import FarmerTopNav from '../components/farmerTopNav';


const FarmerMarketplace = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <div className="farmerMarketplaceComponent">
      <FarmerNavigation />
      <div className="farmerMarketplaceComponentMainPanel">
        <FarmerTopNav />
        <div className="farmerMarketplaceComponentTopSection">
          <div className="farmerMarketplaceComponentMainText">
            <b className="farmerMarketplaceComponentSubText">      
              <p className="farmerMarketplaceComponentBlankLine">Marketplace</p>
            </b>
          </div>
        </div>
            

        <button className="farmerMarketplaceComponentButton" onClick={openPopup}>
          <FaPlus className="farmerMarketplaceComponentButtonIcon" />
          <div className="farmerMarketplaceComponentButtonText">Add a Product</div>
        </button>

        {showPopup && (
          <div id="farmerMarketplaceComponentPopupWindow" className="farmerMarketplaceComponentPopupWindow">
            <div className="farmerMarketplaceComponentPopupContent">      
            <span className="farmerMarketplaceComponentCloseButton" onClick={closePopup}><FaTimes/></span>          
              <FarmerMarketplaceAddProductComponent/>                     
            </div>
          </div>
        )}


        <div className="farmerMarketplaceComponentMiddleSection">
          <div className="farmerMarketplaceComponentFrameParent">


            <div className="farmerMarketplaceComponentFrameWrapper">
              <NavLink className="farmerMarketplaceComponentRectangleParent" to = '/farmermarketplacepost'   activeClassName="active">
                <img
                  className="farmerMarketplaceComponentFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="farmerMarketplaceComponentFrameGroup">
                  <div className="farmerMarketplaceComponentFrameContainer">
                    <div className="farmerMarketplaceComponentCardWrapper">
                      <b className="farmerMarketplaceComponentCardText">Corn</b>
                    </div>
                    <div className="farmerMarketplaceComponentCategoryWrapper">
                      <div className="farmerMarketplaceComponentCategoryContainer">
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Fruit</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 10,000</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="farmerMarketplaceComponentCategory">80 kgs</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                          I am selling this crop as wholesale and retail, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="farmerMarketplaceComponentFrameItem" />
                  <div className="farmerMarketplaceComponentAuthor">
                    <img className="farmerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="farmerMarketplaceComponentAuthorText">
                      <div className="farmerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="farmerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </NavLink>   

              <NavLink className="farmerMarketplaceComponentRectangleParent" to = '/farmermarketplacepost'>
                <img
                  className="farmerMarketplaceComponentFrameChild"
                  alt=""
                  src={OnionVector}
                />
                <div className="farmerMarketplaceComponentFrameGroup">
                  <div className="farmerMarketplaceComponentFrameContainer">
                    <div className="farmerMarketplaceComponentCardWrapper">
                      <b className="farmerMarketplaceComponentCardText">Onions</b>
                    </div>
                    <div className="farmerMarketplaceComponentCategoryWrapper">
                      <div className="farmerMarketplaceComponentCategoryContainer">
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Vegetable</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 3,000</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="farmerMarketplaceComponentCategory">50 kgs</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                          I am selling this crop as wholesale and retail, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="farmerMarketplaceComponentFrameItem" />
                  <div className="farmerMarketplaceComponentAuthor">
                    <img className="farmerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="farmerMarketplaceComponentAuthorText">
                      <div className="farmerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="farmerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </NavLink>     
              

              <NavLink className="farmerMarketplaceComponentRectangleParent" to = '/farmermarketplacepost'>
                <img
                  className="farmerMarketplaceComponentFrameChild"
                  alt=""
                  src={RiceVector}
                />
                <div className="farmerMarketplaceComponentFrameGroup">
                  <div className="farmerMarketplaceComponentFrameContainer">
                    <div className="farmerMarketplaceComponentCardWrapper">
                      <b className="farmerMarketplaceComponentCardText">Rice</b>
                    </div>
                    <div className="farmerMarketplaceComponentCategoryWrapper">
                      <div className="farmerMarketplaceComponentCategoryContainer">
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Grain</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 3,000</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="farmerMarketplaceComponentCategory">100 kgs</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                          I am selling this crop as wholesale and retail, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="farmerMarketplaceComponentFrameItem" />
                  <div className="farmerMarketplaceComponentAuthor">
                    <img className="farmerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="farmerMarketplaceComponentAuthorText">
                      <div className="farmerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="farmerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </NavLink>     
            </div>

            
            <div className="farmerMarketplaceComponentFrameWrapper">
              <NavLink className="farmerMarketplaceComponentRectangleParent" to = '/farmermarketplacepost'   activeClassName="active">
                <img
                  className="farmerMarketplaceComponentFrameChild"
                  alt=""
                  src={SitawVector}
                />
                <div className="farmerMarketplaceComponentFrameGroup">
                  <div className="farmerMarketplaceComponentFrameContainer">
                    <div className="farmerMarketplaceComponentCardWrapper">
                      <b className="farmerMarketplaceComponentCardText">Sitaw</b>
                    </div>
                    <div className="farmerMarketplaceComponentCategoryWrapper">
                      <div className="farmerMarketplaceComponentCategoryContainer">
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Vegetable</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 3,000</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="farmerMarketplaceComponentCategory">10 kgs</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                          I am selling this crop as wholesale and retail, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="farmerMarketplaceComponentFrameItem" />
                  <div className="farmerMarketplaceComponentAuthor">
                    <img className="farmerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="farmerMarketplaceComponentAuthorText">
                      <div className="farmerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="farmerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </NavLink>   

              <NavLink className="farmerMarketplaceComponentRectangleParent" to = '/farmermarketplacepost'>
                <img
                  className="farmerMarketplaceComponentFrameChild"
                  alt=""
                  src={SiliVector}
                />
                <div className="farmerMarketplaceComponentFrameGroup">
                  <div className="farmerMarketplaceComponentFrameContainer">
                    <div className="farmerMarketplaceComponentCardWrapper">
                      <b className="farmerMarketplaceComponentCardText">Siling Labuyo</b>
                    </div>
                    <div className="farmerMarketplaceComponentCategoryWrapper">
                      <div className="farmerMarketplaceComponentCategoryContainer">
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Fruit</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 7,000</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="farmerMarketplaceComponentCategory">5 kgs</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                          I am selling this crop as wholesale and retail, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="farmerMarketplaceComponentFrameItem" />
                  <div className="farmerMarketplaceComponentAuthor">
                    <img className="farmerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="farmerMarketplaceComponentAuthorText">
                      <div className="farmerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="farmerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </NavLink>     
              

              <NavLink className="farmerMarketplaceComponentRectangleParent" to = '/farmermarketplacepost'>
                <img
                  className="farmerMarketplaceComponentFrameChild"
                  alt=""
                  src={SquashVector}
                />
                <div className="farmerMarketplaceComponentFrameGroup">
                  <div className="farmerMarketplaceComponentFrameContainer">
                    <div className="farmerMarketplaceComponentCardWrapper">
                      <b className="farmerMarketplaceComponentCardText">Squash</b>
                    </div>
                    <div className="farmerMarketplaceComponentCategoryWrapper">
                      <div className="farmerMarketplaceComponentCategoryContainer">
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Vegetable</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="farmerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 10,000</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="farmerMarketplaceComponentCategory">65 kgs</span>
                        </p>
                        <p className="farmerMarketplaceComponentBlankLine">
                          <b className="farmerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                          I am selling this crop as wholesale and retail, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="farmerMarketplaceComponentFrameItem" />
                  <div className="farmerMarketplaceComponentAuthor">
                    <img className="farmerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="farmerMarketplaceComponentAuthorText">
                      <div className="farmerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="farmerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </NavLink>     
              
            </div>




            
            <div className="farmerMarketplaceComponentCategories">
              <div className="farmerMarketplaceComponentPaginationContainer">
                <div className="farmerMarketplaceComponentPaginationNumber">1</div>
              </div>
              <div className="farmerMarketplaceComponentPaginationContainer">
                <div className="farmerMarketplaceComponentPaginationNumber">2</div>
              </div>
              <div className="farmerMarketplaceComponentPaginationContainer">
                <div className="farmerMarketplaceComponentPaginationNumber">3</div>
              </div>
              <div className="farmerMarketplaceComponentPaginationContainer">
                <div className="farmerMarketplaceComponentPaginationNumber">4</div>
              </div>
              <div className="farmerMarketplaceComponentPaginationContainer">
                <div className="farmerMarketplaceComponentPaginationNumber">5</div>
              </div>
              <div className="farmerMarketplaceComponentPaginationContainer">
                <div className="farmerMarketplaceComponentPaginationNumber">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerMarketplace;
