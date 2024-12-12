import React from 'react';

const Card = ({ title, number, color , textColor = 'white' }) => {
  return (
    <div className={`flex flex-col justify-center items-center   p-6 rounded-lg `} style={{ backgroundColor: color }}>
      <h2 className={`mb-2 text-base font-semibold text-${textColor}`}>{title}</h2>
      <p className={`text-4xl font-bold text-${textColor}`}>{number}</p>
    </div>
  );
};

export default Card;
