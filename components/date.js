import { parseISO, format as fmt } from "date-fns";

export default function Date({ dateString, format = "LLLL yyyy" }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{fmt(date, format)}</time>;
}
