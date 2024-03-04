import React, { useState } from 'react';
import { useToggle } from './hooks/useToggle';
import LocalesItem from './LocalesItem';

const lng = ['English', 'Russia']; 

function Locales() {
  const [isVisible, toggleVisible] = useToggle(false);
  const [selectedIdx, setSelectedIdx] = useState(0); 

  const handleSelect = (index) => {
    setSelectedIdx(index);
    toggleVisible();
  };

  return (
    <div className='locales-name' onClick={toggleVisible}>
      <h2>{lng[selectedIdx]}</h2>
      <svg
        width="13"
        height="8"
        viewBox="0 0 13 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isVisible ? 'active' : 'rotate'}
      >
        <path d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z" fill="white" />
      </svg>
      {isVisible && (
        <div className='popup'>
          <LocalesItem item={lng} onSelect={handleSelect} selectedIndex={selectedIdx} />
        </div>
      )}
    </div>
  );
}

export default Locales;
