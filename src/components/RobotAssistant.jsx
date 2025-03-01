import { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const RobotAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const messages = [
    "Hi there! I'm your assistant. Keep in mind, am analyzing your behaviour 😈",
    " Check out the Show Case and Slow Reading sections!",
    " Feel free to explore my projects.",
    " Need help? Just click on me."
  ];

  useEffect(() => {
    // Show assistant after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible || isClosed) return;
    
    let i = 0;
    const text = messages[messageIndex];
    
    // Clear previous text
    setCurrentText('');
    
    // Typing animation
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setCurrentText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        
        // Change message after 4 seconds
        setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 4000);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, [isVisible, messageIndex, isClosed]);

  if (!isVisible || isClosed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end">
      <div className="flex flex-col items-end space-y-2 animate-assistant-enter">
        <div className="max-w-xs bg-blue-900/90 backdrop-blur-sm rounded-lg p-4 shadow-xl">
          <button 
            onClick={() => setIsClosed(true)}
            className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 rounded-full p-1 transition-colors"
          >
            <IoMdClose className="w-3.5 h-3.5" />
          </button>
          <p className="text-sm">{currentText}</p>
        </div>
        
        <button 
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg 
                     hover:scale-110 transition-transform duration-200 focus:outline-none 
                     focus:ring-2 focus:ring-blue-500 animate-pulse-glow"
          aria-label="Robot Assistant"
        >
          <FaRobot className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default RobotAssistant;
