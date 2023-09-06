// src/tests/ChatInterface.test.tsx

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ChatInterface from '../components/ChatInterface';

describe('ChatInterface component', () => {
  it('renders without crashing', () => {
    const { getByPlaceholderText } = render(<ChatInterface />);
    expect(getByPlaceholderText('Type your message here...')).toBeInTheDocument();
  });

  it('handles user input correctly', async () => {
    const { getByPlaceholderText } = render(<ChatInterface />);
    const input = getByPlaceholderText('Type your message here...');

    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(input.value).toBe('Hello');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    await waitFor(() => expect(input.value).toBe(''));
  });

  // Add more tests as needed
});
