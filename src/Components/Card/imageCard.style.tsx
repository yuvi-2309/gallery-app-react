import styled, { css } from "styled-components";

export const CardItem = styled.div`
  cursor: pointer;
  width: max-content;
  height: 100%;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

export const CardTop = styled.div.attrs((props: any) => ({
  modelView: props.modelView || false,
}))`
  height: 150px;
  width: 150px;

  img {
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.modelView &&
    css`
      height: 450px;
      width: 1000px;

      @media screen and (max-width: 450px) {
        height: 250px;
        width: 250px;
      }
    `}
`;

export const CardBottom = styled.div`
  padding: 5px 0;
`;

export const CardInfo = styled.div`
  color: #fff;
  width: 100%;
  display: flex;

  h4 {
    font-size: 16px;
    font-weight: normal;
  }
`;
