import styled from "styled-components";
import { DialogTitle } from "@material-ui/core";

interface TitleProps {
  fontSize?: string;
}

export const DialogWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(DialogTitle)`
  font-size: 20px;
`;

export const Button = styled.button<TitleProps>`
  background: inherit;
  color: white;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.fontSize || "16px"};
  height: 100%;
  cursor: pointer;
  border: none;
`;

export const SubmitButton = styled.button`
  width: 82%;
  padding: 12px;
  margin: 0 8% 5px 9%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #356da8;
  color: white;
`;
