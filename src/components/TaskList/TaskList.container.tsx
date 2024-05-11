"use client";
import { Task } from "@/types/task.type";
import TaskListComponent from "./TaskList.component";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import TaskEditorContainer from "./TaskEditor/TaskEditor.container";
import { useContext } from "react";
import TaskListContext from "@/context/TaskListContext/TaskList.context";

type TaskListContainerProps = {
  tasks: Task[];
};

const TaskListContainer: React.FC<TaskListContainerProps> = ({ tasks }) => {
  const { isEditDialogOpen, setIsEditDialogOpen } = useContext(TaskListContext);

  const handleAddButtonClick = () => {
    setIsEditDialogOpen(true);
  };

  const handleCancelButtonClick = () => {
    setIsEditDialogOpen(false);
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
          <TaskEditorContainer />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskListContainer;
