'use client';

import { ButtonLoader } from '@/app/components/ButtonLoader';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { AppContext } from '@/app/context';
import { SET_PARTICIPANT } from '@/app/context/reducer';
import { reconnectParticipant } from '@/app/lib/server/participant';
import { ActionResponse } from '@/app/lib/types';
import { Participant } from '@/app/lib/types/participant';
import { useRouter } from 'next/navigation';
import { useActionState, useContext, useEffect } from 'react';
import { toast } from 'sonner';

export const ReconnectForm = () => {
  const [state, action, pending] = useActionState(
    reconnectParticipant,
    {} as ActionResponse<Participant>
  );
  const { dispatch } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    if (state) {
      if (state.status <= 201) {
        toast.success('Successfully reconnected you', {
          description: state.message,
          position: 'top-right',
        });
        dispatch({
          type: SET_PARTICIPANT,
          payload: { participant: state.data as Participant },
        });

        router.replace(`${state.data?.quiz.id}/participant`);
      } else {
        toast.error('Error reconnected you', {
          description: state.message,
          position: 'top-right',
        });
      }
    }
  }, [dispatch, router, state]);

  return (
    <form action={action}>
      <div className="grid gap-1 mb-[1.188rem] w-full">
        <div className="mb-0 block">
          <Label htmlFor="id" className="text-md">
            Your Id
          </Label>
        </div>
        <Input
          id="code"
          name="code"
          placeholder="Enter your Id"
          className="w-full"
        />
      </div>
      <div>
        <Button
          type="submit"
          variant="primary"
          className="w-40 bg-yellow-600 hover:bg-yellow-500"
        >
          {pending ? <ButtonLoader /> : 'Rejoin'}
        </Button>
      </div>
    </form>
  );
};
