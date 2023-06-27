import "../css/BuyerPage/buyermarketplaceComponent.css"
import BuyerNavigation from '../components/buyerNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import tomatoVector from '../img/tomatoVector.png';
import okra from '../img/okra.png';
import pakwan from '../img/pakwan.png';
import pechay from '../img/pechay.png';
import calamansi from '../img/calamansi.png';
import sili from '../img/sili.png';
import sitaw from '../img/sitaw.png';
import squash from '../img/squash.png';
import talong from '../img/talong.png';
import RiceVector from '../img/riceCardImage.png';
import ProfileVector2 from '../img/profileVector2.png';
import ProfileVector1 from '../img/profileVector1.png';
import {Link} from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import BuyerTopNav from '../components/buyerTopNav';

const BuyerMarketplace = () => {
  return (
    <div className="buyerMarketplaceComponent">
      <BuyerNavigation />
      <div className="farmerMarketplaceComponentMainPanel">
        <BuyerTopNav />
        <div className="farmerCommunityForumComponentTopSection">
          <div className="farmerCommunityForumComponentMainText1">
            <b className="farmerCommunityForumComponentMainText2">             
              <p className="farmerCommunityForumComponentBlankLine">&nbsp;</p>
              <p className="farmerCommunityForumComponentBlankLine">Marketplace</p>
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
                          <span className="buyerMarketplaceComponentCategory">Fruit</span>
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
                          I am selling this crop as wholesale, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Daniella Tungol</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={okra}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Okra</b>
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
                          I am selling this crop as retail, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Arriane Gatpo</div>
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
                          I am selling this crop as retail, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector1} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Romeo London</div>
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
                  src={pakwan}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Watermelon</b>
                    </div>
                    <div className="buyerMarketplaceComponentCategoryWrapper">
                      <div className="buyerMarketplaceComponentCategoryContainer">
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Fruit</span>
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
                          I am selling this crop as wholesale, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector1} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Jenkins Mesina</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={pechay}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Pechay</b>
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
                          I am selling this crop as wholesale, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector1} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Ryan Amador</div>
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
                          I am selling this crop as retail, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector1} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Yagerobi Doria</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link> 
              <div>
                
                </div>    
            </div>
            </div>
            <div className="buyerMarketplaceComponentFrameParent">
            <div className="buyerMarketplaceComponentFrameWrapper">
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={talong}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Eggplant</b>
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
                          I am selling this crop as retail, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector1} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Daniel Ribaya</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={tomatoVector}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Tomato</b>
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
                          I am selling this crop as wholesale, if you need to know more...
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
                  src={sili}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Siling Labuyo</b>
                    </div>
                    <div className="buyerMarketplaceComponentCategoryWrapper">
                      <div className="buyerMarketplaceComponentCategoryContainer">
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Fruit</span>
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
                          I am selling this crop as wholesale, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Arriane Gatpo</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link> 
              <div>
                
                </div>    
            </div>
            </div>
            <div className="buyerMarketplaceComponentFrameParent">
            <div className="buyerMarketplaceComponentFrameWrapper">
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={squash}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Squash</b>
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
                          I am selling this crop as retail, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector1} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Romeo London</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={calamansi}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Calamansi</b>
                    </div>
                    <div className="buyerMarketplaceComponentCategoryWrapper">
                      <div className="buyerMarketplaceComponentCategoryContainer">
                        <p className="buyerMarketplaceComponentBlankLine">
                          <b>{`Category: `}</b>
                          <span className="buyerMarketplaceComponentCategory">Fruit</span>
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
                          I am selling this crop as wholesale, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector1} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Jenkins Mesina</div>
                      <div className="buyerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </Link>              
                            
              <Link className="buyerMarketplaceComponentRectangleParent" to = '/buyermarketplacepost'>
                <img
                  className="buyerMarketplaceComponentFrameChild"
                  alt=""
                  src={sitaw}
                />
                <div className="buyerMarketplaceComponentFrameGroup">
                  <div className="buyerMarketplaceComponentFrameContainer">
                    <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="buyerMarketplaceComponentCardText">Sitaw</b>
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
                          I am selling this crop as wholesale, if you need to know more...
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="buyerMarketplaceComponentFrameItem" />
                  <div className="buyerMarketplaceComponentAuthor">
                    <img className="buyerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector2} />
                    <div className="buyerMarketplaceComponentAuthorText">
                      <div className="buyerMarketplaceComponentAuthorName">Arriane Gatpo</div>
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
