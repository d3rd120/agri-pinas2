import "../css/Components/farmerDashboardComponent.css";
import FarmerNavigation from '../components/farmerPageNavigation';

import { useCallback } from "react";


const FarmerDashboard = () => {
  return (
    <div className="farmerdashboard">
      <FarmerNavigation />      
      <div className="main-panel">
        <div className="top-section">
          <div className="welcome-to-dashboard">
            <b className="welcome-back-farmer-container">
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">Welcome back, farmer</p>
            </b>
          </div>
        </div>
        <div className="middle-section">
          <div className="overview">
            <div className="monthly-sellers-performance">
              Monthly Seller’s Performance
            </div>
            <div className="bitcoin-card">
              <div className="frame-parent">
                <img className="frame-child" alt="" src="/frame-2221.svg" />
                <div className="available-balance-in">
                  Available balance in USD
                </div>
                <div className="div">134,510.15</div>
                <div className="frame-group">
                  <div className="transactions-group">
                    <div className="wallets">Transactions</div>
                    <div className="div1">34,405</div>
                  </div>
                  <div className="wallets-parent">
                    <div className="wallets">Wallets</div>
                    <div className="div1">23</div>
                  </div>
                </div>
                <div className="available-balance-in">
                  Last activity at 21 May, 2021
                </div>
              </div>
              <img
                className="bitcoin-card-child"
                alt=""
                src="/frame-2221.svg"
              />
            </div>
            <div className="wallet-section">
              <div className="nio-wallet">
                <div className="wholesale">Wholesale</div>
                <div className="wrapper">
                  <div className="div3">4.434953</div>
                </div>
                <div className="bitcoin-icon">
                  <div className="bitcoin-icon-child" />
                </div>
              </div>
              <div className="nio-wallet">
                <div className="wholesale">Retail</div>
                <div className="wrapper">
                  <div className="div3">4.434953</div>
                </div>
                <div className="bitcoin-icon">
                  <div className="bitcoin-icon-item" />
                </div>
              </div>
              <div className="nio-wallet">
                <div className="wholesale">Revenue</div>
                <div className="wrapper">
                  <div className="div3">4.434953</div>
                </div>
                <div className="bitcoin-icon">
                  <div className="bitcoin-icon-inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
