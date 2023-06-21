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
                          Corn is rich in vitamin C, an antioxidant that helps protect your cells from damage and wards off diseases like cancer....
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
                          Okra is rich in vitamins A and C, as well as antioxidants that help reduce the risk of serious health conditions like cancer....
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
                          Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides, and reduce cholesterol levels....
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
                          Watermelon is rich in an amino acid called citrulline that may help move blood through your body and can lower your blood pressure....
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
                          Pechay has vitamin C and can help improve the functioning of the immune system. Vitamin C is also an important part of...
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
                          Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides, and reduce cholesterol levels....
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
                          Eggplant has antioxidants like vitamins A and C, which help protect your cells against damage....
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
                          Tomatoes are low in calories and provide important nutrients like vitamin C....
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
                          Siling labuyo has been considered a medicinal herbal plant used to treat arthritis, rheumatism....
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
                          Squash is rich in minerals, including calcium. Calcium helps build and maintain healthy bones and teeth..
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
                          The benefits of calamansi juice go beyond a refreshing twist on lemonade. Drinking this tangy...
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
                          Sitaw or string beans are a good source of calcium and phosphorous for strong bones and...
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
