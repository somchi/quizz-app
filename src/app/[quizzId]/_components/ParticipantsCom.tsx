import React from "react";
import { participants } from "../../lib/constants";
import CandidateCard from "./CandidateCard";

const ParticipantsCom = () => {

  return (
    <div className="w-full min-h-screen bg-background px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-card-foreground mb-6 text-center">
          Participants
        </h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {participants.map((participant) => (
            <CandidateCard key={participant.id} {...participant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipantsCom;
