import React from 'react';
import { FaUsers, FaGlobe, FaHome, FaWallet, FaStore, FaShoppingBag, FaCartPlus } from 'react-icons/fa';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import {NavLink, Link} from 'react-router-dom';
import '../css/Components/farmerPageNavigation.css';

import Logo from '../img/agriPinasLogo.png';

const BuyerNavigation = () => {
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
          <div className="farmerPageNavigationLinks">Transactions</div>
          <FaWallet className="farmerPageNavigationLinksIcon" />
        </NavLink>

        <NavLink
          className="farmerPageNavigationLink2"
          to="/buyercommunityforum"
          activeClassName="active"
        >
          <div className="farmerPageNavigationLinks">Community</div>
          <FaUsers className="farmerPageNavigationLinksIcon" />
        </NavLink>

        <NavLink
          className="farmerPageNavigationLink3"
          to="/buyermarketplace" 
          activeClassName="active"
        >
          <div className="farmerPageNavigationLinks">Marketplace</div>
          <FaShoppingBag className="farmerPageNavigationLinksIcon" />
        </NavLink>

        <NavLink
          className="farmerPageNavigationLink4"
          to="/shoppingcart"
          activeClassName="active"
        >
          <div className="farmerPageNavigationLinks">Cart</div>
          <FaCartPlus className="farmerPageNavigationLinksIcon" />
        </NavLink>
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

export default BuyerNavigation;
