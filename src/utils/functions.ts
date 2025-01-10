import clsx, { type ClassValue } from "clsx";
import moment, { type Moment } from "moment";
import { twMerge } from "tailwind-merge";

function formatDate(date: string | Moment | Date, pattern?: string) {
  return moment(date).format(pattern || "MMMM DD, YYYY");
}

export { formatDate };

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
