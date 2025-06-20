'use client';

import { useActionState, useContext, useEffect } from 'react';
import { ButtonLoader } from '@/app/components/ButtonLoader';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { connectParticipant } from '@/app/lib/server/participant';
import { Label } from '@/app/components/ui/label';
import { ActionResponse } from '@/app/lib/types';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Participant } from '@/app/lib/types/participant';
import { AppContext } from '@/app/context';

export const ConnectForm = () => {
  const { dispatch } = useContext(AppContext);
  const [state, action, pending] = useActionState(
    connectParticipant,
    {} as ActionResponse<Participant>
  );
  const router = useRouter();

  useEffect(() => {
    if (state) {
      if (state.status <= 201) {
        toast.success('Successfully added you', {
          description: state.message,
          position: 'top-right',
        });
        dispatch({
          type: 'SET_PARTICIPANT',
          payload: { participant: state.data as Participant },
        });
        router.replace(`${state.data?.quiz.id}/participant`);
      } else {
        toast.error('Error adding you', {
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
            Quiz Id
          </Label>
        </div>
        <Input
          id="quizCode"
          name="quizCode"
          placeholder="Enter quiz code"
          className="w-full"
        />
      </div>
      <div className="grid gap-1 mb-[1.188rem] w-full">
        <div className="mb-0 block">
          <Label htmlFor="name" className="text-md">
            Your full name
          </Label>
        </div>
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          className="w-full"
        />
      </div>
      <div className="grid gap-1 mb-[1.188rem] w-full">
        <div className="mb-0 block">
          <Label htmlFor="parish" className="text-md">
            Parish
          </Label>
        </div>
        <Input
          id="parish"
          name="parish"
          placeholder="Enter your parish"
          className="w-full"
        />
      </div>
      <div>
        <Button
          type="submit"
          variant="primary"
          className="w-40 bg-yellow-600 hover:bg-yellow-500"
        >
          {pending ? <ButtonLoader /> : 'Join'}
        </Button>
      </div>
    </form>
  );
};
