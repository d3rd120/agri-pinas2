import "../css/Components/homeComponent.css";

const Offer = () => {
  return (
    <div className="offer">
      <div className="background">
        <div className="cta">
          <div className="taglines">
            <b className="fresh-from-the-container">
              <p className="fresh-from-the">Fresh from the farm,</p>
              <p className="fresh-from-the">delivered to your door.</p>
            </b>
            <div className="lets-help-farmers-container">
              <p className="fresh-from-the">Let’s help farmers!</p>
              <p className="fresh-from-the">
                Direct link between farmers and consumers
              </p>
            </div>
          </div>
          <button className="button">
            <div className="more">More</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
