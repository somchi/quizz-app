import { INITIAL_STATE } from '.';
import {
  Answer,
  AppStore,
  QuestionShow,
  SocketProps,
  StoreAction,
} from '../lib/types';
import { Participant, ParticipantStatus } from '../lib/types/participant';

export const SET_QUESTION = 'SET_QUESTION';
export const SET_PARTICIPANT_STATUS = 'SET_PARTICIPANT_STATUS';
export const SET_ANSWER = 'SET_ANSWER';
export const SET_QUESTION_NUMBER = 'SET_QUESTION_NUMBER';
export const SET_SOCKET_PROPS = 'SET_SOCKET_PROPS';
export const SET_PARTICIPANT = 'SET_PARTICIPANT';
export const TOGGLE_RECONNECT = 'TOGGLE_RECONNECT';
export const CLEAR_STATE = 'CLEAR_STATE';

export const appReducer = (state: AppStore, action: StoreAction): AppStore => {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        question: action.payload.question ?? ({} as QuestionShow),
      };
    case SET_PARTICIPANT_STATUS:
      return {
        ...state,
        participantStatus:
          action.payload.participantStatus ?? ({} as ParticipantStatus),
      };
    case SET_ANSWER:
      return { ...state, answer: action.payload.answer ?? ({} as Answer) };
    case SET_QUESTION_NUMBER:
      return { ...state, questionNumber: action.payload.questionNumber ?? 0 };
    case SET_SOCKET_PROPS:
      return {
        ...state,
        socketProps: action.payload.socketProps ?? ({} as SocketProps),
      };
    case SET_PARTICIPANT:
      return {
        ...state,
        participant: action.payload.participant ?? ({} as Participant),
      };
    case TOGGLE_RECONNECT:
      return {
        ...state,
        reconnect: action.payload.reconnect ?? false,
      };
    case CLEAR_STATE:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
