import React, { useState } from 'react';
import "../css/BuyerPage/buyerCommunityForumPost.css"
import BuyerNavigation from '../components/buyerNavigation';
import OnionVector from '../img/onionVector.png';
import CornVector from '../img/cornVector.png';
import RiceVector from '../img/riceCardImage.png';
import TomatoVector from '../img/tomatoVector.png';
import { FaThumbsUp } from 'react-icons/fa';
import { Modal,  Button } from '@material-ui/core';
import BuyerTopNav from '../components/buyerTopNav';


const BuyerCommunityForum = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleEditClick = () => {
    setOpenEditModal(true);
  };

  const handleDeleteClick = () => {
    setOpenDeleteModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
    setOpenDeleteModal(false);
  };

  const handleSave = () => {
    setOpenEditModal(false);
  };

  const handleDelete = () => {
    setOpenDeleteModal(false);
  };

  return (
      <div className="buyerCommunityForumComponentFullPost">
          <BuyerNavigation />     
          <div className="farmerMarketplaceComponentMainPanel">
        <BuyerTopNav /> 
        <div className="farmerCommunityForumComponentTopSection">
          <div className="farmerCommunityForumComponentMainText1">
            <b className="farmerCommunityForumComponentMainText2">             
              <p className="farmerCommunityForumComponentBlankLine">&nbsp;</p>
              <p className="farmerCommunityForumComponentBlankLine">Community Forum</p>
            </b>
          </div>
        </div>
          
          <div className="buyerCommunityForumComponentFullPostMiddleSection">
            <div className="buyerCommunityForumComponentFullPostCardsContainer">
              <div className="buyerCommunityForumComponentFullPostCard1">
                <img
                  className="buyerCommunityForumComponentFullPostCard1Image"
                  alt=""
                  src={OnionVector}
                />
              </div>
              <div className="buyerCommunityForumComponentFullPostSmallCards">
                <div className="buyerCommunityForumComponentFullPostSmallCardsDescription">
                <div className="farmerCommunityForumComponentFullPostSmallCardsContent">
                    <div className="farmerCommunityForumComponentFullPostSmallCardsHeading">
                    <div class="farmerCommunityForumComponentFullPostSmallCardsDetails">
  <b class="farmerCommunityForumComponentFullPostSmallCardsMainText">What is the SRP of Onions?</b>
  <b class="farmerCommunityForumComponentFullPostSmallCardsDescription1">Posted by: Jenkins Mesina</b>

  <div>
      <div className="popup-menu">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="menu">
          <button className="edit-button" onClick={handleEditClick}>Edit</button>
          <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>

      <Modal open={openEditModal} onClose={handleClose}>
        <div className="editModal">
          <h2>Edit your Post</h2>
          <br />
          <div className={`farmerMarketplaceEditProductComponentInputParent`}>
            <div className="farmerMarketplaceEditProductComponentTitle">Post Title</div>
            <input
              className={`farmerMarketplaceEditProductComponentInput2`}
              type="text"
              placeholder="Enter your post title"
            />
          </div>
          <br></br>
          <div className={`farmerMarketplaceEditProductComponentInputParent`}>
            <div className="farmerMarketplaceEditProductComponentTitle">Post Image (Optional)</div>
            <input
              className={`farmerMarketplaceEditProductComponentInput2`}
              type="file"
            />
            </div>
            <br></br>
            <div className="farmerMarketplaceEditProductComponentInputParent">
  <div className="farmerMarketplaceEditProductComponentTitle">Description</div>
  <textarea
    className="farmerMarketplaceEditProductComponentInput2"
    placeholder="Enter your questions or thoughts"
  ></textarea>
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
      <Modal open={openDeleteModal} onClose={handleClose}>
        <div className="deleteModal">
          <h2>Confirmation</h2>
          <p>Do you want to delete this post?</p>
          <div className="buttonContainer1">
            <Button variant="contained" color="primary" onClick={handleClose} className="cancelButton1">
              Cancel
            </Button>
            <Button variant="contained" color="secondary" onClick={handleDelete} className="deleteButton">
              Delete
            </Button>
          </div>
        </div>
      </Modal>
</div>
</div>
             <div className="farmerCommunityForumComponentFullPostSmallCardsDescriptionWrapper">
                        <div className="farmerCommunityForumComponentFullPostSmallCardsFullDescription1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                          non proident, sunt in culpa qui officia deserunt mollit
                          anim id est laborum.
                        </div>
                      </div>
                      <b className="farmerCommunityForumComponentFullPostSmallCardsDescription2">24 people liked this post.</b>
                      <button className="farmerCommunityForumComponentFullPostButton">
                          <FaThumbsUp className="farmerCommunityForumComponentFullPostButtonIcon" />
                          <div className="farmerCommunityForumComponentFullPostButtonText">Like</div>
                      </button>
                    </div>
                    <div class="farmerCommunityForumComponentFullPostCommentInputWrapper">
                     <input
                         class="farmerCommunityForumComponentFullPostCommentInput"type="text"placeholder="Comment Here"/>
                       <button class="farmerCommunityForumComponentFullPostCommentInputButton">
                         <i class="fa fa-arrow-right"></i>
                        </button>
                    </div>
                    <div className="farmerCommunityForumComponentFullPostSmallCardsDescriptionWrapper">
                      <div className="farmerCommunityForumComponentFullPostSmallCardsFullDescription">
                        <p className="farmerCommunityForumComponentFullPostBlankLine">
                          <b>Comments:</b>
                        </p>
                        <p className="farmerCommunityForumComponentFullPostBlankLine">
                          <b>&nbsp;</b>
                        </p>
                        <p className="farmerCommunityForumComponentFullPostBlankLine">
                          <b>{`Ryan Edward Amador: `}</b>
                          <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</span>
                        </p>
                        <p className="farmerCommunityForumComponentFullPostBlankLine">
                          <b>&nbsp;</b>
                        </p>
                        <p className="farmerCommunityForumComponentFullPostBlankLine">
                          <b>{`Marievic Anes: `}</b>
                          <span>
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                          </span>
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        <div className="buyerCommunityForumComponentFullPostNewCard">
          <div className="buyerCommunityForumComponentFullPostNewCardMainText">Other Posts</div>
          <div className="buyerCommunityForumComponentFullPostNewCardText">
            <button className="buyerCommunityForumComponentFullPostNewCardButton">
              <img
                className="buyerCommunityForumComponentFullPostNewCardImage"
                alt=""
                src={CornVector}
              />
              <div className="buyerCommunityForumComponentFullPostNewCardDetails">
                <div className="buyerCommunityForumComponentFullPostNewCardInner">
                  <div className="buyerCommunityForumComponentFullPostNewCardTitleWrapper">
                    <div className="buyerCommunityForumComponentFullPostNewCardTitle">How Corn Grows?</div>
                  </div>
                </div>
              </div>
            </button>

             <button className="buyerCommunityForumComponentFullPostNewCardButton">
              <img
                className="buyerCommunityForumComponentFullPostNewCardImage"
                alt=""
                src={RiceVector}
              />
              <div className="buyerCommunityForumComponentFullPostNewCardDetails">
                <div className="buyerCommunityForumComponentFullPostNewCardInner">
                  <div className="buyerCommunityForumComponentFullPostNewCardTitleWrapper">
                    <div className="buyerCommunityForumComponentFullPostNewCardTitle">Rice Planting</div>
                  </div>
                </div>
              </div>
            </button>             

            <button className="buyerCommunityForumComponentFullPostNewCardButton">
              <img
                className="buyerCommunityForumComponentFullPostNewCardImage"
                alt=""
                src={TomatoVector}
              />
              <div className="buyerCommunityForumComponentFullPostNewCardDetails">
                <div className="buyerCommunityForumComponentFullPostNewCardInner">
                  <div className="buyerCommunityForumComponentFullPostNewCardTitleWrapper">
                    <div className="buyerCommunityForumComponentFullPostNewCardTitle">How to plant Tomatoes?</div>
                  </div>
                </div>
              </div>
            </button> 
           
          </div>
        </div>
      </div>
      </div>
     
  );
};

export default BuyerCommunityForum;
