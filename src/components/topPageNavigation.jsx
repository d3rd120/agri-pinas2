import { FaEnvelope, FaBell } from 'react-icons/fa';
import React, { useState } from "react";
import '../css/Components/topPageNavigation.css'

const TopNav = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };
    
    return (
        <>
    <div
      className="farmerDashboardComponentEllipseParent2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <FaEnvelope className="farmerDashboardComponentGroupChild2" />
        <FaBell className="farmerDashboardComponentGroupInner2" />
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
            Mavic anes message you!
          </div>         
        </div>
      )}
    </div>
        
        </>
    );
};

export default TopNav;