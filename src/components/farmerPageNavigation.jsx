import React from 'react';
import { FaUsers, FaGlobe, FaHome, FaWallet, FaStore } from 'react-icons/fa';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
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
      <NavLink
          className="farmerPageNavigationLink1"
          to="/farmercommunityforum"
          activeClassName="active"
        >
          <div className="farmerPageNavigationLinks">Community</div>
          <FaUsers className="farmerPageNavigationLinksIcon" />
        </NavLink>

        <NavLink
          className="farmerPageNavigationLink2"
          to="/farmercroptracker"
          activeClassName="active"
        >
          <div className="farmerPageNavigationLinks">Crop Tracker</div>
          <FaGlobe className="farmerPageNavigationLinksIcon" />
        </NavLink>

        <NavLink
          className="farmerPageNavigationLink3"
          to="/farmerdashboard"
          activeClassName="active"
        >
          <div className="farmerPageNavigationLinks">Dashboard</div>
          <FaHome className="farmerPageNavigationLinksIcon" />
        </NavLink>

        <NavLink
          className="farmerPageNavigationLink4"
          to="/farmermarketplace"
          activeClassName="active"
        >
          <div className="farmerPageNavigationLinks">Marketplace</div>
          <FaWallet className="farmerPageNavigationLinksIcon" />
        </NavLink>
        <NavLink
            className="farmerPageNavigationLink5"
            to="/farmertransactions"
            activeClassName="active"
          >
            <div className="farmerPageNavigationLinks">Transactions</div>
            <FaStore className="farmerPageNavigationLinksIcon" />
      </NavLink>
      </div>
      <div className="farmerPageNavigationProfileParent">
          <div className="farmerPageNavigationProfile">
            <FaUserCircle />
          </div>       
        </div>
    </div>
  );
};

export default FarmerNavigation;
