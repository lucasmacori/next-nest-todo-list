"use client";
import { Task } from "@/types/task.type";
import TaskListComponent from "./TaskList.component";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import TaskEditorContainer from "./TaskEditor/TaskEditor.container";
import { useContext, useState } from "react";
import TaskListContext from "@/context/TaskListContext/TaskList.context";
import fetchTasks from "@/actions/fetchTasks.action";

type TaskListContainerProps = {
  initialTasks: Task[];
};

const TaskListContainer: React.FC<TaskListContainerProps> = ({
  initialTasks,
}) => {
  const { isEditDialogOpen, setIsEditDialogOpen } = useContext(TaskListContext);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleAddButtonClick = () => {
    setIsEditDialogOpen(true);
  };

  const handleCancelButtonClick = () => {
    setIsEditDialogOpen(false);
  };

  const handleTaskCreated = async () => {
    setTasks(await fetchTasks());
  };

  return (
    <>
      <TaskListComponent
        tasks={tasks}
        onAddTaskButtonClick={handleAddButtonClick}
      />

      <Dialog
        fullWidth={true}
        sx={{ maxWidth: "800px", margin: "auto" }}
        open={isEditDialogOpen}
        onClose={handleCancelButtonClick}
      >
        <DialogTitle>Create a new task</DialogTitle>
        <DialogContent>
          <TaskEditorContainer onTaskCreated={handleTaskCreated} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskListContainer;
