"use client";
import { Task } from "@/types/task.type";
import TaskEditorComponent from "./TaskEditor.component";
import { useContext, useEffect, useState } from "react";
import TaskListContext from "@/context/TaskListContext/TaskList.context";
import createTask from "@/actions/createTask.action";
import patchTask from "@/actions/patchTask.action";

type TaskEditorContainerProps = {
  onTaskCreated: () => void;
};

const TaskEditorContainer: React.FC<TaskEditorContainerProps> = ({
  onTaskCreated,
}) => {
  const { selectedTask, setIsEditDialogOpen } = useContext(TaskListContext);
  const [editedTask, setEditedTask] = useState<Task>({
    title: "",
    description: "",
    done: false,
  });

  useEffect(() => {
    if (!!selectedTask) {
      setEditedTask((editedTask: Task) => {
        editedTask.id = selectedTask.id;
        editedTask.title = selectedTask.title;
        editedTask.description = selectedTask.description;
        editedTask.done = selectedTask.done;
        return editedTask;
      });
    }
  }, [selectedTask]);

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

  const handleSaveButtonClick = () => {
    if (!!editedTask.id) {
      patchTask(editedTask);
    } else {
      createTask(editedTask);
    }
    setIsEditDialogOpen(false);
    onTaskCreated();
  };

  const handleCancelButtonClick = () => {
    setIsEditDialogOpen(false);
  };

  return (
    <TaskEditorComponent
      onCancelButtonClick={handleCancelButtonClick}
      onSaveButtonClick={handleSaveButtonClick}
      onDescriptionFieldChange={handleDescriptionFieldChange}
      onTitleFieldChange={handleTitleFieldChange}
      task={selectedTask}
    />
  );
};

export default TaskEditorContainer;
