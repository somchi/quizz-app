import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { AppContext } from '@/app/context';

export const LeaderBoardTable = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <Table className="w-full rounded-lg overflow-hidden shadow-md bg-card text-card-foreground border border-border">
        <TableCaption className="text-lg font-semibold py-4 text-center">
          <p className="text-sm text-muted-foreground mt-1">
            Participants based on their scores
          </p>
        </TableCaption>

        <TableHeader className="bg-muted/40">
          <TableRow>
            <TableHead className="text-left">Position</TableHead>
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-left hidden md:block">Parish</TableHead>
            <TableHead className="text-left">Score</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Object.values(state.participants)
            .sort((a, b) => b.totalPoints - a.totalPoints)
            .map((participant, index) => (
              <TableRow
                key={index}
                className="hover:bg-muted/20 transition-colors cursor-pointer"
              >
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{participant.name}</TableCell>
                <TableCell className="hidden md:block">
                  {participant.parish}
                </TableCell>
                <TableCell>{participant.totalPoints}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};
