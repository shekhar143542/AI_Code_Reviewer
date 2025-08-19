
import React from 'react';

interface CodeInputProps {
  code: string;
  onCodeChange: (code: string) => void;
  language: string;
  disabled: boolean;
}

export const CodeInput: React.FC<CodeInputProps> = ({ code, onCodeChange, language, disabled }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg flex flex-col h-full">
      <div className="flex justify-between items-center p-3 border-b border-slate-700">
        <h2 className="font-semibold text-lg text-slate-300">Your Code</h2>
        <span className="text-sm bg-slate-700 text-cyan-300 px-2 py-1 rounded-md">{language}</span>
      </div>
      <div className="p-1 flex-grow">
        <textarea
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          disabled={disabled}
          className="w-full h-full p-3 bg-transparent text-slate-200 resize-none focus:outline-none font-mono text-sm leading-relaxed"
          placeholder="Paste your code here..."
          aria-label="Code Input"
        />
      </div>
    </div>
  );
};
