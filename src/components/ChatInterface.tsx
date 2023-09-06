const fetchChatCompletion = async (input: string) => {
  try {
    const response = await fetch(`${SERVER_ADDRESS}/game`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: input }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error response:', errorResponse);
      throw new Error(`Received ${response.status} ${response.statusText} from server.`);
    }

    const data = await response.json();
    // Extract the list of messages from the response data
    const receivedMessages = data.messages;

    console.log('Success:', data);
    setMessages((prevMessages) => [
      ...prevMessages.slice(0, -1), // Remove the 'thinking...' message
      ...receivedMessages.map((message: ChatMessage) => ({
        type: message.type, // Use the type from the message
        content: message.content, // Use the content from the message
        characterName: message.characterName, // Optional: Use the characterName if available
        characterRole: message.characterRole, // Optional: Use the characterRole if available
      })),
    ]);
  } catch (error) {
    console.error('Error:', error);
    setMessages((prevMessages) => [
      ...prevMessages.slice(0, -1), // Remove the 'thinking...' message
      {
        type: 'system', // Use the type from the response data
        content: "My apologies, adventurer! I'm experiencing some technical difficulties. Let's try that once more.", // Use the content from the response data
      },
    ]);
  }
};
fetchChatCompletion(sanitizedInput);

interface ChatInterfaceProps {
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState('');
    const messagesRef = React.useRef<HTMLDivElement>(null);
    const inputTextRef = React.useRef<HTMLTextAreaElement>(null);
    
    // Generate or retrieve a unique session ID
    const getSessionId = () => {
      const storedSessionId = localStorage.getItem('sessionId');
      if (storedSessionId) {
        return storedSessionId;
      }
      const newSessionId = `session_${Date.now()}`;
      localStorage.setItem('sessionId', newSessionId);
      return newSessionId;
    };

    // const sessionId = getSessionId();

    const sanitizeInput = (input: string) => {
      // Add logic to sanitize user input here
      return input;
    };
    
    const handleSendMessage = (e: React.FormEvent) => {
      e.preventDefault();
      const sanitizedInput = sanitizeInput(inputValue);
      if (sanitizedInput.trim() === '') return;
      setMessages([...messages, { type: 'user', content: sanitizedInput }]);
      setInputValue('');
      fetchChatCompletion(sanitizedInput);
    };
    
    const fetchChatCompletion = async (input: string) => {
      ...
    };
        
            const data = await response.json();
            // Extract the list of messages from the response data
            const receivedMessages = data.messages;

            console.log('Success:', data);
            setMessages((prevMessages) => [
              ...prevMessages.slice(0, -1), // Remove the 'thinking...' message
              ...receivedMessages.map((message: ChatMessage) => ({
                type: message.type, // Use the type from the message
                content: message.content, // Use the content from the message
                characterName: message.characterName, // Optional: Use the characterName if available
                characterRole: message.characterRole, // Optional: Use the characterRole if available
              })),
            ]);

          } catch (error) {
            console.error('Error:', error);
            setMessages((prevMessages) => [
              ...prevMessages.slice(0, -1), // Remove the 'thinking...' message
              {
                type: 'system', // Use the type from the response data
                content: "My apologies, adventurer! I'm experiencing some technical difficulties. Let's try that once more.", // Use the content from the response data
              },
            ]);
          }

          
        }

        fetchChatCompletion();

    };

    const resetInputArea = () => {
        if(!inputTextRef.current) return;
            // Reset the input value and text area height
            inputTextRef.current.value = '';
            inputTextRef.current.style.height = 'auto';
        };
    
      const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
        };
    
      useEffect(() => {
        if (messagesRef.current) {
          messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
      }, [messages]);
    
      const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSendMessage(e);
          resetInputArea();
        }
      };
    
      useEffect(() => {
        setMessages([...messages, { type: 'bot', content: "Ahoy, daring explorer! 🏴‍☠️ Welcome to Adventure World, where thrill and mystery are our middle names! (Actually, we have a lot of middle names.) Get ready to embark on a rollercoaster ride filled with hidden treasures, magical creatures, and mind-bending riddles! So put on your bravest face, and let's venture into the great unknown! (We promise not to feed you to the dragons... probably.) Let the epic quest begin! 🏔🌋🏰🧙‍♂️"}]);
      }, []);

    return (
        <div className="flex flex-col justify-center w-full h-full">
            <div ref={messagesRef} className="flex-1 overflow-y-auto p-4"> 
                {messages.slice().reverse().map((message, index) => (
                    <ChatMessage key={index} message={message} />
                    ))}
            </div>
            
            <form onSubmit={handleSendMessage} className="flex items-end px-4 py-4">
                <div className="flex-grow flex items-center">
                    <textarea
                    ref={inputTextRef}
                    rows={1}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="flex-grow p-2 rounded-md focus:outline-none shadow-md bg-secondary-700 text-white resize-none"
                    placeholder="Type your message here..."
                    />
                    <div className="flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-500 ml-2 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={handleSendMessage}
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M12 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
            </form>

        </div>
        );
}

export default ChatInterface;