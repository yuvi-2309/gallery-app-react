import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ImageCard from "./imageCard";

const renderImageCard = ({
  src,
  alt,
  modelView,
  handleFavorite,
  id,
  isFavorite,
  toggleModal,
  index,
}: any) => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route
          path="/"
          element={
            <ImageCard
              src={src}
              alt={alt}
              modelView={modelView}
              handleFavorite={handleFavorite}
              id={id}
              isFavorite={isFavorite}
              toggleModal={toggleModal}
              index={index}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );
};

describe("ImageCard", () => {
  const handleFavorite = jest.fn();
  const id = 1;
  const isFavorite = [{ id: 1 }];
  const toggleModal = jest.fn();
  const index = 0;
  const alt = "Example Image";
  const src = "example.jpg";
  const modelView = true;

  beforeEach(() => {
    renderImageCard({
      src,
      alt,
      modelView,
      handleFavorite,
      id,
      isFavorite,
      toggleModal,
      index,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the component with required props", () => {
    const imageElement = screen.getByAltText("Example Image");
    expect(imageElement).toHaveAttribute("src", "example.jpg");

    const cardInfoElement = screen.getByTestId("card-info");
    expect(cardInfoElement).toHaveTextContent(alt);
  });

  test("renders the component with the correct modelView prop", () => {
    const cardTopElement = screen.getByTestId("card-top");
    expect(cardTopElement).toHaveStyle(`height: 450px; width: 1000px;`);
  });

  test("calls handleToggleModal when CardTop is clicked", () => {
    const cardTopElement = screen.getByTestId("card-top");
    fireEvent.click(cardTopElement);

    expect(toggleModal).toHaveBeenCalledWith(index);
  });

  test("calls handleFavoriteId when star icon is clicked", () => {
    const starIcon = screen.getByTestId("filled-star-icon");
    fireEvent.click(starIcon);

    expect(handleFavorite).toHaveBeenCalledWith(id);
  });

  test("renders filled star icon when image is in the favorite list", () => {
    const filledStarIcon = screen.getByTestId("filled-star-icon");
    expect(filledStarIcon).toBeInTheDocument();
  });

  test("renders empty star icon when image is not in the favorite list", () => {
    const handleFavorite = jest.fn();
    const id = 1;
    const isFavorite = [{ id: 3 }];
    const toggleModal = jest.fn();
    const index = 0;
    const alt = "Example Image";
    const src = "example.jpg";
    const modelView = "front";

    renderImageCard({
      src,
      alt,
      modelView,
      handleFavorite,
      id,
      isFavorite,
      toggleModal,
      index,
    });

    const emptyStarIcon = screen.getByTestId("empty-star-icon");
    expect(emptyStarIcon).toBeInTheDocument();
  });
});

describe("ImageCard with different prop values", () => {
  test("renders the component with the correct modelView prop", () => {
    const src = "example.jpg";
    const modelView = false;
    const handleFavorite = jest.fn();
    const id = 1;
    const isFavorite = [{ id: 3 }];
    const toggleModal = jest.fn();
    const index = 0;
    const alt = "Example Image";
    renderImageCard({
      src,
      alt,
      modelView,
      handleFavorite,
      id,
      isFavorite,
      toggleModal,
      index,
    });

    if (modelView) {
      const cardTopElement = screen.getByTestId("card-top");
      expect(cardTopElement).toHaveStyle(`
          height: 150px;
          width: 150px;
        `);
    }
  });
});
