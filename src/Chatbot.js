// Chatbot.js
import React, { useState } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Chatbot from './Chatbot';

describe('Chatbot', () => {
  test('should call handleInputChange when input value changes', () => {
    const handleInputChange = jest.fn();
    render(<Chatbot handleInputChange={handleInputChange} />);

    const input = screen.getByPlaceholderText('Type a message...');
    userEvent.type(input, 'Hello, world!');

    expect(handleInputChange).toBeCalledWith('Hello, world!');
  });

  test('should handle input change', () => {
    const input = 'Hello, world!';
    const expected = 'Hello, world!';

    const { getByPlaceholderText } = render(<Chatbot />);
    const inputEl = getByPlaceholderText('Type a message...');

    userEvent.type(inputEl, input);

    expect(inputEl.value).toBe(expected);
  });
});

export default Chatbot;
