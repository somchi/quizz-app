'use client';
import React from 'react';
import { ParticipantsCom } from './ParticipantsCom';
import { CandidateCard } from './CandidateCard';
import { WaitComProps } from '@/app/lib/types';

const WaitingCom = ({ type = 'quizToStart' }: WaitComProps) => {
  const waitingTextMap: Record<string, string> = {
    quizToStart: 'Quiz is about to start!',
    roundToStart: 'Round is about to start!',
  };

  const waitingComponentMap: Record<string, React.ReactNode> = {
    quizToStart: <ParticipantsCom />,
    roundToStart: (
      <CandidateCard
        firstName="John"
        lastName="Doe"
        parish="St. Mary"
        imageUrl="/images/victorafolabi.jpg"
        score={2}
      />
    ),
  };

  const text = waitingTextMap[type] || 'Please wait...';
  const component = waitingComponentMap[type] || null;

  return (
    <div className="relative h-screen overflow-y-auto animate-in fade-in zoom-in duration-700">
      <div className="h-screen px-4 text-center space-y-6 relative z-10">
        <h1 className="text-3xl font-bold text-primary">{text}</h1>
        {component}
      </div>
    </div>
  );
};

export default WaitingCom;
