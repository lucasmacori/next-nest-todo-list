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
  onCompleteTask: (task: Task, isDone: boolean) => void;
  onDeleteTask: (task: Task) => void;
  onSelectTask: (task: Task) => void;
  task: Task;
};

const TaskListElement: React.FC<TaskListElementProps> = ({
  onCompleteTask,
  onDeleteTask,
  onSelectTask,
  task,
}) => (
  <ListItem
    secondaryAction={
      <>
        <IconButton
          edge="end"
          onClick={() => onSelectTask(task)}
          aria-label="edit"
        >
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
      <Checkbox
        edge="start"
        onChange={(event) => onCompleteTask(task, event.target.checked)}
        defaultChecked={task.done}
      ></Checkbox>
    </ListItemIcon>
    <ListItemText>{task.title}</ListItemText>
  </ListItem>
);

export default TaskListElement;
