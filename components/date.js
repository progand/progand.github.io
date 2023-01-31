import { parseISO, format as fmt } from "date-fns";

export default function Date({
  dateString,
  format = "LLLL yyyy",
  className = "",
}) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className={className}>
      {fmt(date, format)}
    </time>
  );
}
