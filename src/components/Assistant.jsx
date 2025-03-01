import React, { useEffect, useState } from 'react';

export const Assistant: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${isVisible ? 'animate-assistant-enter' : 'opacity-0'}`}>
      <div className="assistant-text">
        <p className="mb-4">
          Hi! I'm your AI assistant, ready to help you explore this portfolio.
        </p>
        <p className="mb-3">
          Let me guide you through what's available here:
        </p>
        <ul className="space-y-2">
          <li>
            Click the <span className="font-bold text-primary">Showcase</span> button 
            to discover my portfolio of projects and see what I've been working on.
          </li>
          <li>
            Visit my <span className="font-bold text-primary">Personal Blog</span> to 
            explore my learning journey and insights I've gained along the way.
          </li>
        </ul>
      </div>
    </div>
  );
};
