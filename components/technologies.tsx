import Link from "next/link";

export default function Technologies({
  children,
  technologies,
  className = "",
}: {
  children?: React.ReactNode;
  technologies?: string[];
  className?: string;
}) {
  const colors = [
    "text-blue-600",
    "text-purple-600",
    "text-emerald-700",
    "text-orange-700",
    "text-teal-700",
    "text-rose-600",
  ];
  return (
    <div className={className}>
      {technologies &&
        technologies.map((t, index) => (
          <Link
            href={`/technologies/${encodeURIComponent(t)}`}
            key={index}
            className="hover:opacity-60"
          >
            <span
              className={
                "inline-block text-xs font-medium tracking-wider uppercase mt-5 " +
                colors[index]
              }
            >
              {t}
            </span>
          </Link>
        ))}
      {children}
    </div>
  );
}
