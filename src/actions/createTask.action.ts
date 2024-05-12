"use server";
import { Task } from "@/types/task.type";

const createTask = async (task: Task) => {
  await fetch("http://api:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

export default createTask;
