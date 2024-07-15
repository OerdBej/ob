import React from 'react';

const Footer = () => {
  const styles = `
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
    .rainbow-text {
      background-image: linear-gradient(90deg, #f7df1e, #ff6347, #61dafb, #1e90ff, #3178c6);
      -webkit-background-clip: text;
      color: white;
      animation: pulse 2s infinite;
      font-size: 13px;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div
        className='bg-sky-900 text-xs text-center p-5'
        style={{
          backgroundColor: '#173a55',
          color: '#ffffff',
          fontSize: '12px',
          padding: '9px',
        }}
      >
        💛 Check out my blog to learn more about my journey at{' '}
        <a
          href='https://slowcoding.vercel.app/'
          className='rainbow-text'
        >
          slowcoding
        </a>{' '}
        💛
      </div>
    </>
  );
};

export default Footer;
