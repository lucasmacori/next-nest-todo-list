import { Task } from "@/types/task.type";
import { SetStateAction, createContext } from "react";

type TaskListContextProps = {
  tasks: Task[];
  setTasks: React.Dispatch<SetStateAction<Task[]>>;
  selectedTask?: Task;
  setSelectedTask: React.Dispatch<SetStateAction<Task | undefined>>;
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: React.Dispatch<SetStateAction<boolean>>;
};

const TaskListContext = createContext<TaskListContextProps>({
  tasks: [],
  isEditDialogOpen: false,
});

export default TaskListContext;
