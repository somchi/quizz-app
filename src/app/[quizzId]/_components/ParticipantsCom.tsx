import React, { useContext } from 'react';
import { CandidateCard } from './CandidateCard';
import { AppContext } from '@/app/context';

export const ParticipantsCom = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="w-full min-h-screen px-4 py-8 animate-in fade-in zoom-in duration-700">
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl text-white font-semibold text-card-foreground mb-6 text-center">
          Participants
        </h1>
        <div className="grid gap-6 md:gap-28 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {Object.values(state.participants).map((participant, ind) => (
            <CandidateCard key={ind} data={participant} />
          ))}
        </div>
      </div>
    </div>
  );
};
