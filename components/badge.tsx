export default function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
