import '../css/Components/farmerCropTrackerNavigation.css';
import { NavLink } from 'react-router-dom';

const FarmerCropTrackerNavigation = () => {
    return (
        <>
            <div className="farmernavigation">
                <div className="harvest-parent">
                    <NavLink activeClassName="active" className="harvest" exact to='/farmercroptrackerharvest'>Harvest</NavLink>
                    <NavLink activeClassName="active" className="harvest" exact to='/farmercroptrackerharvested'>Harvested</NavLink>
                </div>
            </div>
        </>
    );
};

export default FarmerCropTrackerNavigation;
