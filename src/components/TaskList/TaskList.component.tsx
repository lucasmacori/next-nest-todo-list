"use client";

import { Task } from "@/types/task.type";
import { StyledContent, StyledFab, StyledList, StyledTitle } from "./style";
import TaskListElement from "./Element/TaskListElement.component";
import { Add, Refresh } from "@mui/icons-material";
import { uniqueId } from "lodash";
import deleteTask from "@/actions/deleteTask.action";
import { useContext } from "react";
import TaskListContext from "@/context/TaskListContext/TaskList.context";
import fetchTasks from "@/actions/fetchTasks.action";
import patchTask from "@/actions/patchTask.action";
import { IconButton, ListSubheader } from "@mui/material";

type TaskListComponentProps = {
  tasks: Task[];
  onAddTaskButtonClick: () => void;
  onRefreshButtonClick: () => void;
};

const TaskListComponent: React.FC<TaskListComponentProps> = ({
  tasks,
  onAddTaskButtonClick,
  onRefreshButtonClick,
}) => {
  const { setSelectedTask, setTasks, setIsEditDialogOpen } =
    useContext(TaskListContext);

  const refreshTask = async () => {
    setTasks(await fetchTasks());
  };

  const handleCompleteTask = async (task: Task, isDone: boolean) => {
    task.done = isDone;
    await patchTask(task);
    await refreshTask();
  };

  const handleDeleteTask = async (task: Task) => {
    await deleteTask(task);
    await refreshTask();
  };

  const handleSelectTask = (task: Task) => {
    setSelectedTask(task);
    setIsEditDialogOpen(true);
  };

  return (
    <StyledContent>
      <StyledTitle>
        <h1>Tasks</h1>
        <IconButton
          edge="end"
          onClick={onRefreshButtonClick}
          aria-label="refresh"
        >
          <Refresh />
        </IconButton>
      </StyledTitle>

      <StyledList>
        <ListSubheader>To do</ListSubheader>
        {tasks
          .filter((task) => !task.done)
          .map((task) => (
            <TaskListElement
              key={uniqueId()}
              task={task}
              onCompleteTask={handleCompleteTask}
              onDeleteTask={handleDeleteTask}
              onSelectTask={handleSelectTask}
            />
          ))}
      </StyledList>

      <StyledList>
        <ListSubheader>Done</ListSubheader>
        {tasks
          .filter((task) => task.done)
          .map((task) => (
            <TaskListElement
              key={uniqueId()}
              task={task}
              onCompleteTask={handleCompleteTask}
              onDeleteTask={handleDeleteTask}
              onSelectTask={handleSelectTask}
            />
          ))}
      </StyledList>

      <StyledFab
        variant="extended"
        color="primary"
        onClick={onAddTaskButtonClick}
      >
        <Add />
        <span>Add a new task</span>
      </StyledFab>
    </StyledContent>
  );
};

export default TaskListComponent;
