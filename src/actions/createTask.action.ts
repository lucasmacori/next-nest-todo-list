"use server";
import { Task } from "@/types/task.type";

const createTask = async (task: Task) => {
  "use server";
  fetch("http://api:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

export default createTask;
