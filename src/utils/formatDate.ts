import { format as formatDateFNS } from "date-fns";

interface IFormatDateProps {
  date: string;
  format: string;
}

export default function formatDate({ date, format }: IFormatDateProps): string {
  return formatDateFNS(new Date(date), format);
}
