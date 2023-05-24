import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import store from "../../Redux/store";

describe("HomePage", () => {
  test("renders the sidebar, header, and image gallery", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    
    const sidebarElement = getByTestId("close-icon");
    expect(sidebarElement).toBeInTheDocument();

    const headerElement = getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  test("toggles the sidebar when the icon is clicked", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const iconElement = getByTestId("sidebar-icon");
    fireEvent.click(iconElement);
    expect(getByTestId("side-bar")).toBeInTheDocument();
  });
});
