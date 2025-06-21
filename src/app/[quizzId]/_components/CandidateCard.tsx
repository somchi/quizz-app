import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Participant } from '@/app/lib/types/participant';
import React from 'react';

interface Props {
  data: Participant;
}

export const CandidateCard = ({ data }: Props) => {
  return (
    <Card className="w-full max-w-sm mx-auto bg-card shadow-lg rounded-2xl overflow-hidden transition hover:shadow-2xl cursor-pointer">
      <CardHeader className="flex flex-col items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt={data.name} />
          <AvatarFallback>
            {data.name.substring(2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <CardTitle className="text-center text-xl font-semibold text-secondary-foreground">
          <p>{data.name}</p>
          <p>Total point : {data.totalPoints}</p>
          <p>Correct answers: {data.correctAnswers}</p>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center px-4 pb-4">
        <CardDescription className="text-sm text-card-foreground">
          Parish: {data.parish}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
