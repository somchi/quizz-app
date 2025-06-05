import React from "react";
import { participants } from "../lib/constants";
import CandiCard from "./CandiCard";

const ParticipantsCom = () => {
  return (
    <div>
      <h1>Participants</h1>
      <div className="participants-list">
        {participants.map((participant) => (
          <CandiCard key={participant.id} {...participant} />
        ))}
      </div>
    </div>
  );
};

export default ParticipantsCom;
