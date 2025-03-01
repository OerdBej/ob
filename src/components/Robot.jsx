import { useEffect } from 'react';

export function Robot({ robot, isOpen }) {
  useEffect(() => {
    if (isOpen) {
      const audio = new Audio('/robot-sound.mp3');
      audio.volume = 0.2; // Reduce volume to 20%
      audio.play().catch(err => console.log('Audio playback failed:', err));
    }
  }, [isOpen]);

  return (
    <div className="min-h-[150px] w-[300px] p-5 bg-white/90 rounded-lg whitespace-normal break-words leading-normal mt-5">
      {/* Robot content */}
    </div>
  );
}
