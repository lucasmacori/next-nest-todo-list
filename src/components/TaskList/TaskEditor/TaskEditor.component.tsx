"use client";
import { Task } from "@/types/task.type";
import { Button } from "@mui/material";
import {
  StyledButtonContainer,
  StyledFormGroup,
  StyledTextField,
} from "../style";
import { Check, Clear } from "@mui/icons-material";

type TaskEditorComponentProps = {
  onCancelButtonClick: () => void;
  task?: Task;
};

const TaskEditorComponent: React.FC<TaskEditorComponentProps> = ({
  onCancelButtonClick,
  task,
}) => {
  return (
    <StyledFormGroup>
      <StyledTextField
        fullWidth={true}
        placeholder="Title"
        focused={true}
        variant="outlined"
      />
      <StyledTextField
        fullWidth={true}
        placeholder="Description"
        variant="outlined"
        multiline
      />

      <StyledButtonContainer>
        <Button
          className="button"
          variant="outlined"
          startIcon={<Clear />}
          onClick={onCancelButtonClick}
        >
          Cancel
        </Button>
        <Button className="button" variant="contained" endIcon={<Check />}>
          Create
        </Button>
      </StyledButtonContainer>
    </StyledFormGroup>
  );
};

export default TaskEditorComponent;
