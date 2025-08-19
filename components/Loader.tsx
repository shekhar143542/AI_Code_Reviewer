
import React from 'react';
import { RobotIcon } from './icons/RobotIcon';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-slate-400">
      <RobotIcon className="w-20 h-20 text-cyan-500 animate-spin-slow" />
      <p className="mt-4 text-lg font-semibold animate-pulse">Analyzing your code...</p>
      <p className="text-sm mt-1">Gemini is thinking.</p>
    </div>
  );
};
