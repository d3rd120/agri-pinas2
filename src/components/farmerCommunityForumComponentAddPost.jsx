import '../css/Components/farmerCommunityForumComponentAddPost.css';



const farmerCommunityForumAddPostComponent  = () =>  {
  return (
    <div className="farmerCommunityForumAddPostComponent">
      <div className="farmerCommunityForumAddPostComponentMainText">Write a Post</div>
      <div className="farmerCommunityForumAddPostComponentFrameParent">
        <div className="farmerCommunityForumAddPostComponentFrameGroup">
          <div className="farmerCommunityForumAddPostComponentInputParent">
            <div className="farmerCommunityForumAddPostComponentTitle">Post Title</div>
            <input
              className="farmerCommunityForumAddPostComponentInput1"
              type="text"
              placeholder="Enter your post title"
            />
          </div>
          <div className="farmerCommunityForumAddPostComponentInputParent">
            <div className="farmerCommunityForumAddPostComponentTitle">Post Image (Optional)</div>
            <input className="farmerCommunityForumAddPostComponentInput3" type="file" required />
          </div>
          <div className="farmerCommunityForumAddPostComponentTitle">Description</div>
          <textarea className="farmerCommunityForumAddPostComponentInput4" placeholder="Enter your description" />
          <button className="farmerCommunityForumAddPostComponentButton">
          <div className="farmerCommunityForumAddPostComponentButtonText">Add</div>
          </button>
          <div className="farmerCommunityForumAddPostComponentFormChild" />
        </div>        
      </div>     
    </div>
  );
};


export default farmerCommunityForumAddPostComponent;


