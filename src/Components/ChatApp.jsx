import React, { useState } from 'react';
import Chatbox from './Chatbox';
import ChatInput from './ChatInput';
import '../App.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    // Message Ko Chatbox Mein Add
    const userMessage = {
      id: messages.length + 1,
      text: message,
      userImage:
        'https://res.cloudinary.com/djywrhroe/image/upload/v1716727423/Shaurya-Frontend/User_rs1dqt.png',
    };

    setMessages([...messages, userMessage]);

    // Backend Processing
    try {
      const response = await fetch('Shaurya-Prompt-Endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        const data = await response.json();
        const backendMessage = {
          id: messages.length + 2, // JSON Mein "id" Field Dalna
          text: data.message, // JSON Mein "message" Field Dalna
          userImage:
            'https://res.cloudinary.com/djywrhroe/image/upload/v1716726820/Shaurya-Frontend/Logo_p0m3hp.jpg',
        };

        setMessages((prevMessages) => [...prevMessages, backendMessage]);
      } else {
        console.error('Failed to send message to backend');
      }
    } catch (error) {
      console.error('Error sending message to backend:', error);
    }
  };

  return (
    <div className="ChatApp">
      <Chatbox messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
