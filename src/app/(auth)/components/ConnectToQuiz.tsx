'use client';

import { useState } from 'react';
import { ConnectForm } from './ConnectForm';
import { ReconnectForm } from './ReconnectForm';

export const ConnectToQuiz = () => {
  const [reconnect, setReconnect] = useState<boolean>(false);

  const handleClick = () => {
    setReconnect((reconnect) => !reconnect);
  };
  return (
    <div>
      {reconnect ? <ReconnectForm /> : <ConnectForm />}
      <div onClick={handleClick}>
        {reconnect ? (
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
