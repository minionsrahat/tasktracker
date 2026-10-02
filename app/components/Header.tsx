interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-5">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h1>
      </div>
    </header>
  );
}
