import MainPage from './pages/MainPage/mainPage';
import LoginPage from './pages/MainPage/loginPage';
import SignupPage from './pages/MainPage/signupPage';
import BuyerMarketplace from './pages/BuyerPage/buyerMarketplace';
import BuyerMarketplacePost from './pages/BuyerPage/buyerMarketplacePost';
import ShoppingCart from './components/shoppingCartComponent';
import BuyerCommunityForum from './pages/BuyerPage/buyerCommunityForum';
import BuyerCommunityForumPost from './pages/BuyerPage/buyerCommunityForumPost';
import FarmerDashboard from './pages/FarmerPage/farmerDashboard';
import FarmerMarketplace from './pages/FarmerPage/farmerMarketplace';
import FarmerMarketplacePost from './pages/FarmerPage/farmerMarketplacePost';
import FarmerCommunityForum from './pages/FarmerPage/farmerCommunityForum';
import FarmerCommunityForumPost from './pages/FarmerPage/farmerCommunityForumPost';
import FarmerCropTracker from './pages/FarmerPage/farmerCropTracker';
import FarmerTransactions from './pages/FarmerPage/farmerTransactions';
import AdminDashboard from './pages/AdminPage/adminDashboard';
import AdminCommunityForum from './pages/AdminPage/adminCommunityForum';
import Reset from './components/reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';


const App = () => {

    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/buyermarketplace" element={<BuyerMarketplace />} />
              <Route path="/buyermarketplacepost" element={<BuyerMarketplacePost />} />
              <Route path="/buyercommunityforum" element={<BuyerCommunityForum />} />
              <Route path="/buyercommunityforumpost" element={<BuyerCommunityForumPost />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/farmerdashboard" element={<FarmerDashboard />} />
              <Route path="/farmermarketplace" element={<FarmerMarketplace />} />
              <Route path="/farmermarketplacepost" element={<FarmerMarketplacePost />} />
              <Route path="/farmercommunityforum" element={<FarmerCommunityForum />} />
              <Route path="/farmercommunityforumpost" element={<FarmerCommunityForumPost />} />
              <Route path="/farmercroptracker" element={<FarmerCropTracker />} />
              <Route path="/farmertransactions" element={<FarmerTransactions />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/admincommunityforum" element={<AdminCommunityForum />} />
            </Routes>
          </BrowserRouter>
        </>
      );
      
};

export default App;