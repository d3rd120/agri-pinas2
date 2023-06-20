import { FaEnvelope, FaBell, FaUser, FaSearch } from 'react-icons/fa';
import React, { useState } from "react";
import '../css/BuyerPage/buyerTopNav.css';

const BuyerTopNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logged out');
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
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
          <FaBell className="buyerComponentGroupInner2" />
          <FaEnvelope className="buyerComponentGroupChild2" />
          <FaUser className="buyerComponentGroupChild3" />
        </div>

        {isHovered && (
          <div className="dropdownMenu">
            <div
              className={`dropdownOption ${
                selectedOption === "farmer" ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect("farmer")}
            >
              Arrianne Gatpo Message you!
            </div>
            <div
              className={`dropdownOption ${
                selectedOption === "buyer" ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect("buyer")}
            >
              Mavic Anes Message you!
            </div>
          </div>
        )}
      </div>

   
    </div>
  );
};

export default BuyerTopNav;
