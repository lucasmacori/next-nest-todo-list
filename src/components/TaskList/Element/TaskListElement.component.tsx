import { Task } from "@/types/task.type";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type TaskListElementProps = {
  onDeleteTask: (task: Task) => void;
  task: Task;
};

const TaskListElement: React.FC<TaskListElementProps> = ({
  onDeleteTask,
  task,
}) => (
  <ListItem
    secondaryAction={
      <>
        <IconButton edge="end" aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          onClick={() => onDeleteTask(task)}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </>
    }
    disablePadding
  >
    <ListItemIcon>
      <Checkbox edge="start" checked={false}></Checkbox>
    </ListItemIcon>
    <ListItemText>{task.title}</ListItemText>
  </ListItem>
);

export default TaskListElement;
