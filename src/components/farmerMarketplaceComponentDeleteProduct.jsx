import '../css/Components/farmerMarketplaceComponentDeleteProduct.css';

const farmerMarketplaceComponenteDeleteProduct = ({ closePopup }) => {
  return (
    <div className="farmerMarketplaceComponenteDeleteProduct">
      <div className="farmerMarketplaceComponentDeleteProductMainText">Delete this product</div>
      <div className="farmerMarketplaceComponentDeleteProductSubText">
        Are you sure you want to delete this product?
      </div>
      <button className="farmerMarketplaceComponentDeleteProductButton">
        <div className="farmerMarketplaceComponentDeleteProductButtonText">Yes</div>
      </button>
      <button className="farmerMarketplaceComponentDeleteProductButton" onClick={closePopup}>
        <div className="farmerMarketplaceComponentDeleteProductButtonText">No</div>
      </button>
    </div>
  );
};

export default farmerMarketplaceComponenteDeleteProduct;
