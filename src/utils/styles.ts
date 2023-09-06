// src/utils/styles.ts

import tailwindConfig from '../tailwind.config.cjs';

interface MessageTypeStyles {
  avatarName: string;
  avatarColor: string;
  messageBgColor: string;
  messageTextColor: string;
}

export const getMessageTypeStyles = (type: 'user' | 'bot' | 'character' | 'system', characterName?: string): MessageTypeStyles => {
  switch (type) {
    case 'user':
      return {
        avatarName: 'User',
        avatarColor: tailwindConfig.theme.extend.colors.secondary[900],
        messageBgColor: tailwindConfig.theme.extend.colors.secondary[600],
        messageTextColor: '#ECEFF4',
      };
    case 'bot':
    case 'system':
      return {
        avatarName: 'Bot',
        avatarColor: tailwindConfig.theme.extend.colors.primary[600],
        messageBgColor: tailwindConfig.theme.extend.colors.purple[400],
        messageTextColor: '#ECEFF4',
      };
    case 'character':
      return {
        avatarName: characterName || '',
        avatarColor: tailwindConfig.theme.extend.colors.slated[900],
        messageBgColor: tailwindConfig.theme.extend.colors.slated[800],
        messageTextColor: '#ECEFF4',
      };
  }
};
