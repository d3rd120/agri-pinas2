import "../css/BuyerPage/buyermarketplaceComponent.css"
import BuyerNavigation from '../components/buyerNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import ProfileVector2 from '../img/profileVector2.png';
import {Link} from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const BuyerMarketplace = () => {
  return (
    <div className="buyerMarketplaceComponent">
      <BuyerNavigation />
      <div className="buyerMarketplaceComponentMainPanel">
        <div className="buyerMarketplaceComponentTopSection">
          <div className="buyerMarketplaceComponentMainText">
            <b className="buyerMarketplaceComponentSubText">
              <p className="buyerMarketplaceComponentBlankLine">&nbsp;</p>
              <p className="buyerMarketplaceComponentBlankLine">&nbsp;</p>
              <p className="buyerMarketplaceComponentBlankLine">Marketplace</p>
            </b>
          </div>
        </div>
            

        <div className="buyerMarketplaceComponentMiddleSection">
          <div className="buyerMarketplaceComponentFrameParent">
            <div className="buyerMarketplaceComponentFrameWrapper">
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Corn</b>
                    </div>
                    <div className="buyerMarketplaceComponentCategoryWrapper">
                      <div className="buyerMarketplaceComponentCategoryContainer">
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Vegetable</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 3,000</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="buyerMarketplaceComponentCategory">50 kgs</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                            A red round vegetable with a good storage quality......
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Corn</b>
                    </div>
                    <div className="buyerMarketplaceComponentCategoryWrapper">
                      <div className="buyerMarketplaceComponentCategoryContainer">
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Vegetable</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 3,000</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="buyerMarketplaceComponentCategory">50 kgs</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                            A red round vegetable with a good storage quality......
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link>              
                            
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={OnionVector}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Onions</b>
                    </div>
                    <div className="buyerMarketplaceComponentCategoryWrapper">
                      <div className="buyerMarketplaceComponentCategoryContainer">
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Vegetable</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 3,000</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="buyerMarketplaceComponentCategory">50 kgs</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                            A red round vegetable with a good storage quality.....
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link> 
              <div>
                
                </div>    
            </div>
            <div className="buyerMarketplaceComponentFrameParent">
            <div className="buyerMarketplaceComponentFrameWrapper">
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Corn</b>
                    </div>
                    <div className="buyerMarketplaceComponentCategoryWrapper">
                      <div className="buyerMarketplaceComponentCategoryContainer">
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Vegetable</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 3,000</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="buyerMarketplaceComponentCategory">50 kgs</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                            A red round vegetable with a good storage quality......
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={CornVector}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Corn</b>
                    </div>
                    <div className="buyerMarketplaceComponentCategoryWrapper">
                      <div className="buyerMarketplaceComponentCategoryContainer">
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Vegetable</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 3,000</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="buyerMarketplaceComponentCategory">50 kgs</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                            A red round vegetable with a good storage quality......
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link>              
                            
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={OnionVector}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Onions</b>
                    </div>
                    <div className="buyerMarketplaceComponentCategoryWrapper">
                      <div className="buyerMarketplaceComponentCategoryContainer">
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Vegetable</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Sack</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Price: `}</b>
                          <span>Php 3,000</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="buyerMarketplaceComponentCategory">50 kgs</span>
                        </p>
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b className="buyerMarketplaceComponentCategory">{`Description: `}</b>
                          <span>
                            A red round vegetable with a good storage quality.....
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Marievic Anes</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link> 
              <div>
                
                </div>    
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerMarketplace;
