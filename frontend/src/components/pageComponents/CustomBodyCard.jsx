import React from 'react';
import '../../styles/CustomBodyCard.css';

const CustomBodyCard = ({ 
    imageSrc, 
    title, 
    text, 
    imagePosition 
}) => {
  return (
    <div className={`container ${imagePosition}`}>
      <img src={imageSrc} alt={title} className="image" />
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default CustomBodyCard;
