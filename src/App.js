import MainPage from './pages/MainPage/mainPage';
import LoginPage from './pages/MainPage/loginPage';
import SignupPage from './pages/MainPage/signupPage';
import FarmerDashboard from './pages/FarmerPage/farmerDashboard';
import FarmerMarketplace from './pages/FarmerPage/farmerMarketplace';
import FarmerCommunityForum from './pages/FarmerPage/farmerCommunityForum';
import FarmerCropTracker from './pages/FarmerPage/farmerCropTracker';
import FarmerTransactions from './pages/FarmerPage/farmerTransactions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';


const App = () => {

  return (
    <>
      <BrowserRouter >
        <Routes>
        <Route path = "/" index element = { <MainPage/> }/>        
        <Route path = "/login" element = { <LoginPage/> }/>  
        <Route path = "/signup" element = { <SignupPage/> }/> 
        <Route path = "/farmerdashboard" element = { <FarmerDashboard/> }/>               
        <Route path = "/farmermarketplace" element = { <FarmerMarketplace/> }/>
        <Route path = "/farmercommunityforum" element = { <FarmerCommunityForum/> }/>
        <Route path = "/farmercroptracker" element = { <FarmerCropTracker/> }/>
        <Route path = "/farmertransactions" element = { <FarmerTransactions/> }/>
        </Routes> 
        </BrowserRouter>
    </>
  );
};

export default App;