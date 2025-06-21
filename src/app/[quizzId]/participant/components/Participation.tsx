'use client';

import { ParticipantQuestionState } from '@/app/lib/constants';
import { Question } from '../../_components/Question';
import { useSocketListener } from '@/app/hooks/useSocketListner';
import { EVENT_STATE } from '@/app/lib/enums';
import { useContext } from 'react';
import { AppContext } from '@/app/context';
import { Waiting } from '../../_components/Waiting';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import {
  CLEAR_STATE,
  SET_ANSWER,
  SET_CAN_SELECT,
  SET_PARTICIPANT_STATUS,
  SET_QUESTION,
  SET_QUESTION_NUMBER,
  SET_SOCKET_PROPS,
} from '@/app/context/reducer';
import { Answer } from '@/app/lib/types';

export const Participation = () => {
  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();

  const onDisconnect = () => {
    dispatch({
      type: SET_SOCKET_PROPS,
      payload: {
        socketProps: {
          isConnected: false,
          transport: 'N/A',
        },
      },
    });
  };

  const handleEvent = (event: string, description: string) => {
    dispatch({
      type: SET_PARTICIPANT_STATUS,
      payload: { participantStatus: { event, description } },
    });
  };

  const { onConnect } = useSocketListener('participant', {
    [EVENT_STATE.CONNECTED]: (data: { status: string; userType: string }) => {
      handleEvent(
        EVENT_STATE.CONNECTED,
        `Connected and quiz is ${data.status.split('_').toString()}`
      );
      onConnect();
    },
    [EVENT_STATE.USER_DISCONNECTED]: () => {
      toast.warning('You have been disconnected');
      dispatch({
        type: CLEAR_STATE,
        payload: {},
      });

      onDisconnect();
      return router.replace('/participant');
    },
    [EVENT_STATE.QUIZ_STARTED]: () => {
      handleEvent(
        EVENT_STATE.QUIZ_STARTED,
        `Quiz started, waiting for question`
      );
    },
    [EVENT_STATE.LEADERBOARD_SHOWN]: () => {
      handleEvent(
        EVENT_STATE.LEADERBOARD_SHOWN,
        `Quiz ongoing, waiting for next question`
      );
      dispatch({ type: SET_ANSWER, payload: { answer: {} as Answer } });
      dispatch({
        type: SET_CAN_SELECT,
        payload: { canSelect: false },
      });
    },
    [EVENT_STATE.ROUND_STARTED]: (data: {
      roundId: string;
      totalQuestions: number;
    }) => {
      handleEvent(
        EVENT_STATE.ROUND_STARTED,
        `Round ${data.roundId} started (${data.totalQuestions} questions)! Waiting for question`
      );
      dispatch({
        type: SET_QUESTION_NUMBER,
        payload: { questionNumber: 0 },
      });
    },
    [EVENT_STATE.QUESTION_SHOW]: (data) => {
      dispatch({
        type: SET_PARTICIPANT_STATUS,
        payload: {
          participantStatus: {
            event: EVENT_STATE.QUESTION_SHOW,
            description: '',
          },
        },
      });
      dispatch({
        type: SET_CAN_SELECT,
        payload: { canSelect: true },
      });
      dispatch({ type: SET_QUESTION, payload: { question: data } });
      dispatch({
        type: SET_QUESTION_NUMBER,
        payload: { questionNumber: ++state.questionNumber },
      });
    },
    [EVENT_STATE.ANSWERED_REVEALED]: (data) => {
      dispatch({
        type: SET_PARTICIPANT_STATUS,
        payload: {
          participantStatus: {
            event: EVENT_STATE.ANSWERED_REVEALED,
            description: '',
          },
        },
      });
      dispatch({ type: SET_ANSWER, payload: { answer: data } });
    },
    [EVENT_STATE.TIME_UP]: () => {
      toast.error('Time is up for this question', {
        description: 'Please wait for the next question',
        position: 'top-right',
      });
      dispatch({
        type: SET_CAN_SELECT,
        payload: { canSelect: false },
      });
    },
    [EVENT_STATE.NEXT_ROUND]: () => {
      handleEvent(
        EVENT_STATE.NEXT_ROUND,
        `Quiz ongoing, waiting for next round`
      );
    },
  });

  return (
    <div>
      {ParticipantQuestionState.includes(
        state.participantStatus.event as EVENT_STATE
      ) ? (
        <Question
          data={{
            question: state.question.questionText,
            questionNumber: state.questionNumber.toString(),
            answer: state.answer.answer,
            questionId: state.question.questionId,
          }}
          options={state.question.options}
          selectedAble={true}
        />
      ) : (
        <Waiting
          status="Pending"
          description={state.participantStatus.description}
        />
      )}
    </div>
  );
};
