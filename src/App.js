import MainPage from './pages/MainPage/mainPage';
import LoginPage from './pages/MainPage/loginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';


const App = () => {

  return (
    <>
      <BrowserRouter >
        <Routes>
        <Route index element = { <MainPage/> }/>        
        <Route path = "/login" element = { <LoginPage/> }/>              
        </Routes> 
        </BrowserRouter>
    </>
  );
};

export default App;