"use server";
import Task from "@/types/task.type";

const patchTask = async (task: Task) => {
  console.log("Patching", task);
  await fetch(`http://todo-list-api:3000/tasks/${task.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

export default patchTask;
