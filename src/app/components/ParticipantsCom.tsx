import React from "react";
import { participants } from "../lib/constants";
import CandidateCard from "./CandidateCard";
import Colors from "@/settings/color";

const ParticipantsCom = () => {
  const { theme } = Colors;

  return (
    <div className="w-full min-h-screen px-4 py-8">
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl font-semibold text-card-foreground mb-6 text-center">
          Participants
        </h1>
        <div className="grid gap-6 md:gap-28 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {participants.map((participant) => (
            <CandidateCard
              key={participant.id}
              firstName={participant.firstName}
              lastName={participant.lastName}
              parish={participant.parish}
              imageUrl={participant.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipantsCom;
