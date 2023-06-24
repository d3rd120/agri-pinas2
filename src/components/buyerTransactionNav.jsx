import '../css/Components/farmerTransactionsNavigation.css';
import { NavLink } from 'react-router-dom';

const BuyerTransactionNav = () => {
    return (
        <>
            <div className="farmerTransactionsNavigation">
                <div className="farmerTransactionsNavigationParent">
                    <NavLink activeClassName="active" className="farmerTransactionsNavigationText" exact to='/buyertoreceive'>To Receive</NavLink>
                    <NavLink activeClassName="active" className="farmerTransactionsNavigationText" exact to='/buyercomplete'>Completed</NavLink>
                    <NavLink activeClassName="active" className="farmerTransactionsNavigationText" exact to='/buyercancelled'>Cancelled</NavLink>
                </div>
            </div>
        </>
    );
};

export default BuyerTransactionNav;
