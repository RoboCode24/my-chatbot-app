// Chatbot.js
import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Simple chatbot responses
    let response;
    if (input.toLowerCase().includes('hello')) {
      response = "Hi there! How can I assist you today?";
    } else if (input.toLowerCase().includes('how are you')) {
      response = "I'm just a chatbot, but thanks for asking!";
    } else {
      response = "I'm sorry, I didn't understand that.";
    }

    setMessages([...messages, { text: input, sender: 'user' }]);
    setMessages([...messages, { text: response, sender: 'bot' }]);
    setInput('');
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
