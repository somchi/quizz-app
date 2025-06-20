import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formDataToJson = <T,>(formData: FormData) => {
  const json: Record<string, T | T[]> = {};

  for (const [key, value] of formData.entries()) {
    const arrayMatch = key.match(/^(\w+)\[(\d+)\]$/);

    if (arrayMatch) {
      const baseKey = arrayMatch[1];
      const index = parseInt(arrayMatch[2], 10);

      if (!json[baseKey]) {
        json[baseKey] = [] as T[];
      }

      try {
        (json[baseKey] as T[])[index] = value as T; // value is a stringified object
      } catch {
        (json[baseKey] as string[])[index] = JSON.stringify(value);
      }
    } else {
      json[key] = value as T;
    }
  }

  return json;
};

export const getAllFormFields = (
  formData: FormData
): Record<string, FormDataEntryValue | FormDataEntryValue[]> => {
  const data: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {};

  for (const [key, value] of formData.entries()) {
    if (key in data) {
      const existing = data[key];
      if (Array.isArray(existing)) {
        existing.push(value);
      } else {
        data[key] = [existing, value];
      }
    } else {
      data[key] = value;
    }
  }

  return data;
};

export const numberToLetter = (num: number): string => {
  const map = ['A', 'B', 'C', 'D'];
  return map[num] ?? '';
};

export const getClientCookie = (name: string) => {
  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));
  return cookie?.split('=')[1] || null;
};
