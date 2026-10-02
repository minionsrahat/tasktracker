import type { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-green-300 bg-white px-4 py-10 text-center text-green-700 dark:border-green-800 dark:bg-green-900/40 dark:text-green-300">
        No tasks yet.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-green-100 rounded-lg border border-green-200 bg-white dark:divide-green-800 dark:border-green-800 dark:bg-green-900/40">
      {tasks.map((task) => (
        <li key={task.id} className="px-4 py-3 text-green-950 dark:text-green-50">
          {task.title}
        </li>
      ))}
    </ul>
  );
}
