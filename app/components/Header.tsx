import { useEffect, useState } from "react";

interface HeaderProps {
  title: string;
}

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function Header({ title }: HeaderProps) {
  // Computed on the client so the date matches the user's own time zone,
  // not the server's.
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-5">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h1>
        <p className="mt-1 min-h-5 text-sm text-gray-500 dark:text-gray-400">
          {today && (
            <time dateTime={today.toLocaleDateString("en-CA")}>
              {dateFormatter.format(today)}
            </time>
          )}
        </p>
      </div>
    </header>
  );
}
