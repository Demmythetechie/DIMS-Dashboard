// src/components/Home/ProgressCard.js
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCard = ({ title, progressData }) => {
  return (
    <div className="bg-[#FDF8FF] shadow-lg rounded-lg p-6 mb-6">
      <h2 className="mb-4 text-xl font-bold text-gray-700">{title}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {progressData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-2">
              <CircularProgressbar
                value={item.value}
                styles={buildStyles({
                  textSize: '11px',
                  pathColor: '#6C009F',  // Adjust path color as needed
                  textColor: '#0D659F',
                  trailColor: '#EDC8FF',
                })}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-center text-gray-700">{item.description}</span>
              </div>
            </div>
            <span className="text-center text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressCard;
