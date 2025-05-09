import { Box, Button, FormGroup, TextField } from "@mui/material";
import styled from "styled-components";

export const ContactContainerForm = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const ContactContainerRow = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ContactFormInput = styled(TextField)`
  > div {
   border-radius: 8px;
  }
  input {
    padding: 8px;
  }

  p {
    color: red;
  }
`

export const ContactFormButton = styled(Button)`
  background-color: black !important;
  padding: 6px 55px !important;
  border-radius: 6px !important;
  color: white !important;
`