import React from 'react';
import { render } from '@testing-library/react';
import ChatMessage from '../components/ChatMessage';

describe('ChatMessage component', () => {
  const messageTypes = ['user', 'bot', 'character', 'system'];

  messageTypes.forEach((type) => {
    test(`renders correctly with ${type} message`, () => {
      const message = {
        type,
        content: 'Test message',
      };

      const { asFragment } = render(<ChatMessage message={message} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  test('sanitizes potentially harmful strings', () => {
    const harmfulString = '<img src="x" onerror="alert(\'Hacked!\')" />';
    const message = {
      type: 'user',
      content: harmfulString,
    };

    const { getByText } = render(<ChatMessage message={message} />);
    expect(getByText(harmfulString)).toBeInTheDocument();
  });
});
