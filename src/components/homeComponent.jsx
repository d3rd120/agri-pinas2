import "../css/Components/homeComponent.css";
import { Link } from 'react-router-dom';

const HomeComponent = () => {
  return (
    <div className="homeComponent">
      <div className="homeComponentBackground">
        <div className="homeComponentSet">
          <div className="homeComponentTagLine">
            <b className="homeComponentTitleContainer">
              <p className="homeComponentContainerText">Fresh from the farm,</p>
              <p className="homeComponentContainerText">delivered to your door.</p>
            </b>
            <div className="homeComponentTextContainer">
              <p className="homeComponentContainerText">Let’s help farmers!</p>
              <p className="homeComponentContainerText">
                Direct link between farmers and consumers
              </p>
            </div>
          </div>
          <Link className="homeComponentButton" to = '/login'>
            <div className="homeComponentMore">More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
