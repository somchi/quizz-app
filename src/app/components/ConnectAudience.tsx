'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export const ConnectAudience = () => {
  const router = useRouter();

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const id = formData.get('id') as string;
    const closeButton = document.querySelector('button span.sr-only');

    if (closeButton && closeButton.textContent === 'Close') {
      const parentButton = closeButton.closest('button');
      if (parentButton) {
        parentButton.click();
      }
    }
    router.replace(`/${id}/audience`);
  };

  return (
    <form onSubmit={handleClick}>
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
          Join
        </Button>
      </div>
    </form>
  );
};
