import React from "react";
import LeaderBrdTable from "./LeaderBrdTable";

const LeaderBoard = () => {
  return (
    <div>
      <h1>LeaderBoard</h1>
      <div className="leaderboard-list">
        <LeaderBrdTable />
      </div>
    </div>
  );
};

export default LeaderBoard;
