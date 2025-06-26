'use client';

import { useContext } from 'react';
import { Question } from './Question';
import { AppContext } from '@/app/context';
import { EVENT_STATE } from '@/app/lib/enums';

export const AudienceQuestion = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="flex ">
      <div
        className={`flex items-center justify-center ${
          state.audienceStatus.event === EVENT_STATE.ANSWERED_REVEALED
            ? 'w-1/3'
            : 'w-full'
        } h-screen`}
      >
        <div
          className={`flex flex-col ${
            state.audienceStatus.event === EVENT_STATE.ANSWERED_REVEALED
              ? 'px-0'
              : 'px-8 max-w-[50vw]'
          } `}
        >
          <Question
            data={{
              question: state.question.questionText,
              questionNumber: state.questionNumber.toString(),
              answer: state.answer.answer,
              questionId: state.question.questionId,
              explaination: state.answer.explaination,
            }}
            options={state.question.options}
            selectedAble={false}
          />
        </div>
      </div>
      {state.audienceStatus.event === EVENT_STATE.ANSWERED_REVEALED && (
        <div className="flex flex-col w-2/3 px-4 bg-white my-8 rounded-md shadow-lg">
          <div>
            <h2 className="text-2xl font-semibold text-black">
              Participants Response
            </h2>
          </div>
          {state.answer.answers
            .sort((a, b) => b.answer - a.answer)
            .map((participant, index) => (
              <div
                key={index}
                className={`flex my-2 flex-col gap-2 p-2 border-4 ease-in-out ${
                  state.answer.answer === participant.answer
                    ? 'border-green-400 animate-pulse transition-colors duration-500 '
                    : 'border-red-400'
                } rounded-md w-full `}
              >
                <p className="text-black font-semibold">
                  *. {participant.name}
                </p>
                <p className="text-black font-medium">
                  Anwser : {state.question.options[participant.answer] ?? 'N/A'}
                </p>
                <p className="text-black font-medium">
                  Time to answer: {participant.timeToAnswer}
                </p>
                <p className="text-black font-medium">
                  Points: {participant.points}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
