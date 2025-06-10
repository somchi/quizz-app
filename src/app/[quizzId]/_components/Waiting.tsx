import React from 'react';

interface Props {
  status: string;
  description: string;
}

export const Waiting: React.FC<Props> = ({ status, description }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#041039] text-white">
      <div className="relative">
        {/* Glowing ring */}
        <div className="w-24 h-24 rounded-full border-4 border-cyan-400 animate-spin-slow blur-sm opacity-60" />
        {/* Inner circle */}
        <div className="absolute top-0 left-0 w-24 h-24 flex items-center justify-center rounded-full border-4 border-cyan-300 animate-pulse">
          <span className="text-lg font-semibold text-cyan-200">{status}</span>
        </div>
      </div>

      <p className="mt-6 text-slate-300 animate-pulse text-sm tracking-wide">
        {description}...
      </p>
    </div>
  );
};
