import React, { useState } from 'react';
import '../css/BuyerPage/buyerCommunityForumPost.css';
import FarmerProfileNav from '../components/farmerProfileNav';
import { IconButton, Modal, TextField, Button } from '@material-ui/core';
import FarmerTopNav from '../components/farmerTopNav';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const BuyerAddress = () => {
  const [openEditModal1, setOpenEditModal1] = useState(false);
  const [openEditModal2, setOpenEditModal2] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [barangay, setBarangay] = useState('');
  const [address, setAddress] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [barangayError, setBarangayError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  

  const handleModalConfirm = () => {
    setShowModal(false);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const handleDeleteAddress = () => {
    setShowModal(true);
  };

  const handleOpenEditModal1 = () => {
    setOpenEditModal1(true);
  };

  const handleOpenEditModal2 = () => {
    setOpenEditModal2(true);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    setPhoneNumber(numericValue);
  };

  const handleSave = () => {
    let hasError = false;

    if (!name) {
      hasError = true;
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!phoneNumber) {
      hasError = true;
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }

    if (!barangay) {
      hasError = true;
      setBarangayError(true);
    } else {
      setBarangayError(false);
    }

    if (!address) {
      hasError = true;
      setAddressError(true);
    } else {
      setAddressError(false);
    }

    if (hasError) {
      return;
    }

    setName('');
    setPhoneNumber('');
    setBarangay('');
    setAddress('');

    handleClose();
  };

  const handleClose = () => {
    setName('');
    setPhoneNumber('');
    setBarangay('');
    setAddress('');
    setOpenEditModal1(false);
    setOpenEditModal2(false);
  };

  return (
    <div className="buyerCommunityForumComponentFullPost">
      <FarmerProfileNav />
      <div className="farmerMarketplaceComponentMainPanel">
        <FarmerTopNav />
        <div className="farmerCommunityForumComponentTopSection">
          <div className="farmerCommunityForumComponentMainText1">
            <b className="farmerCommunityForumComponentMainText2">
              <p className="farmerCommunityForumComponentBlankLine">My Addresses</p>
            </b>
          </div>
        </div>
        <div class="courses-container" style={{ marginTop: '-40px' }}>
          <div class="courseAddress">
            <div class="course-preview1">
              <div class="info1 ">Address</div>
              <div class="nameAddress">Marievic Anes</div>
              <div class="numberAddress"> | 09675046713</div>
              <div class="locAddress1">Timog Ave.</div>
              <div class="locAddress2">Kristong Hari, Quezon City, Metro Manila, Metro Manila</div>
              <div class="defaultAddress1">Default</div>
              <FaEdit className="EditIconAddress" onClick={handleOpenEditModal1} />

<Modal open={openEditModal1} onClose={handleClose}>
        <div className="editModal">
          <h2>Edit your Address</h2>
          <br />
          <div className={`farmerMarketplaceEditProductComponentInputParent ${nameError ? 'error' : ''}`}>
            <div className="farmerMarketplaceEditProductComponentTitle">Full Name</div>
            <input
              className={`farmerMarketplaceEditProductComponentInput2 ${nameError ? 'error' : ''}`}
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={`farmerMarketplaceEditProductComponentInputParent ${phoneNumberError ? 'error' : ''}`}>
            <div className="farmerMarketplaceEditProductComponentTitle">Phone number</div>
            <input
              className={`farmerMarketplaceEditProductComponentInput2 ${phoneNumberError ? 'error' : ''}`}
              type="text"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className={`farmerMarketplaceEditProductComponentInputParent ${barangayError ? 'error' : ''}`}>
            <div className="farmerMarketplaceEditProductComponentTitle">Barangay</div>
            <input
              className={`farmerMarketplaceEditProductComponentInput2 ${barangayError ? 'error' : ''}`}
              type="text"
              placeholder="Enter your barangay"
              value={barangay}
              onChange={(e) => setBarangay(e.target.value)}
            />
          </div>
          <div className={`farmerMarketplaceEditProductComponentInputParent ${addressError ? 'error' : ''}`}>
            <div className="farmerMarketplaceEditProductComponentTitle">Address</div>
            <input
              className={`farmerMarketplaceEditProductComponentInput2 ${addressError ? 'error' : ''}`}
              type="text"
              placeholder="Enter your full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="buttonContainer">
            <Button variant="contained" color="primary" onClick={handleClose} className="cancelButton">
              Cancel
            </Button>
            <Button variant="contained" color="secondary" onClick={handleSave} className="saveButton">
              Save
            </Button>
          </div>
        </div>
      </Modal>

              <div class="nameAddress1">Marievic Anes</div>
              <div class="numberAddress"> | 09675046713</div>
              <div class="locAddress1">East Ave</div>
              <div class="locAddress2">48 - Magalang Street Brgy. Pinyahan Quezon City</div>
              <FaEdit className="EditIconAddress1" onClick={handleOpenEditModal2} />
              <Modal open={openEditModal2} onClose={handleClose}>
        <div className="editModal">
          <h2>Edit your Address</h2>
          <br />
          <div className={`farmerMarketplaceEditProductComponentInputParent ${nameError ? 'error' : ''}`}>
            <div className="farmerMarketplaceEditProductComponentTitle">Full Name</div>
            <input
              className={`farmerMarketplaceEditProductComponentInput2 ${nameError ? 'error' : ''}`}
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={`farmerMarketplaceEditProductComponentInputParent ${phoneNumberError ? 'error' : ''}`}>
            <div className="farmerMarketplaceEditProductComponentTitle">Phone number</div>
            <input
              className={`farmerMarketplaceEditProductComponentInput2 ${phoneNumberError ? 'error' : ''}`}
              type="text"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className={`farmerMarketplaceEditProductComponentInputParent ${barangayError ? 'error' : ''}`}>
            <div className="farmerMarketplaceEditProductComponentTitle">Barangay</div>
            <input
              className={`farmerMarketplaceEditProductComponentInput2 ${barangayError ? 'error' : ''}`}
              type="text"
              placeholder="Enter your barangay"
              value={barangay}
              onChange={(e) => setBarangay(e.target.value)}
            />
          </div>
          <div className={`farmerMarketplaceEditProductComponentInputParent ${addressError ? 'error' : ''}`}>
            <div className="farmerMarketplaceEditProductComponentTitle">Address</div>
            <input
              className={`farmerMarketplaceEditProductComponentInput2 ${addressError ? 'error' : ''}`}
              type="text"
              placeholder="Enter your full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="farmerMarketplaceEditProductComponentInputParent">
                  
                  <input
                    className="checkboxAddress"
                    type="checkbox"
                    value={false}
                    onChange={(e) => console.log(e.target.value)}
                  />
                  <div className="setDefaultAddress">Set as Default Address</div>
                </div>
          <div className="buttonContainer">
            <Button variant="contained" color="primary" onClick={handleClose} className="cancelButton">
              Cancel
            </Button>
            <Button variant="contained" color="secondary" onClick={handleSave} className="saveButton">
              Save
            </Button>
          </div>
        </div>
      </Modal>
      {showModal && (
              <div className="modalBackdrop">
                <div className="modal1">
                  <div className="modalContent">
                    <h2>Delete Address?</h2>
                    <div className="buttonContainer">
                      <br />
                      <button className="confirmButton" onClick={handleModalConfirm}>
                        Yes
                      </button>
                      <button className="cancelButton" onClick={handleModalCancel}>
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <FaTrashAlt className="DeleteIconAddress1" onClick={handleDeleteAddress} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BuyerAddress;
