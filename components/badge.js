export default function Badge({ children, className = "" }) {
  return (
    <span
      className={
        "text-sm text-slate-200 bg-slate-500 rounded inline-block px-2 " +
        className
      }
    >
      {children}
    </span>
  );
}
