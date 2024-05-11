import List from "@/components/TaskList/TaskList.container";
import TaskListProvider from "@/context/TaskListContext/TaskList.provider";

const fetchTaskList = async () => {
  const data = await fetch("http://api:3000/tasks", {
    cache: "no-cache",
  });
  return await data.json();
};

const ListPage: React.FC = async () => {
  const tasks = await fetchTaskList();
  return (
    <TaskListProvider>
      <List tasks={tasks} />
    </TaskListProvider>
  );
};

export default ListPage;
