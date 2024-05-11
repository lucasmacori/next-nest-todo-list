import List from "@/components/TaskList/TaskList.container";

const fetchTaskList = async () => {
  const data = await fetch("http://api:3000/tasks", {
    cache: "no-cache",
  });
  return await data.json();
};

const ListPage: React.FC = async () => {
  const tasks = await fetchTaskList();
  return <List tasks={tasks} />;
};

export default ListPage;
