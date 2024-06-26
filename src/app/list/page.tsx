import fetchTasks from "@/actions/fetchTasks.action";
import List from "@/components/TaskList/TaskList.container";
import TaskListProvider from "@/context/TaskListContext/TaskList.provider";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const ListPage: React.FC = async () => {
  const tasks = await fetchTasks();
  return (
    <TaskListProvider>
      <List initialTasks={tasks} />
    </TaskListProvider>
  );
};

export default ListPage;
