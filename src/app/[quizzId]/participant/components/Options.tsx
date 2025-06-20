import { numberToLetter } from '@/app/lib/utils';

interface Props {
  selected: string;
  answer: string;
  option: string;
  canSelect: boolean;
  index: number;
  onSelect: (option: string) => void;
}

export const Option = ({
  selected,
  answer,
  option,
  canSelect,
  onSelect,
  index,
}: Props) => {
  return (
    <button
      className={`flex gap-2 p-2 border ${
        selected === index.toString()
          ? 'border-4 border-yellow-400'
          : 'border-gray-300'
      } rounded-md w-full ${
        answer === option && !canSelect
          ? 'bg-theme-secondary animate-pulse transition-colors duration-500 ease-in-out'
          : 'bg-transparent'
      }`}
      disabled={!canSelect}
      onClick={() => onSelect(index.toString())}
    >
      <span className="text-sm font-bold uppercase text-white">
        {numberToLetter(index)}.
      </span>
      <span className="text-sm text-start">{option}</span>
    </button>
  );
};
