import { Participant, ParticipantStatus } from './participant';

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

export interface ActionResponse<T> {
  status: number;
  data?: T;
  message: string;
}

export interface Quiz {
  id: string;
  title: string;
  code: string;
  status: string;
}

export interface EventHandlers<T> {
  [event: string]: (...args: T[]) => void;
}

export interface Question {
  id: string;
  roundId: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

interface QuestionState {
  [questionId: string]: boolean;
}

export interface RoundState {
  currentQuestionId: string | null;
  questionStartTime?: Date;
  isTimeUp?: boolean;
  answeredQuestions: QuestionState;
  state: 'not_started' | 'on_going' | 'ended';
}

export interface QuestionShow extends Question {
  timeLimit: number;
  startTime: string;
  questionText: string;
  roundState: RoundState;
  questionId: string;
}

export interface Answer {
  questionId: string;
  answer: string;
}

export interface SocketProps {
  isConnected: boolean;
  transport: string;
}
export interface AppStore {
  question: QuestionShow;
  participantStatus: ParticipantStatus;
  answer: Answer;
  questionNumber: number;
  socketProps: SocketProps;
  participant: Participant;
  reconnect: boolean;
}

export type Payload = Partial<AppStore>;
export interface StoreAction {
  type: string;
  payload: Payload;
}
