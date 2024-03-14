
// App.js
import React, { useState } from 'react';
import './App.css';
import FaceComponent from './FaceComponent';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    // Process user's message
    setMessages([...messages, { text: input, sender: 'user' }]);
    // Simulate chatbot's response after 1 second
    setTimeout(() => {
      setMessages([...messages, { text: "I'm a chatbot! How can I help you?", sender: 'bot' }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Humanoid Chatbot</h1>
      </header>
      <main>
        <FaceComponent isChatting={messages.length > 0 && messages[messages.length - 1].sender === 'bot'} />
        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-form">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </main>
    </div>
  );
};

export default App;
