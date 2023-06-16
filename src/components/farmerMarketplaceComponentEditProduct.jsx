import "../css/Components/farmerMarketplaceComponentEditProduct.css";

const farmerMarketplaceEditProductComponent = ({closePopup1}) => {
  return (
    <div className="farmerMarketplaceEditProductComponent">
      <div className="farmerMarketplaceEditProductComponentMainText">
        Edit your Product
      </div>
      <div className="farmerMarketplaceEditProductComponentFrameParent">
        <div className="farmerMarketplaceEditProductComponentFrameGroup">
          <div className="farmerMarketplaceEditProductComponentInputParent">
            <div className="farmerMarketplaceEditProductComponentTitle">
              Product Name
            </div>
            <input
              className="farmerMarketplaceEditProductComponentInput1"
              type="text"
              placeholder="Enter your new product name"
            />
          </div>
          <div className="farmerMarketplaceEditProductComponentInputParent">
            <div className="farmerMarketplaceEditProductComponentTitle">
              Category
            </div>
            <input
              className="farmerMarketplaceEditProductComponentInput1"
              type="text"
              placeholder="Enter your new category"
            />
          </div>
          <div className="farmerMarketplaceEditProductComponentInputParent">
            <div className="farmerMarketplaceEditProductComponentTitle">
              Packaging
            </div>
            <input
              className="farmerMarketplaceEditProductComponentInput1"
              type="text"
              placeholder="Enter your new packaging"
            />
          </div>
        </div>
        <div className="farmerMarketplaceEditProductComponentFrameGroup">
          <div className="farmerMarketplaceEditProductComponentInputParent">
            <div className="farmerMarketplaceEditProductComponentTitle">
              Price
            </div>
            <input
              className="farmerMarketplaceEditProductComponentInput2"
              type="text"
              placeholder="Enter your new price"
            />
          </div>
          <div className="farmerMarketplaceEditProductComponentInputParent">
            <div className="farmerMarketplaceEditProductComponentTitle">
              Kilogram per unit
            </div>
            <input
              className="farmerMarketplaceEditProductComponentInput2"
              type="text"
              placeholder="Enter your new kilogram"
            />
          </div>
          <div className="farmerMarketplaceEditProductComponentInputParent">
            <div className="farmerMarketplaceEditProductComponentTitle">
              Upload New Product Image (Optional)
            </div>
            <input
              className="farmerMarketplaceEditProductComponentInput3"
              type="file"
              required
            />
          </div>
        </div>
      </div>
      <div className="farmerMarketplaceEditProductComponentTitle">
        Description
      </div>
      <textarea
        className="farmerMarketplaceEditProductComponentInput4"
        placeholder="Enter your new description"
      />
      <div className="farmerMarketplaceEditProductComponentButtonGroup">
        <button className="farmerMarketplaceEditProductComponentButton">
          <div className="farmerMarketplaceEditProductComponentButtonText">
            Save
          </div>
        </button>
        <button className="farmerMarketplaceEditProductComponentButton" onClick = {closePopup1}>
          <div className="farmerMarketplaceEditProductComponentButtonText">
            Cancel
          </div>
        </button>
      </div>
      <div className="farmerMarketplaceEditProductComponentFormChild" />
    </div>
  );
};

export default farmerMarketplaceEditProductComponent;
