import '../css/Components/farmerMarketplaceComponentAddProduct.css';
import { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

const FarmerMarketplaceAddProductComponent = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [packaging, setPackaging] = useState("");
  const [price, setPrice] = useState("");
  const [kilogramPerUnit, setKilogramPerUnit] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const createProduct = async () => {
    try {
      await addDoc(collection(db, "Products"), {
        productName,
        price,
        category,
        kilogramPerUnit,
        packaging,
        image,
      });
      console.log("Product added successfully!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const handleAddProduct = async () => {
    await createProduct();
  };

 

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
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="FarmerMarketplaceAddProductComponentInputParent">
            <div className="FarmerMarketplaceAddProductComponentTitle">Category</div>
            <input
              className="FarmerMarketplaceAddProductComponentInput1"
              type="text"
              placeholder="Enter your category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="FarmerMarketplaceAddProductComponentInputParent">
            <div className="FarmerMarketplaceAddProductComponentTitle">Packaging</div>
            <input
              className="FarmerMarketplaceAddProductComponentInput1"
              type="text"
              placeholder="Enter your packaging"
              value={packaging}
              onChange={(e) => setPackaging(e.target.value)}
            />
          </div>
        </div>
        <div className="FarmerMarketplaceAddProductComponentFrameGroup">
          <div className="FarmerMarketplaceAddProductComponentInputParent">
            <div className="FarmerMarketplaceAddProductComponentTitle">Price</div>
            <input
              className="FarmerMarketplaceAddProductComponentInput2"
              type="text"
              placeholder="Enter your price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="FarmerMarketplaceAddProductComponentInputParent">
            <div className="FarmerMarketplaceAddProductComponentTitle">Kilogram per unit</div>
            <input
              className="FarmerMarketplaceAddProductComponentInput2"
              type="text"
              placeholder="Enter your kilogram"
              value={kilogramPerUnit}
              onChange={(e) => setKilogramPerUnit(e.target.value)}
            />
          </div>
          <div className="FarmerMarketplaceAddProductComponentInputParent">
            <div className="FarmerMarketplaceAddProductComponentTitle">Upload Product Image</div>
            <input
              className="FarmerMarketplaceAddProductComponentInput3"
              type="file"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>
      </div>
      <div className="FarmerMarketplaceAddProductComponentTitle">Description</div>
      <textarea className="FarmerMarketplaceAddProductComponentInput4" 
      placeholder="Enter your description"
      value={description}
      onChange={(e) => setDescription(e.target.value)} />
      <button className="FarmerMarketplaceAddProductComponentButton" onClick={handleAddProduct}>
        <div className="FarmerMarketplaceAddProductComponentButtonText">Add</div>
      </button>
      <div className="FarmerMarketplaceAddProductComponentFormChild" />
    </div>
  );
};

export default FarmerMarketplaceAddProductComponent;
