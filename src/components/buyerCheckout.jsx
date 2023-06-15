import React, { useState } from 'react';
import "../css/BuyerPage/buynow.css"
import BuyerNavigation from '../components/buyerNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import TomatoVector from '../img/tomatoVector.png';
import ProfileVector1 from '../img/profileVector1.png';
import {Link} from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IconButton } from '@material-ui/core';
import { RiEdit2Line } from 'react-icons/ri';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Checkout  = () => {
  return (
    <div className="buyerMarketplaceComponent">
      <BuyerNavigation />
      <div className="buyerMarketplaceComponentMainPanel">
        <div className="buyerMarketplaceComponentTopSection">
          <div className="buyerMarketplaceComponentMainText">
            <b className="buyerMarketplaceComponentSubText">
              <p className="buyerMarketplaceComponentBlankLine">&nbsp;</p>
              <p className="buyerMarketplaceComponentBlankLine">&nbsp;</p>
            <div className="orderContainer">
  <p className="buyerMarketplaceComponentBlankLine">Checkout</p>
  <Link to="/buynow" className="backButton">&#8592;</Link>
</div>
            </b>
          </div>
        </div>
    
        <div class="courses-container"style={{ marginTop: "-60px" }}>
  <div class="course">
    <div class="course-preview">
    <div className="delivery">
  <LocationOnIcon className="mapIcon" />
  <span className="deliveryText">Delivery Address</span>
</div>


      <table class="table">
        <thead>
        <tr>
        <th className="name" style={{ fontWeight: 'bold' }}>Daniella Marie Tungol</th>

  <th>&nbsp;</th>
  <th  className="name" style={{ fontWeight: 'bold' }}>09675046713</th>
  <th>&nbsp;</th>
  <th>&nbsp;</th>
  <th>&nbsp;</th>
  <th class="address">Tungkong Mangga, San Jose Del Monte City, North Luzon, Bulacan</th>
  <th> 
  <div>
    <IconButton className="editButton" aria-label="Edit">
      <RiEdit2Line />
    </IconButton>
  </div>
</th>
</tr>
        </thead>
      </table>
    </div>
  </div>
</div>
        <div class="courses-container"style={{ marginTop: "-45px" }}>
  <div class="course">
    <div class="course-preview">
      <table class="table">
        <thead>
          <tr>
            <th class="product">Product/s Ordered</th>
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
            <th class="unit-price-header">Unit Price</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Quantity</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th class="total-price-header">Item Subtotal</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</div>

<div class="courses-container" style={{ marginTop: "-50px" }}>
  <div class="course1">
    <div class="course-preview">
      <table class="table">
        <thead>
          <tr>
            <div class="inputContainer">
              <div class="image-container">
                <div className="buyerMarketplaceComponentAuthor">
                  <img className="cartAvatarIcon" alt="" src={ProfileVector1} />
                  <div className="buyerMarketplaceComponentAuthorText">
                    <div className="buyerMarketplaceComponentAuthorName">Jenkins Mesina</div>
                    <div className="buyerMarketplaceComponentSubName">Farmer</div>
                  </div>
                </div>
                <img src={CornVector} alt="Corn" className="img-container" />
              </div>
              
              <div className="cartPostSmallCardsFullDescription">
              <div className="buyerMarketplaceComponentCardWrapper">
                      <b className="cartCardText">Corn</b>
                    </div>
  <div className="cartPostBlankLine">
    <b>{`Category: Packaging:`}</b>
    <span className="cartPostCategory">Vegetable Sack</span>
  </div>
</div>


            </div>
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
          <th class="unit-price-header">₱5,000.00</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th> 
            <th>2</th> 
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th> 
            <th class="total-price-header">₱10,000.00</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</div>


<div class="courses-container" style={{ marginTop: "-20px" }}>
  <div class="course2">
    <div class="course-preview">
    <div class="buttonWrapper">
  <span class="totalText">Merchandise Subtotal:</span>
  <span class="buttonText1" style={{ marginLeft: "30px" }}>₱10,000.00</span>
</div>
<div class="buttonWrapper">
  <span class="totalText">Shipping Total:</span>
  <span class="buttonText1" style={{ marginLeft: "119px" }}>₱40.00</span>
</div>
<div class="buttonWrapper">
  <span class="totalText">Total Payment:</span>
  <span class="buttonText" style={{ marginLeft: "67px" }}>₱10,040.00</span>
  
</div>
<Link to="/checkout" className="ordercheckoutButton3">
    PLACE ORDER
  </Link>


    </div>
  </div>
</div>


	</div>
</div>
      
  );
};

export default Checkout;