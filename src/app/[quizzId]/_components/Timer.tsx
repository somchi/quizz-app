'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialSeconds?: number;
  onTimerEnd?: () => void;
}

export const Timer: React.FC<CountdownTimerProps> = ({
  initialSeconds = 15,
  onTimerEnd,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    if (!timerRunning || timeLeft <= 0) {
      if (timeLeft === 0 && timerRunning) {
        onTimerEnd?.();
        setTimerRunning(false);
      }
      return; // Stop the interval if timer is not running or already at 0
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, timerRunning, onTimerEnd]);

  const displayTime = timeLeft > 0 ? timeLeft : 0;

  return (
    <div
      className={`
        flex items-center justify-center
        text-3xl font-bold text-white
        w-12 h-12 rounded-full shadow-lg
        transition-colors duration-500 ease-in-out
        ${displayTime <= 5 ? 'bg-red-600 animate-pulse' : 'bg-theme-secondary'}
      `}
    >
      {displayTime}
    </div>
  );
};
