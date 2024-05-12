"use server";

const fetchTasks = async () => {
  const response = await fetch("http://api:3000/tasks", {
    cache: "no-cache",
  });
  return await response.json();
};

export default fetchTasks;
