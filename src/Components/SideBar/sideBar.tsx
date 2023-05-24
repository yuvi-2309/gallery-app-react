import {
  SideBarContainer,
  SideBarIcon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./sideBar.styles";
import { useDispatch } from "react-redux";
import {
  handleCountryChange,
  handleStateChange,
  handleCityChange,
} from "../../Redux/action";
import DialogBox from "../Dialog/dialogBox";

function SideBar({ isOpen, toggleIcon, toggleFavorite }: any) {
  const dispatch = useDispatch();

  // Function to reset the redux state values to null to display all the images
  const handleImages = () => {
    toggleIcon();
    dispatch(handleCountryChange(""));
    dispatch(handleStateChange(""));
    dispatch(handleCityChange(""));
    toggleFavorite(false);
  };

  // Function to toggle the Favorites menu
  const handleFavoriteImages = () => {
    toggleIcon();
    toggleFavorite(true);
  };

  return (
    <SideBarContainer isOpen={isOpen} data-testid="side-bar">
      <SideBarIcon onClick={toggleIcon}>
        <CloseIcon data-testid="close-icon" />
      </SideBarIcon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="/" onClick={handleImages} data-testid="all-images">
            All Images
          </SideBarLink>
          <SideBarLink
            to="/"
            onClick={handleFavoriteImages}
            data-testid="favorites"
          >
            Favorites
          </SideBarLink>
          <SideBarLink to="/">
            <DialogBox fontSize="1.5rem" />
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
