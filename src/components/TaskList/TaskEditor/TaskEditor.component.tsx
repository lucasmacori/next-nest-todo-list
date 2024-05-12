import { Task } from "@/types/task.type";
import { Button, FormControl } from "@mui/material";
import {
  StyledButtonContainer,
  StyledFormGroup,
  StyledTextField,
} from "../style";
import { Check, Clear } from "@mui/icons-material";

type TaskEditorComponentProps = {
  onCancelButtonClick: () => void;
  onCreateButtonClick: () => void;
  onDescriptionFieldChange: (description: string) => void;
  onTitleFieldChange: (title: string) => void;
  task?: Task;
};

const TaskEditorComponent: React.FC<TaskEditorComponentProps> = ({
  onCancelButtonClick,
  onCreateButtonClick,
  onDescriptionFieldChange,
  onTitleFieldChange,
  task,
}) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <StyledFormGroup>
        <FormControl required>
          <StyledTextField
            fullWidth={true}
            placeholder="Title"
            variant="outlined"
            name="title"
            onChange={(event) => onTitleFieldChange(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <StyledTextField
            fullWidth={true}
            placeholder="Description"
            variant="outlined"
            name="description"
            onChange={(event) => onDescriptionFieldChange(event.target.value)}
            multiline
          />
        </FormControl>

        <StyledButtonContainer>
          <Button
            className="button"
            variant="outlined"
            startIcon={<Clear />}
            onClick={onCancelButtonClick}
          >
            Cancel
          </Button>
          <Button
            className="button"
            variant="contained"
            type="submit"
            endIcon={<Check />}
            onClick={onCreateButtonClick}
          >
            Create
          </Button>
        </StyledButtonContainer>
      </StyledFormGroup>
    </form>
  );
};

export default TaskEditorComponent;
