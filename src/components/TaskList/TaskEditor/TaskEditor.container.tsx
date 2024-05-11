"use client";
import { Task } from "@/types/task.type";
import TaskEditorComponent from "./TaskEditor.component";
import { useContext } from "react";
import TaskListContext from "@/context/TaskListContext/TaskList.context";

type TaskEditorContainerProps = {
  task?: Task;
};

const TaskEditorContainer: React.FC<TaskEditorContainerProps> = ({ task }) => {
  const { setIsEditDialogOpen } = useContext(TaskListContext);

  const handleCancelButtonClick = () => {
    setIsEditDialogOpen(false);
  };

  return (
    <TaskEditorComponent
      onCancelButtonClick={handleCancelButtonClick}
      task={task}
    />
  );
};

export default TaskEditorContainer;
