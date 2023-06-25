import "../css/Components/postComponent.css";

import SiliVector from '../img/sili.png';
import TomatoVector from '../img/tomatoVector.png';
import SquashVector from '../img/squash.png';
import RiceCardImage from '../img/riceCardImage.png';
import OnionVector from '../img/onionVector.png'
import CornVector from '../img/cornVector.png';


const PostComponent = () => {
  return (
    <div className="postComponentFrame">
      <div className="postComponentParent">
        <b className="postComponentSubTitle">catch up to our posts</b>
        <b className="postComponentTitle">Recent community forum entries</b>
      </div>
      <div className="postComponentCardContainer">
        <div className="postComponentCard1">
          <img
            className="postComponentCard1Image"
            alt=""
            src={OnionVector}
          />
          <div className="postComponentCard1Details">
            <b className="postComponentCard1Title">What is the SRP of Onions?</b>
            <div className="postComponentCard1DescriptionContainer">
              <span>
              The Shortage Risk Premium (SRP) of onions refers to an additional cost or 
              price increase imposed on onions due to the potential scarcity...
              </span>
              <span className="postComponentCard1ViewBlog">view full blog</span>
            </div>
          </div>
        </div>
        <div className="postComponentSmallCards">
          <div className="postComponentCard2">
            <img
              className="postComponentCard2Image"
              alt=""
              src={CornVector}
            />
            <div className="postComponentCard2Details">
              <b className="postComponentCard1Title">How corn grows?</b>
              <div className="postComponentCard1DescriptionContainer">
                <span>
                Corn is grown for various purposes, including human consumption, animal feed, 
                and industrial uses such as biofuel production...
                </span>
                <span className="postComponentCard1ViewBlog1">view full blog</span>
              </div>
            </div>
          </div>     

          <div className="postComponentCard2">
            <img
              className="postComponentCard2Image"
              alt=""
              src={SiliVector}
            />
            <div className="postComponentCard2Details">
              <b className="postComponentCard1Title">What are alternatives for sili?</b>
              <div className="postComponentCard1DescriptionContainer">
                <span>
                Bell peppers are mild and have a crunchy texture, making them a suitable alternative 
                  if you prefer a milder flavor. They come in various colors, such as...
                </span>
                <span className="postComponentCard1ViewBlog1">view full blog</span>
              </div>
            </div>
          </div>     
         

          <div className="postComponentCard2">
            <img
              className="postComponentCard2Image"
              alt=""
              src={SquashVector}
            />
            <div className="postComponentCard2Details">
              <b className="postComponentCard1Title">Can Squash survive summer?</b>
              <div className="postComponentCard1DescriptionContainer">
                <span>
                Squash plants have relatively high water needs, especially during the summer when evaporation rates are high. 
                    Adequate irrigation is crucial to ensure the...
                </span>
                <span className="postComponentCard1ViewBlog1">view full blog</span>
              </div>
            </div>
          </div>     
         
          <div className="postComponentCard2">
            <img
              className="postComponentCard2Image"
              alt=""
              src={TomatoVector}
            />
            <div className="postComponentCard2Details">
              <b className="postComponentCard1Title">Is Tomato a good source?</b>
              <div className="postComponentCard1DescriptionContainer">
                <span>
                Vitamins and minerals: Tomatoes are rich in essential vitamins and minerals. 
                    They are an excellent source of vitamin C, which supports immune function and...
                </span>
                <span className="postComponentCard1ViewBlog1">view full blog</span>
              </div>
            </div>
          </div>     
         
         
        </div>
      </div>
    </div>
  );
};

export default PostComponent;


