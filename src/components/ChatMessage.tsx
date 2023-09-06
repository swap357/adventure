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

  const messageConfig = {
    user: {
      avatarName: 'User',
      avatarColor: tailwindConfig.theme.extend.colors.secondary[900],
      messageBgColor: tailwindConfig.theme.extend.colors.secondary[600],
      messageTextColor: '#ECEFF4',
    },
    bot: {
      avatarName: 'Bot',
      avatarColor: tailwindConfig.theme.extend.colors.primary[600],
      messageBgColor: tailwindConfig.theme.extend.colors.purple[400],
      messageTextColor: '#ECEFF4',
    },
    system: {
      avatarName: 'Bot',
      avatarColor: tailwindConfig.theme.extend.colors.primary[600],
      messageBgColor: tailwindConfig.theme.extend.colors.purple[400],
      messageTextColor: '#ECEFF4',
    },
    character: {
      avatarName: characterName || '',
      avatarColor: tailwindConfig.theme.extend.colors.slated[900],
      messageBgColor: tailwindConfig.theme.extend.colors.slated[800],
      messageTextColor: '#ECEFF4',
    },
  };

  const { avatarName, avatarColor, messageBgColor, messageTextColor } = messageConfig[type];

  return (
    <div
      className={`flex items-center p-2 my-2 w-9/10 ${
        isUserMessage ?  'flex-row' : 'flex-row-reverse'
      }`}
    >
      <AvatarComponent isUserMessage={isUserMessage} avatarName={avatarName} avatarColor={avatarColor} />
      <MessageComponent isUserMessage={isUserMessage} messageBgColor={messageBgColor} messageTextColor={messageTextColor} type={type} characterRole={characterRole} content={message.content} />
    </div>
  );
};

export default ChatMessage;
