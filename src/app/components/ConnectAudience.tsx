'use client';

import { useActionState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ButtonLoader } from './ButtonLoader';
import { connectAudience } from '../lib/server/audience';

export const ConnectAudience = () => {
  const [, action, pending] = useActionState(connectAudience, undefined);

  return (
    <form action={action}>
      <div className="grid gap-1 mb-[1.188rem] w-full">
        <div className="mb-0 block">
          <Label htmlFor="id" className="text-md">
            Quiz Id
          </Label>
        </div>
        <Input
          id="id"
          name="id"
          placeholder="Enter quiz id"
          className="w-full"
        />
      </div>
      <div>
        <Button type="submit" variant="primary" className="w-40">
          {pending ? <ButtonLoader /> : 'Save'}
        </Button>
      </div>
    </form>
  );
};
