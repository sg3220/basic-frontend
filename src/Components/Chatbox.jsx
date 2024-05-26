const Chatbox = ({ messages }) => {
  return (
    <div className="ChatboxWrapper">
      <div className="Chatbox">
        {messages.map((message) => (
          <div key={message.id} className="ChatWrapper">
            <img className="userImage" src={message.userImage} alt="" />
            <div className="Chat">{message.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbox;
