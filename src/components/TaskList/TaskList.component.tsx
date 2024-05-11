"use client";

import { Task } from "@/types/task.type";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { uniqueId } from "lodash";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { StyledContent, StyledList } from "./style";

type TaskListComponentProps = {
  tasks: Task[];
};

const TaskListComponent: React.FC<TaskListComponentProps> = ({ tasks }) => (
  <StyledContent>
    <h1>Tasks</h1>
    <StyledList>
      {tasks.map((task) => (
        <ListItem
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </>
          }
          disablePadding
        >
          <ListItemText>{task.title}</ListItemText>
        </ListItem>
      ))}
    </StyledList>
  </StyledContent>
);

export default TaskListComponent;
