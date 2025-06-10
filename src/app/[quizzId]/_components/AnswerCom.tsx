import { AnswerProps } from '@/app/lib/types';
import React from 'react';

export const AnswerCom = ({
  question,
  options,
  selectedOption,
  correctAnswer,
}: AnswerProps) => {
  return (
    <div className="grid place-content-center max-w-3xl mx-auto p-2 h-screen bg-transparent">
      <div className="max-w-3xl mx-auto bg-white border border-primary rounded-lg p-4 animate-in fade-in zoom-in duration-500">
        <h2 className="text-xl font-semibold text-primary mb-4">{question}</h2>

        <div className="grid grid-cols-2 gap-2">
          {options.map(({ option }: { option: string }) => {
            const isSelected = selectedOption === option;
            const isCorrect = correctAnswer === option;

            let borderColor = 'border-gray-300';
            let bgColor = 'bg-white';
            let textColor = 'text-black';

            if (isCorrect) {
              borderColor = 'border-green-500';
              bgColor = 'bg-green-100';
              textColor = 'text-green-800';
            } else if (isSelected && !isCorrect) {
              borderColor = 'border-red-500';
              bgColor = 'bg-red-100';
              textColor = 'text-red-800';
            }

            return (
              <div
                key={option}
                className={`flex items-center gap-2 p-2 border ${borderColor} ${bgColor} ${textColor} rounded-md`}
              >
                <span className="w-6 h-6 text-sm font-bold grid place-content-center rounded-full bg-primary text-white">
                  {option}
                </span>
                <p className="text-sm md:text-base">
                  Option {option} — Lorem ipsum dolor.
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            ✅ Correct Answer:{' '}
            <strong className="text-green-700">{correctAnswer}</strong>
          </p>
          <p className="mt-1">
            {selectedOption ? (
              <>
                🧠 You selected:{' '}
                <strong
                  className={
                    selectedOption === correctAnswer
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {selectedOption}
                </strong>
              </>
            ) : (
              <span className="text-red-600">You didn’t select an answer!</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
