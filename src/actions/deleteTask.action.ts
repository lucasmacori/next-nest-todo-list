"use server";

import { Task } from "@/types/task.type";

const deleteTask = async (task: Task) => {
  fetch(`http://api:3000/tasks/${task.id}`, {
    method: "DELETE",
  });
};

export default deleteTask;
