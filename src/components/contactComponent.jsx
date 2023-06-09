import "../css/Components/contactComponent.css";


const ContactComponent = () => {
  return (
    <div className="contactComponentForm">
      <div className="contactComponentMainText">Contact Us</div>
      <div className="contactComponentFrameParent">
        <div className="contactComponentFrameGroup">
          <div className="contactComponentNameParent">
            <div className="contactComponentInputText">Name</div>
            <input
              className="contactComponentEmail" id = "contactComponentName"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="contactComponentNameParent">
            <div className="contactComponentInputText">Email Address</div>
            <input
              className="contactComponentEmail1" id = "contactComponentEmail"
              type="text"
              placeholder="Enter your email address"
            />
          </div>
          <div className="contactComponentNameParent">
            <div className="contactComponentInputText">
              <span>Phone Number</span>
              <span className="contactComponentOptional"> (Optional)</span>
            </div>
            <input 
            className="contactComponentEmail1" id = "contactComponentPhoneNumber"
            type="text"
            placeholder = "Enter your phone number"
            />
          </div>
        </div>
        <div className="contactComponentMessageParent">
          <div className="contactComponentInputText">Message</div>
          <textarea 
          className="contactComponentEmail3" id = "contactComponentMessage"
          placeholder="Enter your message" />
        </div>
      </div>
      <button className="contactComponentButton">
        <b className="contactComponentSendMessage">Send message</b>
      </button>
    </div>
  );
};

export default ContactComponent;
