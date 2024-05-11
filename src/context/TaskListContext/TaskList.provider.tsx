"use client";
import { useState } from "react";
import TaskListContext from "./TaskList.context";

type TaskListProviderProps = {
  children: React.ReactNode;
};

const TaskListProvider: React.FC<TaskListProviderProps> = ({ children }) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);

  return (
    <TaskListContext.Provider
      value={{
        isEditDialogOpen,
        setIsEditDialogOpen,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
