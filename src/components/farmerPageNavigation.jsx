import "../css/Components/farmerPageNavigation.css";
import Logo from '../img/agriPinasLogo.png';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import {Link} from 'react-router-dom';


const FarmerNavigation = () => {
  return (
    <div className="farmernavigation">
      <img className="agripinaslogo-icon" alt="" src={Logo} />
      <div className="dashboard-parent">
        <Link className="crop-tracker" to = '/farmerdashboard'>Dashboard</Link>
        <Link className="crop-tracker" to = '/farmermarketplace'>Marketplace</Link>
        <Link className="crop-tracker" to = '/farmercommunityforum'>Community</Link>
        <Link className="crop-tracker" to = '/farmercroptracker'>Crop Tracker</Link>
        <Link className="crop-tracker" to = '/farmertransactions'>Transactions</Link>
      </div>
      <div className="ellipse-parent">
          <div className="group-child">
            <FaUserCircle />
          </div>
          <div className="group-item" />
          <button className="vector-parent">
            <div className="vector-icon">
              <FaBell />
            </div>
            <div className="group-inner" />
          </button>
        </div>
    </div>
  );
};

export default FarmerNavigation;
