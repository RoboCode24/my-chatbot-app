import { render, screen } from '@testing-library/react';
import Chatbot from './Chatbot'; 

test('renders chatbot component', () => {
  render(<Chatbot />);
  const chatbotElement = screen.getByTestId('chatbot');
  expect(chatbotElement).toBeInTheDocument();
});

