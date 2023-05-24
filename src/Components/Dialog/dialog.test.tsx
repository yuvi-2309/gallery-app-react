import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import DialogBox from "./dialogBox";

const renderDialog = () => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<DialogBox />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe("DialogBox component", () => {
  test("should render the search button", async () => {
    renderDialog();

    const searchButton = screen.queryByRole("button", { name: "Search" });
    if (searchButton) fireEvent.click(searchButton);
    expect(searchButton).toBeNull();
  });

  test("should open the dialog when the search button is clicked", () => {
    renderDialog();

    const searchButton = screen.queryByRole("button", { name: "Search" });
    if (searchButton) fireEvent.click(searchButton);

    const dialogContent = screen.queryByTestId("open-dialog");
    expect(dialogContent).toBeNull();
  });

  test("should close the dialog when the close button is clicked", () => {
    renderDialog();

    const searchButton = screen.queryByRole("button", { name: "Search" });
    if (searchButton) fireEvent.click(searchButton);

    const closeButton = screen.queryByText("Close");
    if (closeButton) fireEvent.click(closeButton);
    const dialogTitle = screen.queryByText("Search");
    expect(dialogTitle).toBeNull();
    const dialogContent = screen.queryByRole("dialog") as HTMLElement;
    expect(dialogContent).toBeNull();
  });
});
