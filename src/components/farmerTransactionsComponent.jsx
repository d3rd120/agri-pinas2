import "../css/Components/farmerTransactionsComponent.css";
import FarmerNavigation from '../components/farmerPageNavigation';

const FarmerTransactions = () => {
  return (
    <div className="farmertransactions">
        <FarmerNavigation />  
      <div className="main-panel">
        <div className="top-section">
          <div className="welcome-to-dashboard">
            <b className="transactions1">
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">Transactions</p>
            </b>
          </div>
        </div>
        <div className="middle-section" />
      </div>
    </div>
  );
};

export default FarmerTransactions;
