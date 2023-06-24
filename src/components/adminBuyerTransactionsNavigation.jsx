import '../css/Components/adminBuyerTransactionsNavigation.css';
import { NavLink } from 'react-router-dom';

const FarmerTransactionsNavigation = () => {
    return (
        <>
            <div className="adminBuyerTransactionsNavigation">
                <div className="adminBuyerTransactionsNavigationParent">
                    <NavLink activeClassName="active" className="adminBuyerTransactionsNavigationText" exact to='/adminbuyerpendingtransactions'>Pending</NavLink>
                    <NavLink activeClassName="active" className="adminBuyerTransactionsNavigationText" exact to='/adminbuyercancelledtransactions'>Cancelled</NavLink>
                    <NavLink activeClassName="active" className="adminBuyerTransactionsNavigationText" exact to='/adminbuyercompletedtransactions'>Completed</NavLink>
                </div>
            </div>
        </>
    );
};

export default FarmerTransactionsNavigation;
