import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";


export const cn = (...classes: string[]) => {
  return twMerge(clsx(classes));
}