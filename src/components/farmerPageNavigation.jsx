import React from 'react';
import { FaUsers, FaGlobe, FaHome, FaWallet, FaStore } from 'react-icons/fa';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import '../css/Components/farmerPageNavigation.css';

import Logo from '../img/agriPinasLogo.png';

const FarmerNavigation = () => {
  return (
    <div className="farmerPageNavigation">
      <div className="farmerPageNavigationLogoParent">
        <img className="farmerPageNavigationLogoIcon" alt="" src={Logo} />
        <div className="farmerPageNavigationMainText">AgriPinas</div>
      </div>
      <div className="farmerPageNavigationGroupParent">
        <Link className="farmerPageNavigationLink1" to = '/farmercommunityforum'>
          <div className="farmerPageNavigationLinks">Community</div>
          <FaUsers className="farmerPageNavigationLinksIcon" />
        </Link>
        <Link className="farmerPageNavigationLink2" to = '/farmercroptracker'>
          <div className="farmerPageNavigationLinks">Crop Tracker</div>
          <FaGlobe className="farmerPageNavigationLinksIcon" />
        </Link>
        <Link className="farmerPageNavigationLink3"  to = '/farmerdashboard'>
          <div className="farmerPageNavigationLinks">Dashboard</div>
          <FaHome className="farmerPageNavigationLinksIcon" />
        </Link>
        <Link className="farmerPageNavigationLink4"  to = '/farmermarketplace'>
          <div className="farmerPageNavigationLinks">Marketplace</div>
          <FaWallet className="farmerPageNavigationLinksIcon" />
        </Link>
        <Link className="farmerPageNavigationLink5"  to = '/farmertransactions'>
          <div className="farmerPageNavigationLinks">Transactions</div>
          <FaStore className="farmerPageNavigationLinksIcon" />
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
