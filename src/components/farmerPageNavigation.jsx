import React from 'react';
import { FaUsers, FaGlobe, FaHome, FaWallet, FaStore } from 'react-icons/fa';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import '../css/Components/farmerPageNavigation1.css';

import Logo from '../img/agriPinasLogo.png';

const FarmerNavigation = () => {
  return (
    <div className="side-bar">
      <div className="agripinaslogo-parent">
        <img className="agripinaslogo-icon" alt="" src={Logo} />
        <div className="agripinas">AgriPinas</div>
      </div>
      <div className="group-parent">
        <Link className="community-parent" to = '/farmercommunityforum'>
          <div className="community">Community</div>
          <FaUsers className="group-child" />
        </Link>
        <Link className="crop-tracker-parent" to = '/farmercroptracker'>
          <div className="community">Crop Tracker</div>
          <FaGlobe className="group-child" />
        </Link>
        <Link className="dashboard-parent"  to = '/farmerdashboard'>
          <div className="community">Dashboard</div>
          <FaHome className="group-child" />
        </Link>
        <Link className="marketplace-parent"  to = '/farmermarketplace'>
          <div className="community">Marketplace</div>
          <FaWallet className="group-child" />
        </Link>
        <Link className="transactions-parent"  to = '/farmertransactions'>
          <div className="community">Transactions</div>
          <FaStore className="group-child" />
        </Link>
      </div>
      <div className="farmerPageNavigationProfileParent">
          <div className="farmerPageNavigationProfile">
            <FaUserCircle />
          </div>
          <div className="farmerPageNavigationGroupItem" />
          <button className="farmerPageNavigationBellParent">
            <div className="farmerPageNavigationBell">
              <FaBell />
            </div>
            <div className="farmerPageNavigationInner" />
          </button>
        </div>
    </div>
  );
};

export default FarmerNavigation;
