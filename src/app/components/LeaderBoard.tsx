import React from "react";
import LeaderBrdTable from "./LeaderBrdTable";

const LeaderBoard = () => {
  return (
    <div className="max-w-5xl  mx-auto px-4 py-8 animate-in fade-in zoom-in duration-700">
      <div className="flex items-center justify-center gap-2 mb-6">
        <h1 className="text-3xl font-bold text-theme-bg text-center">
          Leaderboard
        </h1>

        <span role="img" aria-label="trophy" className="text-3xl leading-none">
          🏆
        </span>
      </div>

      <div className="bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden">
        <LeaderBrdTable />
      </div>
    </div>
  );
};

export default LeaderBoard;
