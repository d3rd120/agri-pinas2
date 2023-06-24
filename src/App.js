import MainPage from './pages/MainPage/mainPage';
import LoginPage from './pages/MainPage/loginPage';
import SignupPage from './pages/MainPage/signupPage';
import BuyerMarketplace from './pages/BuyerPage/buyerMarketplace';
import BuyerMarketplacePost from './pages/BuyerPage/buyerMarketplacePost';
import ShoppingCart from './components/shoppingCartComponent';
import BuyerCommunityForum from './pages/BuyerPage/buyerCommunityForum';
import BuyerCommunityForumPost from './pages/BuyerPage/buyerCommunityForumPost';
import Checkout from './pages/BuyerPage/checkout';
import BuyerTransaction from './pages/BuyerPage/buyerTransac';
import BuyerProf from './pages/BuyerPage/buyerProfile';
import BuyerAdd from './pages/BuyerPage/buyerAddress';
import FarmerDashboard from './pages/FarmerPage/farmerDashboard';
import FarmerMarketplace from './pages/FarmerPage/farmerMarketplace';
import FarmerMarketplacePost from './pages/FarmerPage/farmerMarketplacePost';
import FarmerCommunityForum from './pages/FarmerPage/farmerCommunityForum';
import FarmerCommunityForumPost from './pages/FarmerPage/farmerCommunityForumPost';
import FarmerCropTrackerHarvest from './pages/FarmerPage/farmerCropTrackerHarvest';
import FarmerCropTrackerHarvested from './pages/FarmerPage/farmerCropTrackerHarvested';
import FarmerTransactions from './pages/FarmerPage/farmerTransactions';
import FarmerTransactionsPending from './pages/FarmerPage/farmerTransactionsPending';
import FarmerTransactionsCancelled from './pages/FarmerPage/farmerTransactionsCancelled';
import FarmerTransactionsCompleted from './pages/FarmerPage/farmerTransactionsCompleted';
import FarmerProfile from './pages/FarmerPage/farmerProfile';
import FarmerAddress from './pages/FarmerPage/farmerAddress';
import FarmerAccount from './pages/FarmerPage/farmerAccount';
import AdminDashboard from './pages/AdminPage/adminDashboard';
import AdminCommunityForum from './pages/AdminPage/adminCommunityForum';
import AdminBuyerPendingTransactions from './pages/AdminPage/adminBuyerPendingTransactions';
import AdminBuyerCancelledTransactions from './pages/AdminPage/adminBuyerCancelledTransactions';
import AdminBuyerCompletedTransactions from './pages/AdminPage/adminBuyerCompletedTransactions';
import AdminFarmerPendingTransactions from './pages/AdminPage/adminFarmerPendingTransactions';
import AdminFarmerCancelledTransactions from './pages/AdminPage/adminFarmerCancelledTransactions';
import AdminFarmerCompletedTransactions from './pages/AdminPage/adminFarmerCompletedTransactions';
import AdminBuyerTransactions from './pages/AdminPage/adminBuyerTransactions';
import AdminFarmerTransactions from './pages/AdminPage/adminFarmerTransactions';
import AdminAccountBuyer from './pages/AdminPage/adminAccountBuyer';
import AdminAccountFarmer from './pages/AdminPage/adminAccountFarmer';
import Reset from './components/reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import PrivateRoutes from './Util/PrivateRoutes';
import PublicRoutes from './Util/PublicRoutes';

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
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/buyertransactions" element={<BuyerTransaction />} />
              <Route path="/buyerprofile" element={<BuyerProf />} />
              <Route path="/buyeraddress" element={<BuyerAdd />} />
              <Route path="/farmerdashboard" element={<FarmerDashboard />} />
              <Route path="/farmermarketplace" element={<FarmerMarketplace />} />
              <Route path="/farmermarketplacepost" element={<FarmerMarketplacePost />} />            
              <Route path="/farmercommunityforum" element={<FarmerCommunityForum />} />
              <Route path="/farmercommunityforumpost" element={<FarmerCommunityForumPost />} />              
              <Route path="/farmercroptrackerharvest" element={<FarmerCropTrackerHarvest />} />
              <Route path="/farmercroptrackerharvested" element={<FarmerCropTrackerHarvested />} />
              <Route path="/farmertransactions" element={<FarmerTransactions />} />
              <Route path="/farmertransactionspending" element={<FarmerTransactionsPending />} />
              <Route path="/farmertransactionscancelled" element={<FarmerTransactionsCancelled />} />
              <Route path="/farmertransactionscompleted" element={<FarmerTransactionsCompleted />} />
              <Route path="/farmerprofile" element={<FarmerProfile />} />  
              <Route path="/farmeraddress" element={<FarmerAddress />} />                                          
              <Route path="/farmeraccount" element={<FarmerAccount />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/admincommunityforum" element={<AdminCommunityForum />} />
              <Route path="/adminbuyerpendingtransactions" element={<AdminBuyerPendingTransactions />} />  
              <Route path="/adminbuyercancelledtransactions" element={<AdminBuyerCancelledTransactions />} />                           
              <Route path="/adminbuyercompletedtransactions" element={<AdminBuyerCompletedTransactions />} />                              
              <Route path="/adminbuyertransactions" element={<AdminBuyerTransactions />} />
              <Route path="/adminfarmerpendingtransactions" element={<AdminFarmerPendingTransactions />} />   
              <Route path="/adminfarmercancelledtransactions" element={<AdminFarmerCancelledTransactions />} /> 
              <Route path="/adminfarmercompletedtransactions" element={<AdminFarmerCompletedTransactions />} />                                 
              <Route path="/adminfarmertransactions" element={<AdminFarmerTransactions />} />             
              <Route path="/adminaccountbuyer" element={<AdminAccountBuyer />} />  
              <Route path="/adminaccountfarmer" element={<AdminAccountFarmer />} />  
              <Route element={<PublicRoutes />}/>
              <Route element={<PrivateRoutes />}/>
            </Routes>
          </BrowserRouter>
        </>
      );
      
};

export default App;