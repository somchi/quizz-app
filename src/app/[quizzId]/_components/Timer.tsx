'use client';

import { AppContext } from '@/app/context';
import React, { useState, useEffect, useContext } from 'react';

interface CountdownTimerProps {
  initialSeconds?: number;
  onTimerEnd?: () => void;
  shouldCount: boolean;
}

export const Timer: React.FC<CountdownTimerProps> = ({
  initialSeconds = 15,
  onTimerEnd,
  shouldCount,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [timerRunning, setTimerRunning] = useState(true);
  const { state } = useContext(AppContext);

  useEffect(() => {
    if (!timerRunning || timeLeft <= 0 || (!state.canSelect && shouldCount)) {
      if (timeLeft === 0 && timerRunning) {
        onTimerEnd?.();
        setTimerRunning(false);
        setTimeLeft(0);
      }
      return; // Stop the interval if timer is not running or already at 0
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, timerRunning, onTimerEnd, state.canSelect, shouldCount]);

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
