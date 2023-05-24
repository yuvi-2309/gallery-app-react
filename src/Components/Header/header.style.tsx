import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../Assets/Background/background.jpeg";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-image: url(${background});

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 12px 0 27px;
  max-width: 1100px;
`;

export const HeaderImage = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HeaderLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  margin-left: 15px;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const ActiveField = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 15px;
  padding-top: 3px;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
