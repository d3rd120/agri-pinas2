import '../css/Components/adminBuyerTransactionsNavigation.css';
import { NavLink } from 'react-router-dom';

const FarmerTransactionsNavigation = () => {
    return (
        <>
            <div className="adminBuyerTransactionsNavigation">
                <div className="adminBuyerTransactionsNavigationParent">
                    <NavLink activeClassName="active" className="adminBuyerTransactionsNavigationText" exact to='/adminfarmerpendingtransactions'>Pending</NavLink>
                    <NavLink activeClassName="active" className="adminBuyerTransactionsNavigationText" exact to='/adminfarmercancelledtransactions'>Cancelled</NavLink>
                    <NavLink activeClassName="active" className="adminBuyerTransactionsNavigationText" exact to='/adminfarmercompletedtransactions'>Completed</NavLink>
                </div>
            </div>
        </>
    );
};

export default FarmerTransactionsNavigation;
