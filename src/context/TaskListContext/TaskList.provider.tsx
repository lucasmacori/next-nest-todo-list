"use client";
import { useState } from "react";
import TaskListContext from "./TaskList.context";
import Task from "@/types/task.type";

type TaskListProviderProps = {
  children: React.ReactNode;
};

const TaskListProvider: React.FC<TaskListProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        setTasks,
        selectedTask,
        setSelectedTask,
        isEditDialogOpen,
        setIsEditDialogOpen,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
