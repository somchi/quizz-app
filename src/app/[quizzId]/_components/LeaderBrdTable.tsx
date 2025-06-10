import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { participants } from "../../lib/constants";

const LeaderBrdTable = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <Table className="w-full rounded-lg overflow-hidden shadow-md bg-card text-card-foreground border border-border">
        <TableCaption className="text-lg font-semibold py-4 text-center">
          <p className="text-sm text-muted-foreground mt-1">
            Top participants based on their scores
          </p>
        </TableCaption>

        <TableHeader className="bg-muted/40">
          <TableRow>
            <TableHead className="text-left">Position</TableHead>
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-left">Score</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {participants.map((participant, index) => (
            <TableRow
              key={participant.id}
              className="hover:bg-muted/20 transition-colors"
            >
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                {participant.firstName} {participant.lastName}
              </TableCell>
              <TableCell>{participant.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaderBrdTable;
