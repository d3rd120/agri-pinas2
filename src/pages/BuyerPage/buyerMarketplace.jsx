import React, { useState } from 'react';
import "../../css/Buyer Page/buyermarketplace.css";
import { RiChat1Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import CornVector from '../../img/farmerMarkeplaceVector1.png';
import Homenav from '../../components/buyerNavigation';
import HeaderTitle from '../../components/headerTitle';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';



const CustomHeaderTitle = styled.div`
  background-color: #557153;
  color: #fff;
  /* Additional styles for the header title */
`;

const BuyerMarketplace = () => {
 
  const theme = {
    background: 'white',
    headerBgColor: '#9DC08B',
    headerFontSize: '20px',
    botBubbleColor: '#e0e0e0',
    headerFontColor: 'white',
    botFontColor: 'black',
    userBubbleColor: 'white',
    userFontColor: 'black',
};

  const [showChatBot, setShowChatBot] = useState(false);
  const [minimizedChatBot, setMinimizedChatBot] = useState(false);

  const handleChatButtonClick = () => {
    setShowChatBot(!showChatBot);
    setMinimizedChatBot(false);
  };

  const handleChatBotClose = () => {
    setShowChatBot(false);
    setMinimizedChatBot(false);
  };

  const handleChatBotMinimize = () => {
    setMinimizedChatBot(true);
  };

  const handleEnd = () => {
    setShowChatBot(false);
    setMinimizedChatBot(false);
  };

  return (
    <>
      <Homenav />

      <HeaderTitle>Marketplace</HeaderTitle>
      <div className="buyerMarketplacePageLayout">
        <div className="buyerMarketplaceColumn">
          <div className="buyerMarketplaceCard">
            <img className="farmerMarketplaceImage" alt="Onion Vector" src={CornVector} />
            <div className="buyerMarketplaceDetails1">
              <div className="buyerMarketplaceProductName center">Corn</div>
              <div className="buyerMarketplaceDetails2">
                <b>Farmer: </b>
                <span>Daniel Raymund Ribaya</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Category: </b>
                <span>Vegetable</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Price: </b>
                <span>Php 5,000</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Packaging: </b>
                <span>Sack</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Kilogram per unit: </b>
                <span>50kgs</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Description:</b>
                <span>A red hound vegetable with good storage quality</span>
              </div>
              <div className="button-row">
                <button className="outlined-button" onClick={handleChatButtonClick}>
                  Chat <RiChat1Line className="chat-icon" />
                </button>
                <Link to="/shoppingCart" className="outlined-button" style={{ textDecoration: 'none', color: 'black' }}>
                  Add to cart
                </Link>
                <Link to="/buynow" className="filled-button" style={{ textDecoration: 'none', color: 'white' }}>
                  Buy Now!
                </Link>
              </div>
            </div>
          </div>

          <div className="buyerMarketplaceCard">
            <img className="farmerMarketplaceImage" alt="Onion Vector" src={CornVector} />
            <div className="buyerMarketplaceDetails1">
              <div className="buyerMarketplaceProductName center">Corn</div>
              <div className="buyerMarketplaceDetails2">
                <b>Farmer: </b>
                <span>Daniel Raymund Ribaya</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Category: </b>
                <span>Vegetable</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Price: </b>
                <span>Php 5,000</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Packaging: </b>
                <span>Sack</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Kilogram per unit: </b>
                <span>50kgs</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Description:</b>
                <span>A red hound vegetable with good storage quality</span>
              </div>
              <div className="button-row">
                <button className="outlined-button" onClick={handleChatButtonClick}>
                  Chat <RiChat1Line className="chat-icon" />
                </button>
                <Link to="/shoppingCart" className="outlined-button" style={{ textDecoration: 'none', color: 'black' }}>
                  Add to cart
                </Link>
                <Link to="/buynow" className="filled-button" style={{ textDecoration: 'none', color: 'white' }}>
                  Buy Now!
                </Link>
              </div>
            </div>
          </div>
          
          <div className="buyerMarketplaceCard">
            <img className="farmerMarketplaceImage" alt="Onion Vector" src={CornVector} />
            <div className="buyerMarketplaceDetails1">
              <div className="buyerMarketplaceProductName center">Corn</div>
              <div className="buyerMarketplaceDetails2">
                <b>Farmer: </b>
                <span>Daniel Raymund Ribaya</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Category: </b>
                <span>Vegetable</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Price: </b>
                <span>Php 5,000</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Packaging: </b>
                <span>Sack</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Kilogram per unit: </b>
                <span>50kgs</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Description:</b>
                <span>A red hound vegetable with good storage quality</span>
              </div>
              <div className="button-row">
                <button className="outlined-button" onClick={handleChatButtonClick}>
                  Chat <RiChat1Line className="chat-icon" />
                </button>
                <Link to="/shoppingCart" className="outlined-button" style={{ textDecoration: 'none', color: 'black' }}>
                  Add to cart
                </Link>
                <Link to="/buynow" className="filled-button" style={{ textDecoration: 'none', color: 'white' }}>
                  Buy Now!
                </Link>
              </div>
            </div>
          </div>

          <div className="buyerMarketplaceCard">
            <img className="farmerMarketplaceImage" alt="Onion Vector" src={CornVector} />
            <div className="buyerMarketplaceDetails1">
              <div className="buyerMarketplaceProductName center">Corn</div>
              <div className="buyerMarketplaceDetails2">
                <b>Farmer: </b>
                <span>Daniel Raymund Ribaya</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Category: </b>
                <span>Vegetable</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Price: </b>
                <span>Php 5,000</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Packaging: </b>
                <span>Sack</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Kilogram per unit: </b>
                <span>50kgs</span>
              </div>
              <div className="buyerMarketplaceDetails2">
                <b>Description:</b>
                <span>A red hound vegetable with good storage quality</span>
              </div>
              <div className="button-row">
                <button className="outlined-button" onClick={handleChatButtonClick}>
                  Chat <RiChat1Line className="chat-icon" />
                </button>
                <Link to="/shoppingCart" className="outlined-button" style={{ textDecoration: 'none', color: 'black' }}>
                  Add to cart
                </Link>
                <Link to="/buynow" className="filled-button" style={{ textDecoration: 'none', color: 'white' }}>
                  Buy Now!
                </Link>
              </div>
            </div>
          </div>

          {showChatBot && !minimizedChatBot && (
            <div className="chatbot-container">
              <ThemeProvider theme={theme}>
              <ChatBot
                steps={[
                  {
                    id: '1',
                    message: 'Hi, how are you?',
                    trigger: '2',
                  },
                  {
                    id: '2',
                    user: true,
                    trigger: '3',
                  },
                  {
                    id: '3',
                    message: 'You said: {previousValue}',
                    trigger: '2',
                  },
                ]}
                handleEnd={handleEnd}
                botDelay={300}
                opened={showChatBot}
                hideUserAvatar // Optionally hide the user avatar in the chatbot
                headerTitle="Arriane Gatpo"
                hideHeader={false}
                floating={true}
                floatingIcon={<RiChat1Line />}
                customHeaderComponent={<CustomHeaderTitle />}
                
              />
              </ThemeProvider>
            </div>
          )}
          {minimizedChatBot && (
            <div className="chatbot-minimized">
              <button className="chatbot-minimized-button" onClick={() => setMinimizedChatBot(false)}>
                <RiChat1Line className="chatbot-minimized-icon" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BuyerMarketplace;