'use client';

import { LeaderBoard } from '../_components/LeaderBoard';
import { ParticipantsCom } from '../_components/ParticipantsCom';
import {
  AudienceQuestionState,
  AudienceWaitStatus,
  QuizParticipants,
} from '@/app/lib/constants';
import { Waiting } from './Waiting';
import { EVENT_STATE } from '@/app/lib/enums';
import { useSocketListener } from '@/app/hooks/useSocketListner';
import { toast } from 'sonner';
import { useContext } from 'react';
import { AppContext } from '@/app/context';
import {
  SET_ANSWER,
  SET_AUDIENCE_STATUS,
  SET_PARTICIPANTS,
  SET_QUESTION,
  SET_QUESTION_NUMBER,
} from '@/app/context/reducer';
import { Answer, QuizState } from '@/app/lib/types';
import { AudienceQuestion } from './AudienceQuestion';

export const Audience = () => {
  const { state, dispatch } = useContext(AppContext);
  // const params = useParams<{ quizId: string }>();

  const handleEvent = (event: string, description: string) => {
    dispatch({
      type: SET_AUDIENCE_STATUS,
      payload: { participantStatus: { event, description } },
    });
  };

  const { onConnect } = useSocketListener('audience', {
    [EVENT_STATE.CONNECTED]: (data: { status: string; userType: string }) => {
      handleEvent(
        EVENT_STATE.CONNECTED,
        `Connected and quiz is ${data.status.split('_').toString()}`
      );
      // document.cookie = `quizCode=${data.userType}; path=/; SameSite=Lax; Secure`;
      onConnect();
    },
    [EVENT_STATE.QUIZ_STARTED]: (data: { quizState: QuizState }) => {
      dispatch({
        type: SET_PARTICIPANTS,
        payload: { participants: data.quizState.activeParticipants },
      });
      handleEvent(
        EVENT_STATE.QUIZ_STARTED,
        `Quiz started, waiting for question`
      );
    },
    [EVENT_STATE.LEADERBOARD_SHOWN]: (data: { quizState: QuizState }) => {
      handleEvent(
        EVENT_STATE.LEADERBOARD_SHOWN,
        `Quiz ongoing, waiting for next question`
      );
      dispatch({
        type: SET_PARTICIPANTS,
        payload: { participants: data.quizState.activeParticipants },
      });
      dispatch({ type: SET_ANSWER, payload: { answer: {} as Answer } });
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
        type: SET_AUDIENCE_STATUS,
        payload: {
          participantStatus: {
            event: EVENT_STATE.QUESTION_SHOW,
            description: '',
          },
        },
      });
      dispatch({ type: SET_QUESTION, payload: { question: data } });
      dispatch({
        type: SET_QUESTION_NUMBER,
        payload: { questionNumber: ++state.questionNumber },
      });
    },
    [EVENT_STATE.ANSWERED_REVEALED]: (data) => {
      dispatch({
        type: SET_AUDIENCE_STATUS,
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
    },
    [EVENT_STATE.NEXT_ROUND]: (data: QuizState) => {
      dispatch({
        type: SET_PARTICIPANTS,
        payload: { participants: data.activeParticipants },
      });
      handleEvent(
        EVENT_STATE.NEXT_ROUND,
        `Quiz ongoing, waiting for next round`
      );
    },
  });

  return (
    <section className="relative z-10">
      {AudienceWaitStatus.includes(
        state.audienceStatus.event as EVENT_STATE
      ) && (
        <Waiting
          status="Waiting"
          description={state.audienceStatus.description}
        />
      )}
      {QuizParticipants.includes(state.audienceStatus.event as EVENT_STATE) && (
        <ParticipantsCom />
      )}
      {state.audienceStatus.event === EVENT_STATE.LEADERBOARD_SHOWN && (
        <LeaderBoard />
      )}
      {AudienceQuestionState.includes(
        state.audienceStatus.event as EVENT_STATE
      ) && <AudienceQuestion />}
    </section>
  );
};
