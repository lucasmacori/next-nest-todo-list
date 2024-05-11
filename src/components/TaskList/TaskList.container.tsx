import { Task } from "@/types/task.type";
import TaskListComponent from "./TaskList.component";

type TaskListContainerProps = {
  tasks: Task[];
};

const TaskListContainer: React.FC<TaskListContainerProps> = ({ tasks }) => (
  <TaskListComponent tasks={tasks} />
);

export default TaskListContainer;
