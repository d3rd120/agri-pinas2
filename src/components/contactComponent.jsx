import "../css/Components/contactComponent.css";


const Form = () => {
  return (
    <div className="form">
      <div className="contact-us">Contact Us</div>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="name-parent">
            <div className="name">Name</div>
            <input
              className="email"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="name-parent">
            <div className="name">Email Address</div>
            <input
              className="email1"
              type="text"
              placeholder="Enter your email address"
            />
          </div>
          <div className="name-parent">
            <div className="name">
              <span>Phone Number</span>
              <span className="optional"> (Optional)</span>
            </div>
            <input 
            className="email1" 
            type="text"
            placeholder = "Enter your phone number"
            />
          </div>
        </div>
        <div className="message-parent">
          <div className="name">Message</div>
          <textarea 
          className="email3" 
          placeholder="Enter your message" />
        </div>
      </div>
      <button className="search-flights-button">
        <b className="button">Send message</b>
      </button>
    </div>
  );
};

export default Form;
