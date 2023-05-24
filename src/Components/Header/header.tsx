import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaBars } from "react-icons/fa";
import DialogBox from "../Dialog/dialogBox";
import {
  handleCountryChange,
  handleCityChange,
  handleStateChange,
} from "../../Redux/action";
import {
  Nav,
  HeaderContainer,
  HeaderLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  HeaderImage,
  LogoWrapper,
  ActiveField,
} from "./header.style";

function Header({ toggleIcon, toggleFavorite }: any) {
  const dispatch = useDispatch();
  const [activeField, setActiveField] = useState("|  All Images");

  // Function to reset the redux state values to null to display all the images
  const handleImages = () => {
    dispatch(handleCountryChange(""));
    dispatch(handleStateChange(""));
    dispatch(handleCityChange(""));
    setActiveField("|  All Images");
    toggleFavorite(false);
  };

  // Function to toggle the Favorites menu
  const handleFavoriteImages = () => {
    setActiveField("|  Favorites");
    toggleFavorite(true);
  };

  return (
    <>
      <Nav>
        <HeaderContainer>
          <LogoWrapper onClick={handleImages}>
            <HeaderImage
              src="https://store-images.microsoft.com/image/apps.49134.9007199266251722.77a91271-6b10-4867-9929-d6aff2ab4235.8787d011-259a-4248-b630-d4d6593f675a?w=120"
              alt="image"
            />
            <HeaderLogo to="/" data-testid="header">
              Gallery HD <ActiveField>{activeField}</ActiveField>
            </HeaderLogo>
          </LogoWrapper>
          <MobileIcon onClick={toggleIcon}>
            <FaBars data-testid="sidebar-icon" />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="/"
                onClick={handleImages}
                data-testid="header-all-images"
              >
                All Images
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/"
                onClick={handleFavoriteImages}
                data-testid="header-favorites"
              >
                Favorites
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/"
                onClick={() => {
                  setActiveField("Images");
                  toggleFavorite(false);
                }}
              >
                <DialogBox toggleIcon={toggleIcon} />
              </NavLink>
            </NavItem>
          </NavMenu>
        </HeaderContainer>
      </Nav>
    </>
  );
}

export default Header;
