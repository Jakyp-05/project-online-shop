import React from 'react';

function LocalesItem({ item, onSelect, selectedIndex }) {
  return (
    <div>
      {item.map((lg, index) => (
        <p key={index} onClick={() => onSelect(index)} className={selectedIndex === index ? 'selected' : ''}>
          {lg}
        </p>
      ))}
    </div>
  );
}

export default LocalesItem;
