import '../css/Components/farmerTransactionsNavigation.css';
import { NavLink } from 'react-router-dom';

const FarmerTransactionsNavigation = () => {
    return (
        <>
            <div className="farmerTransactionsNavigation">
                <div className="farmerTransactionsNavigationParent">
                    <NavLink activeClassName="active" className="farmerTransactionsNavigationText" exact to='/farmertransactionspending'>Pending</NavLink>
                    <NavLink activeClassName="active" className="farmerTransactionsNavigationText" exact to='/farmertransactionscancelled'>Cancelled</NavLink>
                    <NavLink activeClassName="active" className="farmerTransactionsNavigationText" exact to='/farmertransactionscompleted'>Completed</NavLink>
                </div>
            </div>
        </>
    );
};

export default FarmerTransactionsNavigation;
