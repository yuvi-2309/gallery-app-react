import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";

test("renders learn react link", () => {
  render(
    <MemoryRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Gallery HD/i);
  expect(linkElement).toBeInTheDocument();
});
