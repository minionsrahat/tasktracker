import type { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-gray-300 px-4 py-10 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
        No tasks yet.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
      {tasks.map((task) => (
        <li key={task.id} className="px-4 py-3 text-gray-900 dark:text-gray-100">
          {task.title}
        </li>
      ))}
    </ul>
  );
}
