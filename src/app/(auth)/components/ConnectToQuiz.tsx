'use client';

import { useContext } from 'react';
import { ConnectForm } from './ConnectForm';
import { ReconnectForm } from './ReconnectForm';
import { AppContext } from '@/app/context';

export const ConnectToQuiz = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_RECONNECT',
      payload: { reconnect: !state.reconnect },
    });
  };
  return (
    <div>
      {state.reconnect ? <ReconnectForm /> : <ConnectForm />}
      <div onClick={handleClick}>
        {state.reconnect ? (
          <p>
            Haven&apos;t joined?{' '}
            <strong className="font-bold text-yellow-500 cursor-pointer">
              Join
            </strong>
          </p>
        ) : (
          <p>
            Already started?{' '}
            <strong className="font-bold text-yellow-500 cursor-pointer">
              Rejoin
            </strong>
          </p>
        )}
      </div>
    </div>
  );
};
