import Image from "next/image";
import Link from "next/link";
import Date from "./date";
import Technologies from "./technologies";

export default function ProjectsList({ projects }) {
  return (
    <div className={"grid gap-10 lg:gap-10 md:grid-cols-2 "}>
      {projects.map(
        ({ id, start, end, title, image, technologies }, projectIndex) => (
          <div className="cursor-pointer group" key={projectIndex}>
            <div className="overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105">
              <Link
                href={`/projects/${id}`}
                className="relative block aspect-video"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  priority={!projectIndex}
                  className="transition-all object-cover"
                />
              </Link>
            </div>
            <div>
              <Technologies
                technologies={technologies.slice(0, 3)}
                className="flex gap-3"
              />
              <div className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                <Link
                  href={`/projects/${id}`}
                  className="no-underline text-inherit"
                >
                  <span className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                    {title}
                  </span>
                </Link>
              </div>
              <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
                {start && <Date className="text-sm" dateString={start} />}
                {start && end && (
                  <span className="text-xs text-gray-300 dark:text-gray-600">
                    —
                  </span>
                )}
                {end && <Date className="text-sm" dateString={end} />}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
