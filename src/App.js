import MainPage from './pages/MainPage/mainPage';
import LoginPage from './pages/MainPage/loginPage';
import SignupPage from './pages/MainPage/signupPage';
import FarmerDashboard from './pages/FarmerPage/farmerDashboard';
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
        </Routes> 
        </BrowserRouter>
    </>
  );
};

export default App;