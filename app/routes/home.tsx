import { useState } from "react";
import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { TaskList } from "../components/TaskList";
import type { Task } from "../types/task";

const APP_NAME = "Task Tracker";

export function meta({}: Route.MetaArgs) {
  return [
    { title: APP_NAME },
    { name: "description", content: "A simple task tracker." },
  ];
}

export default function Home() {
  const [tasks] = useState<Task[]>([]);

  return (
    <>
      <Header title={APP_NAME} />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <TaskList tasks={tasks} />
      </main>
    </>
  );
}
