import { useState, useEffect } from 'react';

const MandalaBg = ({ opacity = 0.06 }) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mandala-pattern" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5">
              <circle cx="200" cy="200" r="180" />
              <circle cx="200" cy="200" r="150" />
              <circle cx="200" cy="200" r="120" />
              <circle cx="200" cy="200" r="90" />
              <circle cx="200" cy="200" r="60" />
              <circle cx="200" cy="200" r="30" />
              
              <path d="M 200 20 L 200 380 M 20 200 L 380 200" />
              <path d="M 72.7 72.7 L 327.3 327.3 M 72.7 327.3 L 327.3 72.7" />
              
              {/* Petals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <g key={angle} transform={`rotate(${angle} 200 200)`}>
                  <path d="M 200 200 C 230 150 230 100 200 50 C 170 100 170 150 200 200" />
                  <path d="M 200 200 C 250 170 300 170 350 200 C 300 230 250 230 200 200" />
                </g>
              ))}
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mandala-pattern)" className="text-gold" />
      </svg>
    </div>
  );
};

export default MandalaBg;
