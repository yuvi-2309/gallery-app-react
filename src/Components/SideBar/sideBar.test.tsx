import { render, fireEvent } from "@testing-library/react";
import SideBar from "./sideBar";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const toggleIconMock = jest.fn();
const handleImagesMock = jest.fn();
const toggleFavorite = jest.fn();

test("renders all menu links", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <SideBar
                isOpen={true}
                toggleIcon={toggleIconMock}
                handleImages={handleImagesMock}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  const favoritesLink = getByTestId("favorites");
  expect(favoritesLink).toBeInTheDocument();

  const dialogBoxLink = getByTestId("dialog-title");
  expect(dialogBoxLink).toBeInTheDocument();
});

test("calls toggleIcon function when close icon is clicked", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <SideBar
                isOpen={true}
                toggleIcon={toggleIconMock}
                handleImages={handleImagesMock}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  const closeIcon = getByTestId("close-icon");

  fireEvent.click(closeIcon);
  expect(toggleIconMock).toHaveBeenCalled();
});

test('calls handleImages function when "All Images" link is clicked', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <SideBar
                isOpen={true}
                toggleIcon={toggleIconMock}
                handleImages={handleImagesMock}
                toggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  const allImagesLink = getByTestId("all-images");

  fireEvent.click(allImagesLink);
  expect(allImagesLink).toBeInTheDocument();
});
