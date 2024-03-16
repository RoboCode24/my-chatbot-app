// Chatbot.js
import React, { useState } from 'react';

const Chatbot = ({ handleInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (handleInputChange) {
      handleInputChange(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type a message..."
        value={inputValue}
        onChange={handleChange}
      />
      <button>Send</button>
    </div>
  );
};

export default Chatbot;
// Chatbot.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Chatbot from './Chatbot';

describe('Chatbot', () => {
  test('should handle input change', () => {
    const input = 'Hello, world!';
    const { getByPlaceholderText } = render(<Chatbot />);
    const inputEl = getByPlaceholderText('Type a message...');

    userEvent.type(inputEl, input);

    expect(inputEl).toHaveValue(input);
  });

  test('should call handleInputChange when input value changes', () => {
    const handleInputChange = jest.fn();
    const input = 'Hello, world!';
    render(<Chatbot handleInputChange={handleInputChange} />);

    const inputEl = screen.getByPlaceholderText('Type a message...');
    userEvent.type(inputEl, input);

    expect(handleInputChange).toHaveBeenCalledWith(input);
  });
});
