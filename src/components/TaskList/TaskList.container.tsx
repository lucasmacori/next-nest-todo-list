"use client";
import { Task } from "@/types/task.type";
import TaskListComponent from "./TaskList.component";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import TaskEditorContainer from "./TaskEditor/TaskEditor.container";
import { useContext, useEffect, useState } from "react";
import TaskListContext from "@/context/TaskListContext/TaskList.context";
import fetchTasks from "@/actions/fetchTasks.action";

type TaskListContainerProps = {
  initialTasks: Task[];
};

const TaskListContainer: React.FC<TaskListContainerProps> = ({
  initialTasks,
}) => {
  const {
    tasks,
    setTasks,
    isEditDialogOpen,
    selectedTask,
    setSelectedTask,
    setIsEditDialogOpen,
  } = useContext(TaskListContext);

  const handleAddButtonClick = () => {
    setSelectedTask(undefined);
    setIsEditDialogOpen(true);
  };

  const refreshTasks = async () => {
    setTasks(await fetchTasks());
  };

  const handleRefreshButtonClick = async () => {
    await refreshTasks();
  };

  const handleCancelButtonClick = () => {
    setIsEditDialogOpen(false);
  };

  const handleTaskCreated = async () => {
    await refreshTasks();
  };

  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  return (
    <>
      <TaskListComponent
        tasks={tasks}
        onAddTaskButtonClick={handleAddButtonClick}
        onRefreshButtonClick={handleRefreshButtonClick}
      />

      <Dialog
        fullWidth={true}
        sx={{ maxWidth: "800px", margin: "auto" }}
        open={isEditDialogOpen}
        onClose={handleCancelButtonClick}
      >
        <DialogTitle>
          {!!selectedTask?.id ? "Update an existing task" : "Create a new task"}
        </DialogTitle>
        <DialogContent>
          <TaskEditorContainer onTaskCreated={handleTaskCreated} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskListContainer;
