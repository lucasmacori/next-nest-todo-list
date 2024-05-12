"use client";
import { Task } from "@/types/task.type";
import TaskEditorComponent from "./TaskEditor.component";
import { useContext, useState } from "react";
import TaskListContext from "@/context/TaskListContext/TaskList.context";
import createTask from "@/actions/createTask.action";

type TaskEditorContainerProps = {
  onTaskCreated: () => void;
  task?: Task;
};

const TaskEditorContainer: React.FC<TaskEditorContainerProps> = ({
  onTaskCreated,
  task,
}) => {
  const { setIsEditDialogOpen } = useContext(TaskListContext);
  const [editedTask, setEditedTask] = useState<Task>({
    title: "",
    description: "",
    done: false,
  });

  const handleTitleFieldChange = (title: string) => {
    setEditedTask((currentTask: Task) => {
      currentTask.title = title;
      return currentTask;
    });
  };

  const handleDescriptionFieldChange = (description: string) => {
    setEditedTask((currentTask: Task) => {
      currentTask.description = description;
      return currentTask;
    });
  };

  const handleCreateButtonClick = () => {
    createTask(editedTask);
    setIsEditDialogOpen(false);
    onTaskCreated();
  };

  const handleCancelButtonClick = () => {
    setIsEditDialogOpen(false);
  };

  return (
    <TaskEditorComponent
      onCancelButtonClick={handleCancelButtonClick}
      onCreateButtonClick={handleCreateButtonClick}
      onDescriptionFieldChange={handleDescriptionFieldChange}
      onTitleFieldChange={handleTitleFieldChange}
      task={task}
    />
  );
};

export default TaskEditorContainer;
