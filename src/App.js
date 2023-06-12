import MainPage from './pages/MainPage/mainPage';
import LoginPage from './pages/MainPage/loginPage';
import SignupPage from './pages/MainPage/signupPage';
import Reset from './components/reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';


const App = () => {

  return (
    <>
      <BrowserRouter >
        <Routes>
        <Route path = "/" index element = { <MainPage/> }/>        
        <Route path = "/login" element = { <LoginPage/> }/>
        <Route path = "/reset" element = { < Reset /> }/>
        <Route path = "/signup" element = { <SignupPage/> }/>        
        </Routes> 
        </BrowserRouter>
    </>
  );
};

export default App;