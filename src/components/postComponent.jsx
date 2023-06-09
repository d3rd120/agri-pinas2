import "../css/Components/postComponent.css";
import FarmingCardImage from '../img/farmingCardImage.png';
import OnionCardImage from '../img/onionCardImage.png';
import ElNinoCardImage from '../img/elNinoCardImage.png';
import CarrotCardImage from '../img/carrotCardImage.png';
import RiceCardImage from '../img/riceCardImage.png';


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
            src={CarrotCardImage}
          />
          <div className="postComponentCard1Details">
            <b className="postComponentCard1Title">Recent Price Hike on Carrots</b>
            <div className="postComponentCard1DescriptionContainer">
              <span>
                The recent price hike on carrots has sparked concerns and drawn
                public attention to the escalating cost of this commonly
                consumed vegetable...
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
              src={OnionCardImage}
            />
            <div className="postComponentCard2Details">
              <b className="postComponentCard1Title">How to Plant Onions?</b>
              <div className="postComponentCard1DescriptionContainer">
                <span>
                  Onions are a versatile and widely consumed vegetable that can
                  be grown in various climates and regions...
                </span>
                <span className="postComponentCard1ViewBlog1">view full blog</span>
              </div>
            </div>
          </div>     

          <div className="postComponentCard2">
            <img
              className="postComponentCard2Image"
              alt=""
              src={ElNinoCardImage}
            />
            <div className="postComponentCard2Details">
              <b className="postComponentCard1Title">El Nino</b>
              <div className="postComponentCard1DescriptionContainer">
                <span>
                El Niño, a natural climate phenomenon, has long captured the fascination and curiosity of scientists, 
                researchers, and the general public alike...
                </span>
                <span className="postComponentCard1ViewBlog1">view full blog</span>
              </div>
            </div>
          </div>     
         

          <div className="postComponentCard2">
            <img
              className="postComponentCard2Image"
              alt=""
              src={FarmingCardImage}
            />
            <div className="postComponentCard2Details">
              <b className="postComponentCard1Title">Farming Tips</b>
              <div className="postComponentCard1DescriptionContainer">
                <span>
                Farming, the backbone of human civilization, has evolved significantly over the centuries. 
                Today, farmers face numerous challenges, including climate change...
                </span>
                <span className="postComponentCard1ViewBlog1">view full blog</span>
              </div>
            </div>
          </div>     
         
          <div className="postComponentCard2">
            <img
              className="postComponentCard2Image"
              alt=""
              src={RiceCardImage}
            />
            <div className="postComponentCard2Details">
              <b className="postComponentCard1Title">Rice Planting</b>
              <div className="postComponentCard1DescriptionContainer">
                <span>
                Rice, a staple food for more than half of the world's population, 
                plays a vital role in global food security....
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


