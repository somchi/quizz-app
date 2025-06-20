'use server';

import z from 'zod/v4';
import { ActionResponse } from '../types';
import { Participant, ParticipantAuth } from '../types/participant';
import { ParticipantAuthSchema } from '../schema/participant';
import { getAllFormFields } from '../utils';
import { cookies } from 'next/headers';

const registerParticipant = async (payload: ParticipantAuth) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/quiz/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
      }
    );

    const data = await response.json();

    if (response.status <= 201) {
      const setCookie = response.headers.get('set-cookie');
      if (response.status <= 201 && setCookie) {
        const [cookiePair, ...options] = setCookie.split(';');
        const [cookieName, cookieValue] = cookiePair.split('=');

        let expiresOption: Date | undefined = undefined;
        const expiresString = options.find((opt) =>
          opt.trim().toLowerCase().startsWith('expires=')
        );

        if (expiresString) {
          const dateStr = expiresString.split('=')[1]?.trim();
          if (dateStr) expiresOption = new Date(dateStr);
        }

        (await cookies()).set(cookieName.trim(), cookieValue.trim(), {
          path: '/',
          httpOnly: setCookie.toLowerCase().includes('httponly'),
          secure: setCookie.toLowerCase().includes('secure'),
          expires: expiresOption,
          sameSite: 'strict',
        });
      }

      return { status: 201, data };
    } else {
      throw new Error(data.message || 'Failed to register participant');
    }
  } catch (error) {
    const err = error as Error;

    return { status: 500, data: err.message };
  }
};

export const connectParticipant = async (
  state: ActionResponse<Participant>,
  payload: FormData
): Promise<ActionResponse<Participant>> => {
  try {
    const validate = ParticipantAuthSchema.safeParse({
      ...getAllFormFields(payload),
    });
    if (validate.success) {
      const response = await registerParticipant(validate.data);
      const data = response.data;
      if (response.status <= 201) {
        (await cookies()).set('token', data.token, {
          httpOnly: false,
          secure: true,
        });

        return {
          status: 201,
          message: 'Successfully joined quiz',
          data: data.participant,
        };
      } else {
        return {
          status: 500,
          message: data,
        };
      }
    } else {
      return {
        status: 400,
        message: z.prettifyError(validate.error),
      };
    }
  } catch (error) {
    const err = error as Error;
    return { status: 500, message: err.message };
  }
};

export const reconnectParticipant = async (
  state: ActionResponse<Participant>,
  formData: FormData
): Promise<ActionResponse<Participant>> => {
  try {
    const code = formData.get('code');
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/quiz/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      }
    );
    const data = await response.json();

    if (response.status <= 201) {
      (await cookies()).set('token', data.token, {
        httpOnly: false,
        secure: true,
      });
    }
    return {
      status: response.status,
      data: data.participant,
      message: data.message,
    };
  } catch (error) {
    const err = error as Error;
    return { status: 500, message: err.message };
  }
};
