import React, { useState } from 'react';
import { FaSignOutAlt, FaGlobe, FaHome, FaWallet, FaUser,FaStore, FaShoppingBag, FaCartPlus, FaEnvelope, FaUserCircle, FaBell, FaEdit } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import "../css/BuyerPage/buyerProfileNav.css";
import { IconButton, Modal, TextField, Button } from '@material-ui/core';
import Logo from '../img/agriPinasLogo.png';
import profile1 from '../img/profileVector1.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BuyerProfileNav = ({ onUserInfoChange }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [barangay, setBarangay] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const handleEditProfileClick = () => {
    setOpen(true);
  };
  
  const handleEditModalClose = () => {
    setShowEditModal(false);
  };
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    setPhoneNumber(numericValue);
  };
 
  const handleSave = () => {
    onUserInfoChange({ name, phoneNumber, email, dateOfBirth });
    handleClose();
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div className="buyerNavigation">
      <NavLink className="buyerNavigationLogoParent" to = '/buyermarketplace'>
        <img className="buyerNavigationLogoIcon" alt="" src={Logo} />
        <div className="buyerNavigationMainText">AgriPinas</div>
      </NavLink>
      <div className="buyerNavigationGroupParent">
        <NavLink
          className="buyerNavigationLink1"
          to="/buyerprofile"
          activeClassName="active"
        >
          <div className="buyerNavigationLinksProfile">Profile</div>
        </NavLink>

        <NavLink
          className="buyerNavigationLink2"
          to="/buyeraddress"
          activeClassName="active"
        >
          <div className="buyerNavigationLinksAddress">Addresses</div>
        </NavLink>
        <NavLink
          className="buyerNavigationLogout"
          to="/login"
        >
          <div className="buyerNavigationLinksLogout">Logout</div>
          <FaSignOutAlt className="buyerNavigationLinksIconLogout" />
        </NavLink>

        <div className="buyerNavigationLink3">
          <img src={profile1} alt="Account Icon" className="accountIcon" /> 
          <div className="buyerNavigationLinks1">{name}</div>
          <div className="buyerNavigationLinks2" onClick={handleEditProfileClick}>Edit Profile</div>
          <FaEdit className="buyerNavigationLinksIcon1" onClick={handleEditProfileClick} />
        </div>

        <NavLink
          className="buyerNavigationLink4"
          to="#"
          activeClassName="active"
        >
          <div className="buyerNavigationLinks">My Account</div>
          <FaUser className="buyerNavigationLinksIcon" />
        </NavLink>
      </div>
      <div className="nameUser">Jenkins Mesina</div>
      <Modal open={open} onClose={handleClose}>
        <div className="editModal">
          <h2>Edit your Profile</h2>
          <br />
                <div class="buyerNavEditProductComponentInputParent">
        <div class="buyerNavEditProductComponentTitle1">
          <img src={profile1} class="accountIcon1"/>
          Select Image
        </div>
        <input
          type="file"
          placeholder="Select your image"
        />
      </div>

          <div className="buyerNavEditInputParent">
            <div className="buyerNavEditFullName">Full Name</div>
            <input
              className="buyerNavEditProductComponentInput2"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="buyerNavEditInputParent dateOfBirthFieldParent">
            <div className="buyerNavEditDBirth">Date of Birth</div>
            <DatePicker
              className="buyerNavEditProductComponentInput2 dateOfBirthField"
              selected={dateOfBirth}
              placeholderText="Select your date of birth"
              onChange={date => setDateOfBirth(date)}
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <div className="buyerNavEditInputParent">
            <div className="buyerNavEditEmail">Email</div>
            <input
              className="buyerNavEditProductComponentInput2"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="buyerNavEditInputParent">
            <div className="buyerNavEditAge">Age</div>
            <input
              className="buyerNavEditProductComponentInput2"
              type="text"
              placeholder="Enter your age"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className="buyerNavEditInputParent">
            <div className="buyerNavEditPNum">Phone number</div>
            <input
              className="buyerNavEditProductComponentInput2"
              type="text"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
         
       
       

          <div className="buttonContainer1">
            <Button variant="contained" color="primary" onClick={handleClose} className="cancelButton">
              Cancel
            </Button>
            <Button variant="contained" color="secondary" onClick={handleSave} className="saveButton">
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BuyerProfileNav;
