import { FaEnvelope, FaBell, FaUser, FaSearch } from 'react-icons/fa';
import React, { useState } from "react";
import '../css/BuyerPage/buyerTopNav.css';
import profile1 from '../img/profileVector1.png';
import profile2 from '../img/profileVector2.png';
import { NavLink, Link } from 'react-router-dom';

const BuyerTopNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: 'Jenkins Mesina',
      senderImage: profile1,
      content: 'Your order has beem shipped',
      timestamp: '2h ago',
    },
    {
      sender: 'Arriane Gatpo',
      senderImage: profile2,
      content: 'You have a new message',
      timestamp: '4h ago',
    },
    {
      sender: 'Romeo London',
      senderImage: profile1,
      content: 'New deals are available',
      timestamp: '8h ago',
    },
  ]);

  const handleDismiss = () => {
    setMessages([]);
  };

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
    <div className="buyerTopNavContainer">
      <div className="searchBar" style={{ width: '300px' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          style={{ width: '100%' }}
        />
        <FaSearch className="searchIcon" />
      </div>

      <div
        className="buyerComponentEllipseParent2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="iconGroup">
          <FaEnvelope
            className={`buyerComponentGroupChild2${showMessages ? ' active' : ''}`}
            onClick={handleEnvelopeClick}
          />
          <NavLink to="/buyerprofile">
            <FaUser className="buyerComponentGroupChild3" />
          </NavLink>
        </div>
        <FaBell
          className={`buyerComponentGroupInner2${showNotifications ? ' active' : ''}`}
          onClick={handleBellClick}
        />
      </div>

      {showNotifications && (
        <div className="notificationsModal">
          <h2>Notifications</h2>
          <ul className="notificationList">
            <li className="notificationItem">
              <span className="notificationMessage">You have a new message.</span>
              <span className="notificationTime">2 hours ago</span>
            </li>
            <li className="notificationItem">
              <span className="notificationMessage">Your order has been shipped.</span>
              <span className="notificationTime">1 day ago</span>
            </li>
            <li className="notificationItem">
              <span className="notificationMessage">New deals are available.</span>
              <span className="notificationTime">3 days ago</span>
            </li>
            <li className="notificationItem">
              <span className="notificationMessage">Your order has been cancelled.</span>
              <span className="notificationTime">4 days ago</span>
            </li>
          </ul>
        </div>
      )}
     {showMessages && (
      <div className="notificationsModal">
      <h2>Messages</h2>
      <ul className="notificationList">
        
      <div className="notification-body">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="message-sender">
              <img src={message.senderImage} alt="Sender" className="sender-image" />
              {message.sender}
            </div>
            
            <span className="message-content">{message.content}</span>
            <span className="message-time">{message.timestamp}</span>
          </div>
          
           ))}
           </div>
        
        
      </ul>
    </div>
      )}

    </div>
  );
};

export default BuyerTopNav;
