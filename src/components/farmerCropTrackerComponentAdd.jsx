import '../css/Components/farmerCropTrackerComponentAdd.css';



const farmerCropTrackerComponentAdd  = () =>  {
    return (
        <div className="farmerCropTrackerComponentAdd">
          <div className="farmerCropTrackerComponentAddMainText">Add Crop</div>
          <div className="farmerCropTrackerComponentAddFrameParent">
            <div className="farmerCropTrackerComponentAddFrameGroup">
              <div className="farmerCropTrackerComponentAddInputParent">
                <div className="farmerCropTrackerComponentAddTitle">Crop Name</div>
                <input
                  className="farmerCropTrackerComponentAddInput1"
                  type="text"
                  placeholder="Enter your crop name"
                />
              </div>   
              <div className="farmerCropTrackerComponentAddTitle">Date Planted</div>
                <input
                  className="farmerCropTrackerComponentAddInput1"
                  type="date"
                  placeholder="Enter your date planted"
                />
                <div className="farmerCropTrackerComponentAddTitle">Estimated Date to Harvest</div>
                <input
                  className="farmerCropTrackerComponentAddInput1"
                  type="date"
                  placeholder="Enter your estimated date to harvest"
                />
                <div className="farmerCropTrackerComponentAddTitle">Status</div>
                <input
                  className="farmerCropTrackerComponentAddInput1"
                  type="text"
                  placeholder="Enter your status"
                />                         
              
              <button className="farmerCropTrackerComponentAddButton">
                <div className="farmerCropTrackerComponentAddButtonText">Add</div>
              </button>
              <div className="farmerCropTrackerComponentAddFormChild" />
            </div>        
          </div>     
        </div>
      );
      
};


export default farmerCropTrackerComponentAdd;


