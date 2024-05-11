import { createContext } from "react";

type TaskListContextProps = {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: React.Dispatch<SetStateAction<boolean>>;
};

const TaskListContext = createContext<TaskListContextProps>({
  isEditDialogOpen: false,
});

export default TaskListContext;
