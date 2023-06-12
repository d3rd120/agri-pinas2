import React from 'react';
import "../../css/Buyer Page/buynow.css";
import { RiChat1Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import CornVector from '../../img/farmerMarkeplaceVector1.png';
import OnionVector from '../../img/farmerMarkeplaceVector2.png';
import Homenav from '../../components/buyerNavigation';
import { IconButton } from '@material-ui/core';
import { RiDeleteBinLine } from 'react-icons/ri';

const BuyNow = () => {
  return (
    <>
      <Homenav />
      <br></br>
    
      <div className="shoppingcartPageLayout">
  <div className="ShoppingcartCard">
    <div className="shoppingDetails">
    <div className="orderBuynow">
  <Link to="/buyermarketplace" className="backButton">&#8592;</Link>
  ORDER
</div>

    </div>
  </div>
</div>

<div className="shoppingPageLayout">
<div className="ShoppingCard1">
  <div className="shoppingImage">
    <input type="checkbox" className="shoppingCheckbox" />
    <div>
        <IconButton className="deleteButton" aria-label="Delete">
          <RiDeleteBinLine />
        </IconButton>
      </div>
  </div>
  <div className="shoppingDetails">
  <div className="shoppingDetailsRow">
  <table className="table">
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
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
        <th>Quantity</th>
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

     
<div className="shoppingPageLayout">
  <div className="ShoppingCard">
  <div className="shoppingImage">
          <div className="shoppingImageTitle">
        <span>Corn</span>
      </div>
      <div>
        <input type="checkbox" className="shoppingCheckbox" />
      </div>
      <div>
        <IconButton className="deleteButton" aria-label="Delete">
          <RiDeleteBinLine />
        </IconButton>
      </div>
      <img src={CornVector} alt="Corn" />
    </div>
    <div className="shoppingDetails">
    <div className="shoppingDetailsRow">
  <table className="table"style={{ marginTop: "-50px" }}>
    <thead>
      <tr>
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
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>Php 5,000</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>
      <input type="number" className="quantityInput" />
    </th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>Php 5,000</th>
      </tr>
    </thead>
  </table>
</div>
      <div className="shopProductName"></div>
      <div className="shoppingDetails2" style={{ marginTop: "-30px" }}>
        <b>Farmer:</b>
        <span> Daniel Raymund Ribaya</span>
      </div>
      <div className="shoppingDetails2">
        <b>Category: </b>
        <span>Vegetable</span>
      </div>
      <div className="shoppingDetails2">
        <b>Description:</b>
        <span>A red hound vegetable with good storage quality</span>
      </div>
      <div className="shoppingDetails2">
        <b>Packaging: </b>
        <span>Sack</span>
      </div>
      <div className="shoppingDetails2">
        <b>Kilogram per unit: </b>
        <span>50kgs</span>
      </div>
      <div className="shoppingActions"></div>
    </div>
  </div>
</div>


<div className="shoppingPageLayout">
<div className="ShoppingCard1">

<Link to="/checkout" className="ordercheckoutButton2" style={{ textDecoration: 'none', color: 'white' }}>
         CHECKOUT
       </Link>
        
  
</div>
</div>


    </>
  );
};

export default BuyNow;