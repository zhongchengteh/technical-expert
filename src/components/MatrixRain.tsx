
import React, { useState, useEffect, useRef } from 'react';

// Define constants outside the component for stability
const CHARACTER_POOL_STRING = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()*&^%+-=~{[}]|<>';
const characterPool = CHARACTER_POOL_STRING.split('');
const FONT_SIZE = 16;

const MatrixRain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [streams, setStreams] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    chars: string[]; 
    speed: number; 
    length: number 
  }>>([]);
  
  // characterPool and fontSize are now defined outside

  useEffect(() => {
    if (!containerRef.current) return;

    const initializeStreams = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      const columnCount = Math.floor(width / FONT_SIZE);

      const newStreams = Array.from({ length: columnCount }).map((_, i) => {
        const streamLength = Math.floor(Math.random() * (height / FONT_SIZE / 2) + (height / FONT_SIZE / 4)); // length based on screen height
        return {
          id: i,
          x: i * FONT_SIZE,
          y: -(Math.random() * height + streamLength * FONT_SIZE), // Start well above the screen
          chars: Array.from({ length: streamLength }).map(() => characterPool[Math.floor(Math.random() * characterPool.length)]),
          speed: Math.random() * 4 + 2, // Random speed for each stream (pixels per frame)
          length: streamLength,
        };
      });
      setStreams(newStreams);
    };

    initializeStreams();
    window.addEventListener('resize', initializeStreams); // Re-initialize on resize

    let animationFrameId: number;
    const animate = () => {
      setStreams(prevStreams =>
        prevStreams.map(stream => {
          if (!containerRef.current) return stream;
          const height = containerRef.current.offsetHeight;
          let newY = stream.y + stream.speed;
          
          // Continuously update characters for a more dynamic effect
          const updatedChars = stream.chars.map(() => characterPool[Math.floor(Math.random() * characterPool.length)]);

          if (newY > height + stream.length * FONT_SIZE * 0.1) { // If stream is mostly off-screen (allow tail to go off)
            const newLength = Math.floor(Math.random() * (height / FONT_SIZE / 2) + (height / FONT_SIZE / 4));
            return {
              ...stream,
              y: -(Math.random() * (height / 2) + newLength * FONT_SIZE), // Reset to top
              chars: Array.from({ length: newLength }).map(() => characterPool[Math.floor(Math.random() * characterPool.length)]),
              speed: Math.random() * 4 + 2,
              length: newLength,
            };
          }
          return { ...stream, y: newY, chars: updatedChars };
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', initializeStreams);
    };
  }, [characterPool, FONT_SIZE]); // Dependencies are now stable constants

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0"
      style={{ backgroundColor: 'rgba(0,0,0,1)' }} // Solid black background for the effect itself
    >
      {streams.map(stream => (
        <div
          key={stream.id}
          className="font-mono absolute" // text-green-400 will be applied per character
          style={{
            left: `${stream.x}px`,
            top: `${stream.y}px`,
            fontSize: `${FONT_SIZE}px`,
            lineHeight: `${FONT_SIZE}px`, 
          }}
        >
          {stream.chars.map((char, index) => (
            <div
              key={index}
              style={{
                color: index === stream.chars.length - 1 ? '#90EE90' : // Brighter leading character (light green)
                       index > stream.chars.length - 5 ? `rgba(50, 205, 50, ${1 - (stream.chars.length - 1 - index) * 0.18})` : // Fade tail (medium sea green with decreasing opacity)
                       '#2E8B57', // Darker green for the rest of the stream (sea green)
                opacity: index < stream.length / 2 ? 0.5 + (index / stream.length) * 0.5 : 1, // Fade in characters at the top of stream
                textShadow: index === stream.chars.length -1 ? '0 0 8px #90EE90' : 'none', // Glow for leading character
              }}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;

