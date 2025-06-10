type WaitComProps = {
  type?: 'quizToStart' | 'roundToStart' 
};

declare type CandiCardProps = {
  id?: number;
  firstName: string;
  lastName: string;
  parish: string;
  score?: number;
  imageUrl?: string;
};

declare type AnswerProps = {
  question : string;
  options: {option: string}[]
  selectedOption: string;
   correctAnswer: string;

}