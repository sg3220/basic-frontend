import React, { useRef } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const inputRef = useRef(null);

  const handleSend = () => {
    const userInput = inputRef.current.value;
    if (userInput.trim()) {
      onSendMessage(userInput);
      inputRef.current.value = '';
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="ChatInputWrapper">
      <div className="ChatInput">
        <input
          ref={inputRef}
          id="input001"
          type="text"
          placeholder="Send a message..."
          onKeyDown={handleKeyDown}
        />
        <span
          onClick={handleSend}
          className="material-symbols-outlined sendData"
        >
          send
        </span>
      </div>
    </div>
  );
};

export default ChatInput;
