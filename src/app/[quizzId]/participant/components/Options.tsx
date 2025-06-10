import { QuestionOption } from '@/app/lib/types';

interface Props {
  selected: string;
  answer: string;
  option: QuestionOption;
  canSelect: boolean;
  onSelect: (option: string) => void;
}

export const Option = ({
  selected,
  answer,
  option,
  canSelect,
  onSelect,
}: Props) => {
  return (
    <button
      className={`flex gap-2 p-2 border ${
        selected === option.position
          ? 'border-4 border-yellow-400'
          : 'border-gray-300'
      } rounded-md w-full ${
        answer === option.position && !canSelect
          ? 'bg-theme-secondary animate-pulse transition-colors duration-500 ease-in-out'
          : 'bg-transparent'
      }`}
      disabled={!canSelect}
      onClick={() => onSelect(option.position)}
    >
      <span className="text-sm font-bold uppercase text-white">
        {option.position}.
      </span>
      <span className="text-sm text-start">{option.text}</span>
    </button>
  );
};
