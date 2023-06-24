import { FaEnvelope, FaBell, FaUser, FaSearch } from 'react-icons/fa';
import React, { useState } from "react";
import '../css/Components/farmerTopNav.css';
import profile1 from '../img/profileVector1.png';
import profile2 from '../img/profileVector2.png';
import { NavLink, Link } from 'react-router-dom';

const FarmerTopNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBellClick = () => {
    setShowNotifications(prevState => !prevState);
  };

  const handleEnvelopeClick = () => {
    setShowMessages(prevState => !prevState);
  };

  return (
    <div className="farmerTopNavContainer">
      <div className="farmersearchBar" style={{ width: '300px' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          style={{ width: '100%' }}
        />
        <FaSearch className="farmersearchIcon" />
      </div>

      <div
        className="farmerComponentEllipseParent2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="farmericonGroup">
          <FaEnvelope
            className={`farmerComponentGroupChild2${showMessages ? ' active' : ''}`}
            onClick={handleEnvelopeClick}
          />
          <NavLink to="/farmerprofile">
            <FaUser className="farmerComponentGroupChild3" />
          </NavLink>
        </div>
        <FaBell
          className={`farmerComponentGroupInner2${showNotifications ? ' active' : ''}`}
          onClick={handleBellClick}
        />
      </div>

      {showNotifications && (
  <div className="farmernotificationsModal">
    <h2>Notifications</h2>
    <ul className="farmernotificationList">
      <li className="farmernotificationItem">
        <span className="farmernotificationMessage">You have a new message.</span>
        <span className="farmernotificationTime">2 hours ago</span>
      </li>     
      <li className="farmernotificationItem">
        <span className="farmernotificationMessage">New deals are available.</span>
        <span className="farmernotificationTime">3 days ago</span>
      </li>
      <li className="farmernotificationItem">
        <span className="farmernotificationMessage">Your product has been cancelled.</span>
        <span className="farmernotificationTime">1 hour ago</span>
      </li>
    </ul>
  </div>
)}
{showMessages && (
  <div className="farmernotificationsModal">
    <h2>Messages</h2>
    <ul className="farmernotificationList">
      <li className="farmernotificationItem">
        <div className="farmernotificationProfile">
          <img src={profile1} className="farmerprofileImage" />
          <span className="farmernotificationSender">Yagerobi Doria</span>
        </div>
        <div className="farmernotificationContent">
          <span className="farmernotificationMessage">You have a new message.</span>
          <span className="farmernotificationTime">2h ago</span>
        </div>
      </li>
      <li className="farmernotificationItem">
        <div className="farmernotificationProfile">
          <img src={profile2} alt="Profile" className="farmerprofileImage" />
          <span className="farmernotificationSender">Daniella Tungol</span>
        </div>
        <div className="farmernotificationContent">
          <span className="farmernotificationMessage">Your product has been shipped.</span>
          <span className="farmernotificationTime">1d ago</span>
        </div>
      </li>    
    </ul>
  </div>
)}

    </div>
  );
};

export default FarmerTopNav;
