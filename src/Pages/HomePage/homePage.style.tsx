import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import background from "../../Assets/Background/background.jpeg";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: url(${background});
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  padding: 40px 8%;
  justify-items: center;

  @media screen and (max-width: 830px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0px;
    grid-gap: 10px;
  }
`;

export const GalleryItem = styled.div`
  width: fit-content;
  &.slide {
    opacity: 0;
    transition-duration: 1s all;
  }

  &.active {
    opacity: 1;
    transition-duration: 1s;
  }
`;

export const Section = styled.section`
  position: relative;
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightArrow = styled(AiOutlineArrowRight)`
  position: absolute;
  top: 50%;
  right: 30px;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    right: 10px;
  }
`;

export const LeftArrow = styled(AiOutlineArrowLeft)`
  position: absolute;
  top: 50%;
  left: 30px;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    left: 10px;
  }
`;

export const FavoriteImageError = styled.div`
  color:white;
`