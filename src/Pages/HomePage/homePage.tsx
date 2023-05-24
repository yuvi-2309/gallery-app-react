import { useState } from "react";
import countryData from "../../Assets/Data/countryData.json";
import {
  GalleryContainer,
  GalleryItem,
  Section,
  LeftArrow,
  RightArrow,
  Wrapper,
  FavoriteImageError,
} from "./homePage.style";
import { useSelector } from "react-redux";
import { Header, SideBar, ImageCard } from "../../Components";

function HomePage() {
  const { country, state, city } = useSelector((state: any) => state);
  const [isOpen, setIsOpen] = useState(false);
  const [modelView, setModelView] = useState(false);
  const [isFavorite, setIsFavorite] = useState<any[]>([]);
  const [showFavorite, setShowFavorite] = useState(false);

  // Function to toggle modal view based on the index number of the images
  const toggleModal = (index: number) => {
    setCurrent(index);
    setModelView(!modelView);
  };

  // Function to toggle Icon which is used to conditionally render header and sidebar
  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle favorite image as a new one or to remove the old one whenever the favorite icon is pressed
  const handleIsFavorite = (id: any) => {
    const existingIndex = isFavorite.findIndex((image: any) => image.id === id);

    if (existingIndex !== -1) {
      const updatedFavorites = [...isFavorite];
      updatedFavorites.splice(existingIndex, 1);
      setIsFavorite(updatedFavorites);
    } else {
      const image = countryData.images.find((image: any) => image.id === id);
      if (image) {
        const updatedFavorites = [...isFavorite, image];
        setIsFavorite(updatedFavorites);
      }
    }
  };

  // Filtered images is in a conditional basis based on the modal view or favorites view
  let filteredImages;
  if (modelView) {
    if (showFavorite) {
      filteredImages = isFavorite;
    } else {
      filteredImages = countryData.images;
    }
  } else {
    filteredImages = countryData.images.filter((image) => {
      if (country && image.country !== country) {
        return false;
      }
      if (state && image.state !== state) {
        return false;
      }
      if (city && image.city !== city) {
        return false;
      }
      return true;
    });
  }

  const [current, setCurrent] = useState(0);
  const length = filteredImages.length;

  // Function to handle the next slide of the modal view
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Function to handle the previous Slide of the modal View
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Gallery Content is used to display the images in the grid. It is defined conditionally based on the current view
  let galleryContent;
  if (showFavorite) {
    galleryContent = (
      <GalleryContainer>
        {isFavorite.length !== 0 ? (
          isFavorite.map((image: any, index: number) => (
            <GalleryItem key={image.id} onClick={() => toggleModal(index)}>
              <ImageCard
                src={require("../../Assets/CityImages/" + image.image)}
                id={image.id}
                alt={image.city}
                isFavorite={isFavorite}
                modelView={modelView}
                handleFavorite={handleIsFavorite}
                toggleModal={toggleModal}
              />
            </GalleryItem>
          ))
        ) : (
          <FavoriteImageError style={{ color: "white" }}>
            No images are available
          </FavoriteImageError>
        )}
      </GalleryContainer>
    );
    if (modelView) {
      galleryContent = (
        <Section>
          <LeftArrow onClick={previousSlide} />
          <RightArrow onClick={nextSlide} />
          {filteredImages.map((image: any, index: number) => (
            <GalleryItem
              key={image.id}
              onClick={() => toggleModal(index)}
              className={index === current ? "active" : "slide"}
            >
              {index === current && (
                <ImageCard
                  src={require("../../Assets/CityImages/" + image.image)}
                  alt={image.city}
                  modelView={modelView}
                  handleFavorite={handleIsFavorite}
                  id={image.id}
                  isFavorite={isFavorite}
                  toggleModal={toggleModal}
                />
              )}
            </GalleryItem>
          ))}
        </Section>
      );
    }
  } else if (!modelView) {
    galleryContent = (
      <GalleryContainer>
        {filteredImages.map((image: any, index: number) => (
          <GalleryItem key={image.id}>
            <ImageCard
              src={require("../../Assets/CityImages/" + image.image)}
              id={image.id}
              alt={image.city}
              handleFavorite={handleIsFavorite}
              isFavorite={isFavorite}
              toggleModal={toggleModal}
              index={index}
            />
          </GalleryItem>
        ))}
      </GalleryContainer>
    );
  } else {
    galleryContent = (
      <Section>
        <LeftArrow onClick={previousSlide} />
        <RightArrow onClick={nextSlide} />
        {filteredImages.map((image: any, index: number) => (
          <GalleryItem
            key={image.id}
            onClick={() => toggleModal(index)}
            className={index === current ? "active" : "slide"}
          >
            {index === current && (
              <ImageCard
                src={require("../../Assets/CityImages/" + image.image)}
                alt={image.city}
                modelView={modelView}
                handleFavorite={handleIsFavorite}
                id={image.id}
                isFavorite={isFavorite}
                toggleModal={toggleModal}
              />
            )}
          </GalleryItem>
        ))}
      </Section>
    );
  }

  return (
    <Wrapper>
      <SideBar
        isOpen={isOpen}
        toggleIcon={toggleIcon}
        toggleFavorite={setShowFavorite}
      />
      <Header toggleIcon={toggleIcon} toggleFavorite={setShowFavorite} />
      {galleryContent}
    </Wrapper>
  );
}

export default HomePage;
