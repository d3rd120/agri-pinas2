import '../css/Components/farmerCropTrackerNavigation.css';
import { NavLink } from 'react-router-dom';

const FarmerCropTrackerNavigation = () => {
    return (
        <>
            <div className="farmerCropTrackerNavigation">
                <div className="farmerCropTrackerNavigationParent">
                    <NavLink activeClassName="active" className="farmerCropTrackerNavigationText" exact to='/farmercroptrackerharvest'>Harvest</NavLink>
                    <NavLink activeClassName="active" className="farmerCropTrackerNavigationText" exact to='/farmercroptrackerharvested'>Harvested</NavLink>                  
                </div>
            </div>
        </>
    );
};

export default FarmerCropTrackerNavigation;
