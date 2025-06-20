import { createContext } from 'react';
import { Answer, AppStore, QuestionShow, StoreAction } from '../lib/types';
import { Participant, ParticipantStatus } from '../lib/types/participant';

export const INITIAL_STATE: AppStore = {
  question: {} as QuestionShow,
  participantStatus: {} as ParticipantStatus,
  answer: {} as Answer,
  questionNumber: 0,
  socketProps: { isConnected: false, transport: 'N/A' },
  participant: {} as Participant,
  reconnect: false,
};

export const AppContext = createContext<{
  state: AppStore;
  dispatch: React.Dispatch<StoreAction>;
}>({ state: INITIAL_STATE, dispatch: () => null });
