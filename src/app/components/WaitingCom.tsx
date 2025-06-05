import React from "react";

const WaitingCom = ({ type }: WaitComProps) => {
  // Default type if not provided

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Waiting for {type} to start...
      </h1>
      <p className="text-lg">
        Please wait while we prepare everything for you.
      </p>
    </div>
  );
};

export default WaitingCom;
