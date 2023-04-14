// src/components/ChatMessage.tsx

import React from 'react';
import Avatar from 'react-avatar';
import tailwindConfig from '../../tailwind.config.cjs';
import { type } from 'os';

interface Props {
  message: {
    type: 'user' | 'bot' | 'character' | 'system';
    content: string;
    characterName?: string;
    characterRole?: string;
  };
}

const ChatMessage: React.FC<Props> = ({ message }) => {
  const { type, content, characterName, characterRole } = message;
  const isUserMessage = type === 'user';
  let avatarName = '';
  let avatarColor = '';
  let messageBgColor = '';
  let messageTextColor = '';

  // Set values based on message type
  if (type === 'user') {
    avatarName = 'User';
    avatarColor = tailwindConfig.theme.extend.colors.secondary[900];
    messageBgColor = tailwindConfig.theme.extend.colors.secondary[600];
    messageTextColor = '#ECEFF4';
  } else if (type === 'bot' || type === 'system') {
    avatarName = 'Bot';
    avatarColor = tailwindConfig.theme.extend.colors.primary[600];
    messageBgColor = tailwindConfig.theme.extend.colors.purple[400];
    messageTextColor = '#ECEFF4';
  } else if (type === 'character') {
    avatarName = characterName || '';
    avatarColor = tailwindConfig.theme.extend.colors.slated[900];
    messageBgColor = tailwindConfig.theme.extend.colors.slated[800];
    messageTextColor = '#ECEFF4';
    // Customize avatarColor, messageBgColor, and messageTextColor for character messages
  }

  return (
    <div
      className={`flex items-center p-2 my-2 w-9/10 ${
        isUserMessage ?  'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className={`${isUserMessage ? 'mr-2' : 'ml-2'}`}>
        <Avatar name={avatarName} size={'40'} round={false} color={avatarColor}/>
      </div>
      <div
        className={`p-2 rounded-lg max-w-full break-all bg-opacity-90 ${
          isUserMessage ? `${messageBgColor}` : ` ${messageBgColor}`
        }`}
        style={{ backgroundColor: messageBgColor, color: messageTextColor }}
      >
        {type === 'character' && characterRole && (
          <div className="characterRole">{characterRole}</div>
        )}
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;
