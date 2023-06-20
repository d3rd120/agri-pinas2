import React, { useState } from 'react';
import "../css/BuyerPage/buyerTransaction.css";
import BuyerNavigation from '../components/buyerNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import TomatoVector from '../img/tomatoVector.png';
import ProfileVector1 from '../img/profileVector1.png';
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IconButton } from '@material-ui/core';
import Card from 'react-bootstrap/Card';
import BuyerTopNav from '../components/buyerTopNav';

const PurchaseStatus = {
  TO_RECEIVE: 'To Receive',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};

const BuyerTransactions = () => {
  const [currentStatus, setCurrentStatus] = useState(PurchaseStatus.TO_RECEIVE);

  const handleStatusChange = (status) => {
    setCurrentStatus(status);
  };

  return (
    <div className="buyerMarketplaceComponent">
      <BuyerNavigation />
      <div className="farmerMarketplaceComponentMainPanel">
        <BuyerTopNav />
        <div className="buyerMarketplaceComponentTopSection">
          <div className="buyerMarketplaceComponentMainText">
            <b className="buyerMarketplaceComponentSubText">
              <p className="buyerMarketplaceComponentBlankLine">&nbsp;</p>
              <p className="buyerMarketplaceComponentBlankLine">&nbsp;</p>
              <p className="buyerMarketplaceComponentBlankLine">Transactions</p>
            </b>
          </div>
        </div>
      </div>

      <div className="purchase-container">
        <div className="status-container">
          <button
            className={currentStatus === PurchaseStatus.TO_RECEIVE ? 'active' : ''}
            onClick={() => handleStatusChange(PurchaseStatus.TO_RECEIVE)}
          >
            To Receive
          </button>
          <button
            className={currentStatus === PurchaseStatus.COMPLETED ? 'active' : ''}
            onClick={() => handleStatusChange(PurchaseStatus.COMPLETED)}
          >
            Completed
          </button>
          <button
            className={currentStatus === PurchaseStatus.CANCELLED ? 'active' : ''}
            onClick={() => handleStatusChange(PurchaseStatus.CANCELLED)}
          >
            Cancelled
          </button>
        </div>
        <div className="purchase-details">
          <h2>Purchase Details</h2>
          <p>Status: {currentStatus}</p>
          <Card className="item-card">
            <Card.Img src={OnionVector} alt="Onion" className="item-image" />
            <Card.Body>
              <Card.Title>Onion</Card.Title>
              <Card.Text>Price: $1.99</Card.Text>
              <Card.Text>Quantity: 3</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuyerTransactions;
