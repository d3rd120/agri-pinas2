import React, { useState } from 'react';
import '../css/Components/farmerMarketplaceComponentEditProduct.css';

const FarmerMarketplaceEditProductComponent = ({ closePopup1, handleSave }) => {
  const [editedCategory, setEditedCategory] = useState('');
  const [editedPackaging, setEditedPackaging] = useState('');
  const [editedPrice, setEditedPrice] = useState('');
  const [editedKilogram, setEditedKilogram] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleSaveClick = () => {
  
    handleSave(editedCategory, editedPackaging, editedPrice, editedKilogram, editedDescription);
    closePopup1();
  };
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
              placeholder = "Enter your new product name"
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
              value={editedCategory}
              onChange={(e) => setEditedCategory(e.target.value)}
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
              value={editedPackaging}
              onChange={(e) => setEditedPackaging(e.target.value)}
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
              value={editedPrice}
              onChange={(e) => setEditedPrice(e.target.value)}
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
              value={editedKilogram}
              onChange={(e) => setEditedKilogram(e.target.value)}
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
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <div className="farmerMarketplaceEditProductComponentButtonGroup">
        <button
          className="farmerMarketplaceEditProductComponentButton"
          onClick={handleSaveClick}
        >
          <div className="farmerMarketplaceEditProductComponentButtonText">
            Save
          </div>
        </button>
        <button
          className="farmerMarketplaceEditProductComponentButton"
          onClick={closePopup1}
        >
          <div className="farmerMarketplaceEditProductComponentButtonText">
            Cancel
          </div>
        </button>
      </div>
      <div className="farmerMarketplaceEditProductComponentFormChild" />
    </div>
  );
};

export default FarmerMarketplaceEditProductComponent;