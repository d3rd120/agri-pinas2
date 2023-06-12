import React from 'react';
import Homenav from '../../components/buyerNavigation';
import HeaderTitle from '../../components/headerTitle';
import '../../css/Farmer Page/farmerCommunityForum.css';
import LikeVector from '../../img/likeVector.png';
import CommentVector from '../../img/commentVector.png';
import CornVector from '../../img/farmerMarkeplaceVector1.png';
import OnionVector from '../../img/farmerMarkeplaceVector2.png';
import ProfileVector from '../../img/profileVector.png';
import CommunityForumCard from '../../components/communityForumCard';

const BuyerCommunity = () => {
  const handleLike = () => {
    // handle like functionality
  };

  const handleComment = () => {
    // handle comment functionality
  };

  return (
    <>
      <Homenav />
      <HeaderTitle> Community Forum </HeaderTitle>

      <CommunityForumCard
        profileImage={ProfileVector}
        name="Ryan Edward Amador"
        description="What is the Current SRP of Onions?"
        cornVector={CornVector}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleLike}>
            <img src={LikeVector} alt="Like" />
          </button>
          <button onClick={handleComment}>
            <img src={CommentVector} alt="Comment" />
          </button>
        </div>
      </CommunityForumCard>

    </>
  );
};

export default BuyerCommunity;