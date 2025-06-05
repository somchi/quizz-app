import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { participants } from "../lib/constants";

const LeaderBrdTable = () => {
  return (
    <Table>
      <TableCaption>Leader Board</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Position</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {participants.map((participant, index) => (
          <TableRow key={participant.id}>
            <TableCell className="font-medium">{participant.id}</TableCell>
            <TableCell>{`${participant.firstName} ${participant.lastName}`}</TableCell>
            <TableCell>{participant.score}</TableCell>
          </TableRow>
        ))}
        {/* Map through the participants and display their scores */}
      </TableBody>
    </Table>
  );
};

export default LeaderBrdTable;
