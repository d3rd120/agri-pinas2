import React from 'react';
import "../../css/Buyer Page/checkout.css";
import { RiChat1Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import CornVector from '../../img/farmerMarkeplaceVector1.png';
import OnionVector from '../../img/farmerMarkeplaceVector2.png';
import Homenav from '../../components/buyerNavigation';

const Checkout = () => {
  return (
    <>
      <Homenav />
      <br></br>
    
      <div className="shoppingcartPageLayout">
  <div className="ShoppingcartCard">
    <div className="shoppingDetails">
    <div className="orderBuynow">
  <Link to="/buynow" className="backButton">&#8592;</Link>
  CHECKOUT
</div>
    </div>
  </div>
</div>
<div className="shoppingPageLayout">
<div className="card1">
  <div className="DeliveryAddressRow">
    <div className="DeliveryAddressTitle">
      <span>&#x1F4CD;</span> Delivery Address
    </div>
    <div className="DeliveryAddressButtons">
     <span className="outlined-text">Default</span>
      <button className="filled-button">Change</button>
    </div>
  </div>
  <div className="DeliveryAddress">
    <div className="DeliveryAddressItem">
      <b> Mav Añes</b>
    </div>
    <div className="DeliveryAddressItem">
      <b>09675046713</b>
    </div>
    <div className="DeliveryAddressItem">Tomas Morato, Quezon City
    </div>
  </div>
</div>



</div>

<div className="shoppingPageLayout">
  <div className="card">
    <div className="CheckoutPage">
      <div className="CheckoutItem">
        <div className="CheckoutItemImage">
          <img src={CornVector} alt="Corn" />
        </div>
        <div className="CheckoutItemDetails">
          <div className="CheckoutItemName">Corn</div>
          <div className="CheckoutItemInfo">
            <div className="CheckoutItemInfoItem">
              <b>Farmer: </b>
              <span>Daniel Raymund Ribaya</span>
            </div>
            <div className="CheckoutItemInfoItem">
              <b>Unit Price: </b>
              <span>Php 5,000</span>
            </div>
            <div className="CheckoutItemInfoItem">
              <b>Quantity: </b>
              <span>1</span>
            </div>
            <div className="CheckoutItemInfoItem">
              <b>Total Price: </b>
              <span>Php 5,000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="CheckoutSummary">
        <div className="CheckoutSummaryTitle">Order Summary</div>
        <div className="CheckoutSummaryItem">
          <span>Subtotal:</span>
          <span>Php 5,000</span>
        </div>
        <div className="CheckoutSummaryItem">
          <span>Shipping Fee:</span>
          <span>Php 0</span>
        </div>
        <div className="CheckoutSummaryItem CheckoutSummaryTotal">
          <span>Total: </span>
          <span> Php 5,000</span>
        </div>
        <Link to="/manageorder" className="placeordercheckoutButton2" style={{ textDecoration: 'none', color: 'white' }}>
        PLACE ORDER
        </Link>
      </div>
    </div>
  </div>
</div>



    </>
  );
};

export default Checkout;