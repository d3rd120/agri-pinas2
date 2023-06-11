import '../css/Components/farmerMarketplaceComponent.css';
import FarmerNavigation from '../components/farmerPageNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import ProfileVector1 from '../img/profileVector1.png';
import ProfileVector2 from '../img/profileVector2.png';

const FarmerMarketplace = () => {
  return (
    <div className="farmerMarketplaceComponent">
      <FarmerNavigation />
      <div className="farmerMarketplaceComponentMainPanel">
        <div className="farmerMarketplaceComponentTopSection">
          <div className="farmerMarketplaceComponentMainText">
            <b className="farmerMarketplaceComponentSubText">
              <p className="farmerMarketplaceComponentBlankLine">&nbsp;</p>
              <p className="farmerMarketplaceComponentBlankLine">&nbsp;</p>
              <p className="farmerMarketplaceComponentBlankLine">Marketplace</p>
            </b>
          </div>
        </div>
        <div className="farmerMarketplaceComponentMiddleSection">
          <div className="farmerMarketplaceComponentFrameParent">
            <div className="farmerMarketplaceComponentFrameWrapper">
              <a className="farmerMarketplaceComponentRectangleParent">
                <img
                  className="farmerMarketplaceComponentFrameChild"
                  alt=""
                  src={CornVector}
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
                            A red round vegetable with a good storage quality
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
              </a>              
              <a className="farmerMarketplaceComponentRectangleParent">
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
                            A red round vegetable with a good storage quality
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="farmerMarketplaceComponentFrameItem" />
                  <div className="farmerMarketplaceComponentAuthor">
                    <img className="farmerMarketplaceComponentAvatarIcon" alt="" src={ProfileVector1} />
                    <div className="farmerMarketplaceComponentAuthorText">
                      <div className="farmerMarketplaceComponentAuthorName">Jenkins Mesina</div>
                      <div className="farmerMarketplaceComponentSubName">Farmer</div>
                    </div>
                  </div>
                </div>
              </a>     
              
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
