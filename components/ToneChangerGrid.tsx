import React, { useState } from "react";

const ToneChangerGrid = ({ onToneChange }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updatePosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (isInCenterCell()) {
      setPosition({ x: 50, y: 50 });
      onToneChange(getTones());
    } else {
      onToneChange(getTones());
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updatePosition(e);
    }
  };

  const updatePosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
    const y = Math.min(Math.max(0, e.clientY - rect.top), rect.height);
    setPosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const isInCenterCell = () => {
    return (
      position.x > 33.33 &&
      position.x < 66.66 &&
      position.y > 33.33 &&
      position.y < 66.66
    );
  };

  const getTones = () => {
    const conciseWeight = 1 - position.x / 100;
    const casualWeight = position.y / 100;
    const professionalWeight = 1 - casualWeight;
    const expandedWeight = position.x / 100;

    const getWeight = (weight) => {
      return isInCenterCell() ? 0 : parseFloat(weight.toFixed(2));
    };

    const tones = [
      { tone: "concise", weight: getWeight(conciseWeight) },
      { tone: "casual", weight: getWeight(casualWeight) },
      { tone: "professional", weight: getWeight(professionalWeight) },
      { tone: "expanded", weight: getWeight(expandedWeight) },
    ];

    return tones.sort((a, b) => b.weight - a.weight).slice(0, 2);
  };

  const getLabelOpacity = (quadrant) => {
    const thresholds = {
      professional: position.y < 50,
      casual: position.y >= 50,
      concise: position.x < 50,
      expanded: position.x >= 50,
    };
    return thresholds[quadrant] ? "opacity-100" : "opacity-100";
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl shadow-2xl overflow-hidden">
      <div
        className="relative w-full h-full cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border border-indigo-500/30" />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full text-xs font-medium text-indigo-200 flex items-center justify-center pointer-events-none">
          <span
            className={`absolute top-3 left-1/2 transform -translate-x-1/2 transition-opacity ${getLabelOpacity(
              "professional"
            )}`}
          >
            Professional
          </span>
          <span
            className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 transition-opacity ${getLabelOpacity(
              "casual"
            )}`}
          >
            Casual
          </span>
          <span
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 -rotate-90 transition-opacity ${getLabelOpacity(
              "concise"
            )}`}
          >
            Concise
          </span>
          <span
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 transition-opacity ${getLabelOpacity(
              "expanded"
            )}`}
          >
            Expanded
          </span>
          {!isInCenterCell() && (
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600/80 px-3 py-1 rounded-full text-white text-xs font-bold">
              Reset
            </span>
          )}
        </div>
        <div
          className={`absolute w-6 h-6 rounded-full ${
            isInCenterCell() ? "bg-purple-radial-conic" : "bg-gold-radial-conic"
          } transform -translate-x-1/2 -translate-y-1/2 pointer-events-none shadow-lg transition-all duration-300 ease-in-out outline outline-transparent hover:outline-green-200/50`}
          style={{ left: `${position.x}%`, top: `${position.y}%` }}
        />
      </div>
    </div>
  );
};

export default ToneChangerGrid;
