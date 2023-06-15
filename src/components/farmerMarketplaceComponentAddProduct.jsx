import '../css/Components/farmerMarketplaceComponentAddProduct.css';



const FarmerMarketplaceAddProductComponent  = () =>  {
  return (
    <div className="FarmerMarketplaceAddProductComponent">
      <div className="FarmerMarketplaceAddProductComponentMainText">Add your Product</div>
      <div className="FarmerMarketplaceAddProductComponentFrameParent">
        <div className="FarmerMarketplaceAddProductComponentFrameGroup">
          <div className="FarmerMarketplaceAddProductComponentInputParent">
            <div className="FarmerMarketplaceAddProductComponentTitle">Product Name</div>
            <input
              className="FarmerMarketplaceAddProductComponentInput1"
              type="text"
              placeholder="Enter your product name"
            />
          </div>
          <div className="FarmerMarketplaceAddProductComponentInputParent">
            <div className="FarmerMarketplaceAddProductComponentTitle">Category</div>
            <input
              className="FarmerMarketplaceAddProductComponentInput1"
              type="text"
              placeholder="Enter your category"
            />
          </div>
          <div className="FarmerMarketplaceAddProductComponentInputParent">
            <div className="FarmerMarketplaceAddProductComponentTitle">Packaging</div>
            <input className="FarmerMarketplaceAddProductComponentInput1" type="text" placeholder = "Enter your packaging"/>
          </div>
        </div>
        <div className="FarmerMarketplaceAddProductComponentFrameGroup">
          <div className="FarmerMarketplaceAddProductComponentInputParent">
            <div className="FarmerMarketplaceAddProductComponentTitle">Price</div>
            <input
              className="FarmerMarketplaceAddProductComponentInput2"
              type="text"
              placeholder="Enter your price"
            />
          </div>
          <div className="FarmerMarketplaceAddProductComponentInputParent">
            <div className="FarmerMarketplaceAddProductComponentTitle">Kilogram per unit</div>
            <input
              className="FarmerMarketplaceAddProductComponentInput2"
              type="text"
              placeholder="Enter your kilogram"
            />
          </div>
          <div className="FarmerMarketplaceAddProductComponentInputParent">
            <div className="FarmerMarketplaceAddProductComponentTitle">Upload Product Image</div>
            <input className="FarmerMarketplaceAddProductComponentInput3" type="file" required />
          </div>
        </div>
      </div>
      <div className="FarmerMarketplaceAddProductComponentTitle">Description</div>
      <textarea className="FarmerMarketplaceAddProductComponentInput4" placeholder="Enter your description" />
      <button className="FarmerMarketplaceAddProductComponentButton">
        <div className="FarmerMarketplaceAddProductComponentButtonText">Add</div>
      </button>
      <div className="FarmerMarketplaceAddProductComponentFormChild" />
    </div>
  );
};


export default FarmerMarketplaceAddProductComponent;


