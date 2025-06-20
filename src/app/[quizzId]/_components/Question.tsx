'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Timer } from './Timer';
import { useState } from 'react';
import { Option } from '../participant/components/Options';
import { socket } from '@/app/lib/client';
import { EVENT_STATE } from '@/app/lib/enums';

interface Props {
  data: {
    question: string;
    questionNumber: string;
    answer: string;
    questionId: string;
  };
  options: string[];
  selectedAble: boolean;
}
export const Question = ({ data, options, selectedAble }: Props) => {
  const [canSelect, setCanSelect] = useState<boolean>(true);
  const [selected, setSelected] = useState<string>('');

  const handleEndQuestion = () => {
    setCanSelect((canSelect) => !canSelect);
  };

  const handleSelect = (option: string) => {
    if (!selectedAble) return;
    setSelected(option);

    socket.emit(EVENT_STATE.SUBMIT_ANSWER, {
      questionId: data.questionId,
      answer: option,
    });
  };

  return (
    <div className="flex flex-col gap-2 md:p-8 p-3 h-screen">
      <Timer onTimerEnd={handleEndQuestion} />
      <Card className="border border-4 border-blue-400 max-h-[40vh] overflow-auto">
        <CardHeader className="md:p-6 p-2">
          <CardTitle className="text-center text-xs">
            Question {data.questionNumber}
          </CardTitle>
        </CardHeader>
        <CardContent className="md:p-6 p-2">
          <span className="text-sm">{data.question}</span>
        </CardContent>
      </Card>
      <div className="grid gap-2">
        {options.map((item, ind) => (
          <Option
            key={ind}
            option={item}
            index={ind}
            selected={selected}
            answer={data.answer}
            canSelect={canSelect}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};
