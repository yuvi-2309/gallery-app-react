import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import Dropdowns from "./dropdown";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Dropdowns component", () => {
  it("should render the component with country dropdown", () => {
    render(
      <Provider store={store}>
        <Dropdowns />
      </Provider>
    );

    expect(screen.getByLabelText("Country:")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Select Country")).toBeInTheDocument();

    const countryOptions = screen.getAllByRole("option");
    expect(countryOptions).toHaveLength(3);
  });

  test("should render the component with country dropdown", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<Dropdowns />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByLabelText("Country:")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Select Country")).toBeInTheDocument();
    const countryDropdown = screen.getByLabelText("Country:");
    fireEvent.change(countryDropdown, { target: { value: "India" } });

    await waitFor(() => {
      expect(screen.getByLabelText("State:")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Select State")).toBeInTheDocument();

      const stateOptions = screen.getAllByRole("option");
      expect(stateOptions).toHaveLength(7);
    });
  });

  test("should handle state change and render city dropdown", async() => {
    render(
      <Provider store={store}>
        <Dropdowns />
      </Provider>
    );

    const stateDropdown = screen.getByLabelText("State:");
    fireEvent.change(stateDropdown, { target: { value: "Tamil Nadu" } });
    await waitFor(() => {
      expect(screen.getByLabelText("City:")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Select City")).toBeInTheDocument();
    });
  });
});
