import { type ClassValue, clsx } from "clsx";
import QueryString from "qs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalize = (str: string | React.Key) => {
  const text = String(str);
  const firstLetter = text.charAt(0);
  const remainingLetters = text.slice(1);
  const firstLetterCap = firstLetter.toUpperCase();
  const capitalizedWord = firstLetterCap + remainingLetters;
  return capitalizedWord;
};

export function serializateQuery(
  data: Record<string, any>,
  addQueryPrefix: boolean = true
) {
  return QueryString.stringify(data, { addQueryPrefix });
}

export function serializateUrlWithQuery<T extends object>(
  url: string,
  param: T
) {
  const query = serializateQuery(param);
  return url + query;
}
