// App.js
import React from 'react';
import './App.css';
import Chatbot from './Chatbot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Chatbot</h1>
      </header>
      <main>
        <Chatbot />
      </main>
    </div>
  );
}

export default App;