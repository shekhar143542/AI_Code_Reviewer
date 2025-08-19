
import React from 'react';
import { Loader } from './Loader';
import { SparklesIcon } from './icons/SparklesIcon';

interface FeedbackDisplayProps {
  feedback: string;
  isLoading: boolean;
  error: string | null;
}

const InitialState: React.FC = () => (
  <div className="text-center flex flex-col items-center justify-center h-full text-slate-400">
    <SparklesIcon className="w-16 h-16 mb-4 text-cyan-500 opacity-50" />
    <h3 className="text-xl font-semibold text-slate-300">Welcome to the Inspector</h3>
    <p className="max-w-md mt-2">
      Paste your code on the left, select the language, and click 'Analyze Code' to receive an expert review from Gemini.
    </p>
  </div>
);

const ErrorState: React.FC<{ message: string }> = ({ message }) => (
  <div className="text-center flex flex-col items-center justify-center h-full text-red-400 p-4">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h3 className="text-xl font-semibold">An Error Occurred</h3>
    <p className="mt-2 bg-red-900/50 p-2 rounded">{message}</p>
  </div>
);

export const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ feedback, isLoading, error }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg flex flex-col h-full">
      <div className="p-3 border-b border-slate-700">
        <h2 className="font-semibold text-lg text-slate-300">Feedback</h2>
      </div>
      <div className="p-4 flex-grow overflow-y-auto">
        {isLoading && <Loader />}
        {error && <ErrorState message={error} />}
        {!isLoading && !error && feedback && (
          <div className="prose prose-invert max-w-none prose-pre:bg-slate-900/70 prose-pre:rounded-md prose-pre:p-4 prose-headings:text-cyan-400">
            <div className="whitespace-pre-wrap">{feedback}</div>
          </div>
        )}
        {!isLoading && !error && !feedback && <InitialState />}
      </div>
    </div>
  );
};
