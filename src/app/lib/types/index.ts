export type WaitComProps = {
  type?: 'quizToStart' | 'roundToStart';
};

export type CandiCardProps = {
  id?: number;
  firstName: string;
  lastName: string;
  parish: string;
  score?: number;
  imageUrl?: string;
};

export type AnswerProps = {
  question: string;
  options: { option: string }[];
  selectedOption: string;
  correctAnswer: string;
};

export interface QuestionOption {
  position: string;
  text: string;
}
