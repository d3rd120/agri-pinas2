import "../css/BuyerPage/buynow.css"
import BuyerNavigation from '../components/buyerNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import ProfileVector2 from '../img/profileVector2.png';
import {Link} from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IconButton } from '@material-ui/core';
import Card from 'react-bootstrap/Card';

const ShoppingCart = () => {
  return (
    <div className="buyerMarketplaceComponent">
      <BuyerNavigation />
      <div className="buyerMarketplaceComponentMainPanel">
        <div className="buyerMarketplaceComponentTopSection">
          <div className="buyerMarketplaceComponentMainText">
            <b className="buyerMarketplaceComponentSubText">
              <p className="buyerMarketplaceComponentBlankLine">&nbsp;</p>
              <p className="buyerMarketplaceComponentBlankLine">&nbsp;</p>
              <p className="buyerMarketplaceComponentBlankLine">Shopping Cart</p>
            </b>
          </div>
        </div>
    
        <div class="courses-container"style={{ marginTop: "-70px" }}>
  <div class="course">
    <div class="course-preview">
      <table class="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" class="shoppingCheckbox" />
            </th>
            <th>
            <div>
                <IconButton className="deleteButton" aria-label="Delete">
                  <RiDeleteBinLine />
                </IconButton>
              </div>
            </th>
            <th>Product</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Unit Price</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Quantity</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Total Price</th>
           
          </tr>
        </thead>
      </table>
    </div>
  </div>
</div>

 
<div class="courses-container"style={{ marginTop: "-50px" }}>
  <div class="course">
    <div class="course-preview">
      <table class="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" class="shoppingCheckbox" />
            </th>
            <th>
            <div>
                <IconButton className="deleteButton" aria-label="Delete">
                  <RiDeleteBinLine />
                </IconButton>
              </div>
            </th>
            <th>Product</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Unit Price</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Quantity</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Total Price</th>
           
          </tr>
        </thead>
      </table>
    </div>
  </div>
</div>
	</div>
</div>
      
  );
};

export default ShoppingCart;