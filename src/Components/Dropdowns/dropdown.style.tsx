import styled from "styled-components";

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Option = styled.option``;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
