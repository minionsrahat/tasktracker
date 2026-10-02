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
    <header className="border-b border-green-800 bg-green-700 dark:border-green-800 dark:bg-green-900">
      <div className="mx-auto max-w-2xl px-4 py-5">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-1 min-h-5 text-sm text-green-100 dark:text-green-200">
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
