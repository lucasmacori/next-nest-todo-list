import List from "@/components/List";

const fetchTaskList = async () => {
  const data = await fetch("http://127.0.0.1:3001/tasks", {
    cache: "no-cache",
  });
  return await data.json();
};

const ListPage: React.FC = async () => {
  const tasks = await fetchTaskList();
  return <List tasks={tasks} />;
};

export default ListPage;
