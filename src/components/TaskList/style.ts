import { Fab, FormGroup, List, TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTitle = styled.div`
  border-bottom: 1px solid #424242;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledContent = styled.main`
  width: 100%;
  max-width: 800px;
  margin: auto;
`;

export const StyledList = styled(List)`
  width: 100%;
`;

export const StyledFab = styled(Fab)`
  float: right;
`;

export const StyledFormGroup = styled(FormGroup)`
  width: 100%;
  max-width: 700px;
  margin: auto;
`;

export const StyledTextField = styled(TextField)`
  margin-top: 10px;
}
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;

  .button {
    max-width: 150px;
    &:not(:first-of-type) {
      margin-left: 10px;
    }
  }
}
`;
