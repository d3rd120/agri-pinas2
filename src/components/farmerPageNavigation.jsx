import "../css/Components/farmerPageNavigation.css";
import Logo from '../img/agriPinasLogo.png';
const FarmerNavigation = () => {
  return (
    <div className="farmernavigation">
      <img className="agripinaslogo-icon" alt="" src={Logo} />
      <div className="dashboard-parent">
        <a className="dashboard">Dashboard</a>
        <a className="marketplace">Marketplace</a>
        <a className="community">Community</a>
        <a className="crop-tracker">Crop Tracker</a>
        <a className="crop-tracker">Transactions</a>
      </div>
      <div className="ellipse-parent">
        <img className="group-child" alt="" src="/ellipse-1@2x.png" />
        <div className="group-item" />
        <button className="vector-parent">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="group-inner" />
        </button>
      </div>
    </div>
  );
};

export default FarmerNavigation;
