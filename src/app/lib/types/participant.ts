import { z } from 'zod/v4';
import { ParticipantAuthSchema } from '../schema/participant';
import { Quiz } from '.';

export type ParticipantAuth = z.infer<typeof ParticipantAuthSchema>;

export interface ParticipantStatus {
  event: string;
  description: string;
}

export interface Participant {
  id: string;
  name: string;
  code: string;
  metadata: {
    parish: string;
  };
  quiz: Quiz;
  token: string;
}
