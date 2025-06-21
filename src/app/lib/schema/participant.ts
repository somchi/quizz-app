import { z } from 'zod/v4';

export const ParticipantAuthSchema = z.object({
  name: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? 'Name is required'
          : 'Name must be a string',
    })
    .nonempty(),
  quizCode: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? 'Quizcode is required'
          : 'Quizcode must be a string',
    })
    .nonempty(),
  parish: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? 'Parish is required'
          : 'Parish must be a string',
    })
    .nonempty(),
});
