import React from 'react';
import { FaUsers, FaGlobe, FaHome, FaWallet, FaStore } from 'react-icons/fa';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import '../css/Components/adminPageNavigation.css';

import Logo from '../img/agriPinasLogo.png';

const AdminNavigation = () => {
  return (
    <div className="adminPageNavigation">
      <div className="adminPageNavigationLogoParent">
        <img className="adminPageNavigationLogoIcon" alt="" src={Logo} />
        <div className="adminPageNavigationMainText">AgriPinas</div>
      </div>
      <div className="adminPageNavigationGroupParent">
      <NavLink
          className="adminPageNavigationLink1"
          to="/admincommunityforum"
          activeClassName="active"
        >
          <div className="adminPageNavigationLinks">Community</div>
          <FaUsers className="adminPageNavigationLinksIcon" />
        </NavLink>

        <NavLink
          className="adminPageNavigationLink2"
          to="/farmercommunityforum"
          activeClassName="active"
        >
          <div className="adminPageNavigationLinks">Transactions</div>
          <FaGlobe className="adminPageNavigationLinksIcon" />
        </NavLink>

        <NavLink
          className="adminPageNavigationLink3"
          to="/admindashboard"
          activeClassName="active"
        >
          <div className="adminPageNavigationLinks">Dashboard</div>
          <FaHome className="adminPageNavigationLinksIcon" />
        </NavLink>

        <NavLink
          className="adminPageNavigationLink4"
          to="/farmermarketplace"
          activeClassName="active"
        >
          <div className="adminPageNavigationLinks">Marketplace</div>
          <FaWallet className="adminPageNavigationLinksIcon" />
        </NavLink>
        <NavLink
            className="adminPageNavigationLink5"
            to="/farmertransactions"
            activeClassName="active"
          >
            <div className="adminPageNavigationLinks">Accounts Management</div>
            <FaStore className="adminPageNavigationLinksIcon" />
      </NavLink>
      </div>
      <div className="adminPageNavigationProfileParent">
          <div className="adminPageNavigationProfile">
            <FaUserCircle />
          </div>
          <div className="adminPageNavigationGroupItem" />
          <button className="adminPageNavigationBellParent">
            <div className="adminPageNavigationBell">
              <FaBell />
            </div>
            <div className="adminPageNavigationInner" />
          </button>
        </div>
    </div>
  );
};

export default AdminNavigation;
