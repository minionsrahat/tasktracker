import type { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-gray-400 bg-gray-100 px-4 py-10 text-center text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
        No tasks yet.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-gray-300 rounded-lg border border-gray-300 bg-gray-100 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
      {tasks.map((task) => (
        <li key={task.id} className="px-4 py-3 text-green-950 dark:text-green-50">
          {task.title}
        </li>
      ))}
    </ul>
  );
}
