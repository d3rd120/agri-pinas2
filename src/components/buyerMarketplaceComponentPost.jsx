import React, { useState } from 'react';
import "../css/BuyerPage/buyermarketplace.css"
import BuyerNavigation from "./buyerNavigation";
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import TomatoVector from '../img/tomatoVector.png';
import { FaCartArrowDown, FaCartPlus, FaCommentDots, FaComments, FaEdit, FaTrash } from 'react-icons/fa';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { RiChat1Line } from 'react-icons/ri';
import {Link} from 'react-router-dom';

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
    <div className="buyerMarketplaceComponentPost">
      <BuyerNavigation />
      <div className="buyerMarketplaceComponentPostMainPanel">
        <div className="buyerMarketplaceComponentPostTopSection">
          <div className="buyerMarketplaceComponentPostMainTextContainer">
            <b className="buyerMarketplaceComponentPostMainTextWrapper">
              <p className="buyerMarketplaceComponentPostBlankLine">&nbsp;</p>
              <p className="buyerMarketplaceComponentPostBlankLine">&nbsp;</p>
              <p className="buyerMarketplaceComponentPostBlankLine">Marketplace</p>
            </b>
          </div>
        </div>
        <div className="buyerMarketplaceComponentPostMiddleSection">
          <div className="buyerMarketplaceComponentPostCardsContainer">
            <div className="buyerMarketplaceComponentPostCard1">
              <img
                className="buyerMarketplaceComponentPostCard1Image"
                alt=""
                src={CornVector}
              />
            </div>
            <div className="buyerMarketplaceComponentPostSmallCards">
              <div className="buyerMarketplaceComponentPostSmallCardsDescription">
                <div className="buyerMarketplaceComponentPostSmallCardsContent">
                  <div className="buyerMarketplaceComponentPostSmallCardsHeading">
                    <div className="buyerMarketplaceComponentPostSmallCardsDetails">
                      <b className="buyerMarketplaceComponentPostSmallCardsProductName">Corn</b>
                      <b className="buyerMarketplaceComponentPostSmallCardsBuyerName">Farmer: Jenkins Mesina</b>
                    </div>
                    <div className="buyerMarketplaceComponentPostSmallCardsDescriptionWrapper">
                      <div className="buyerMarketplaceComponentPostSmallCardsFullDescription">
                        <p className="buyerMarketplaceComponentPostBlankLine">
                          <b>{`Category: `}</b>
                          <span className="buyerMarketplaceComponentPostBlankLine">Vegetable</span>
                        </p>
                        <p className="buyerMarketplaceComponentPostBlankLine">
                          <b>{`Packaging: `}</b>
                          <span className="buyerMarketplaceComponentPostCategory">Sack</span>
                        </p>
                        <p className="buyerMarketplaceComponentPostBlankLine">
                          <b className="buyerMarketplaceComponentPostCategory">{`Price: `}</b>
                          <span>Php 3,000</span>
                        </p>
                        <p className="buyerMarketplaceComponentPostBlankLine">
                          <b>{`Kilogram per unit: `}</b>
                          <span className="buyerMarketplaceComponentPostCategory">50 kgs</span>
                        </p>
                        <p className="buyerMarketplaceComponentPostBlankLine">
                          <b className="buyerMarketplaceComponentPostCategory">{`Description: `}</b>
                          <span>
                            Onions are a versatile and widely used vegetable
                            known for their distinct flavor and pungent aroma.
                            They belong to the Allium genus, which also includes
                            garlic, shallots, and chives. Onions come in various
                            shapes, sizes, and colors, ranging from small and
                            white to large and yellow or red.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="buyerMarketplaceComponentPostButtonContainer">
                      <div className="buyerMarketplaceComponentPostButtonRow">
                        <button className="buyerMarketplaceComponentPostButton outlinedButton" onClick={handleChatButtonClick}>
                          <FaCommentDots className="buyerMarketplaceComponentPostButtonIcon" />
                          <div className="buyerMarketplaceComponentPostButtonText">Chat</div>
                        </button>
                        <a href="/shoppingcart">
                          <button className="buyerMarketplaceComponentPostButton outlinedButton">
                            <FaCartArrowDown className="buyerMarketplaceComponentPostButtonIcon" />
                            <div className="buyerMarketplaceComponentPostButtonText">Add to Cart</div>
                          </button>
                        </a>
                        <a href="/buynow" style={{ textDecoration: 'none' }}>
                           <button className="buyerMarketplaceComponentPostButton outlinedButton">
                              <FaCartArrowDown className="buyerMarketplaceComponentPostButtonIcon" />
                              <div className="buyerMarketplaceComponentPostButtonText">Buy Now</div>
                           </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buyerMarketplaceComponentPostButtonNew">
          <div className="buyerMarketplaceComponentPostButtonNewTitle">FROM THE SAME SHOP</div>
          <div className="buyerMarketplaceComponentPostButtonNewCourses">
            <Link className="buyerMarketplaceComponentPostButtonNewCard1" to = '/buyermarketplacepost'style={{ textDecoration: 'none' }}>
              <img
                className="buyerMarketplaceComponentPostButtonNewCard1Image" 
                alt=""
                src={TomatoVector}
              />
              <div className="buyerMarketplaceComponentPostButtonNewCard1Details">
                <div className="buyerMarketplaceComponentPostButtonNewCard1DetailsInner">
                  <div className="buyerMarketplaceComponentPostButtonNewCard1Wrapper">
                    <div className="buyerMarketplaceComponentPostButtonNewCard1Title">Tomato</div>
                    <div className="buyerMarketplaceComponentPostButtonNewCard1Price">₱5,000</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="buyerMarketplaceComponentPostButtonNewCard1" to = '/buyermarketplacepost' style={{ textDecoration: 'none' }}>
              <img
                className="buyerMarketplaceComponentPostButtonNewCard1Image"
                alt=""
                src={OnionVector}
              />
              <div className="buyerMarketplaceComponentPostButtonNewCard1Details">
                <div className="buyerMarketplaceComponentPostButtonNewCard1DetailsInner">
                  <div className="buyerMarketplaceComponentPostButtonNewCard1Wrapper">
                    <div className="buyerMarketplaceComponentPostButtonNewCard1Title">Onion</div>
                    <div className="buyerMarketplaceComponentPostButtonNewCard1Price">₱3,000</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="buyerMarketplaceComponentPostButtonNewCard1" to = '/buyermarketplacepost' style={{ textDecoration: 'none' }}>
              <img
                className="buyerMarketplaceComponentPostButtonNewCard1Image"
                alt=""
                src={RiceVector}
              />
              <div className="buyerMarketplaceComponentPostButtonNewCard1Details">
                <div className="buyerMarketplaceComponentPostButtonNewCard1DetailsInner">
                  <div className="buyerMarketplaceComponentPostButtonNewCard1Wrapper">
                    <div className="buyerMarketplaceComponentPostButtonNewCard1Title">Rice</div>
                    <div className="buyerMarketplaceComponentPostButtonNewCard1Price">₱2,000</div>
                  </div>
                </div>
              </div>
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
                hideUserAvatar 
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
  );
};

export default BuyerMarketplace;
