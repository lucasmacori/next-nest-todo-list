"use client";

import { Task } from "@/types/task.type";
import { StyledContent, StyledFab, StyledList, StyledTitle } from "./style";
import TaskListElement from "./Element/TaskListElement.component";
import { Add } from "@mui/icons-material";
import { uniqueId } from "lodash";

type TaskListComponentProps = {
  tasks: Task[];
  onAddTaskButtonClick: () => void;
};

const TaskListComponent: React.FC<TaskListComponentProps> = ({
  tasks,
  onAddTaskButtonClick,
}) => (
  <StyledContent>
    <StyledTitle>
      <h1>Tasks</h1>
    </StyledTitle>

    <StyledList>
      {tasks.map((task) => (
        <TaskListElement key={uniqueId()} task={task} />
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

export default TaskListComponent;
