'use client';
import { useContext, useEffect } from 'react';
import { EventHandlers } from '../lib/types';
import { getSocket, socket } from '../lib/client';
import { AppContext } from '../context';
import { SET_SOCKET_PROPS, TOGGLE_RECONNECT } from '../context/reducer';
import { getClientCookie } from '../lib/utils';
import { useParams, useRouter } from 'next/navigation';

export function useSocketListener<T>(
  userType: string,
  events: EventHandlers<T>
) {
  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();
  const params = useParams<{ quizzId: string }>();

  function onConnect() {
    dispatch({
      type: SET_SOCKET_PROPS,
      payload: {
        socketProps: {
          isConnected: true,
          transport: 'websocket',
        },
      },
    });

    socket.io.engine.on('upgrade', (transport) => {
      dispatch({
        type: SET_SOCKET_PROPS,
        payload: {
          socketProps: {
            isConnected: state.socketProps.isConnected,
            transport: transport.name,
          },
        },
      });
    });
  }

  useEffect(() => {
    if (
      getClientCookie('token') &&
      Object.keys(state.participant).length === 0
    ) {
      dispatch({ type: TOGGLE_RECONNECT, payload: { reconnect: true } });
      return router.replace('/participant');
    }
    const socket = getSocket({
      userType,
      quizCode:
        userType === 'audience' ? params.quizzId : state.participant.quiz.code,
      ...(userType !== 'audience' && { token: getClientCookie('token') ?? '' }),
    });

    if (socket.connected) {
      onConnect();
    }

    for (const [event, handler] of Object.entries(events)) {
      socket.on(event, handler);
    }

    return () => {
      for (const event of Object.keys(events)) {
        socket.off(event);
        socket.off('connection', onConnect);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { onConnect };
}
