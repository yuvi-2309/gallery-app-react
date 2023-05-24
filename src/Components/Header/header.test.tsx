import { render, fireEvent } from "@testing-library/react";
import Header from "./header";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import {
  handleCountryChange,
  handleCityChange,
  handleStateChange,
} from "../../Redux/action";

const toggleIcon = jest.fn();
const toggleFavorite = jest.fn();
const setActiveField = jest.fn();

test("should render the header logo", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <Header
                toggleIcon={toggleIcon}
                toggleFavorite={toggleFavorite}
                dispatch={{
                  handleCountryChange,
                  handleStateChange,
                  handleCityChange,
                }}
                setActiveField={setActiveField}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  const headerLogo = getByTestId("header");
  expect(headerLogo).toBeInTheDocument();

  const favorites = getByTestId("header-favorites");
  expect(favorites).toBeInTheDocument();

  const allImages = getByTestId("header-all-images");
  expect(allImages).toBeInTheDocument();
});

test('should handle "All Images" click event', () => {
  const handleCountryChange = jest.fn();
  const handleStateChange = jest.fn();
  const handleCityChange = jest.fn();
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <Header
                toggleIcon={toggleIcon}
                toggleFavorite={toggleFavorite}
                dispatch={{
                  handleCountryChange,
                  handleStateChange,
                  handleCityChange,
                }}
                setActiveField={setActiveField}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  const allImagesNavLink = getByTestId("header-all-images");
  fireEvent.click(allImagesNavLink);
  expect(allImagesNavLink).toBeInTheDocument();
});

test('should handle "Favorites" click event', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <Header
                toggleIcon={toggleIcon}
                toggleFavorite={toggleFavorite}
                dispatch={{
                  handleCountryChange,
                  handleStateChange,
                  handleCityChange,
                }}
                setActiveField={setActiveField}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  const favoritesNavLink = getByTestId("header-favorites");
  fireEvent.click(favoritesNavLink);
  expect(setActiveField).toHaveBeenCalledTimes(0);
});

test("should render the dialog box", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <Header
                toggleIcon={toggleIcon}
                toggleFavorite={toggleFavorite}
                dispatch={{
                  handleCountryChange,
                  handleStateChange,
                  handleCityChange,
                }}
                setActiveField={setActiveField}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  const dialogBox = getByTestId("dialog-title");
  fireEvent.click(dialogBox);
});
