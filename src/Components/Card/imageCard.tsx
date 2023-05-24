import { CardItem, CardTop, CardBottom, CardInfo } from "./imageCard.style";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function ImageCard({
  src,
  alt,
  modelView,
  handleFavorite,
  id,
  isFavorite,
  toggleModal,
  index,
}: any) {
  // Function to handle the id of the image when it is clicked as favorite
  const handleFavoriteId = () => {
    handleFavorite(id);
  };

  // Function to toggle the modal view
  const handleToggleModal = () => {
    toggleModal(id-1);
  };

  // Statement to check if the current image is a Favorite image or not
  const isImageFavorite = isFavorite.some((image: any) => image.id === id);

  return (
    <>
      <CardItem>
        <CardTop
          data-testid="card-top"
          modelView={modelView}
          onClick={handleToggleModal}
        >
          <img src={src} alt={alt} data-testid="image-modal" />
        </CardTop>
        <CardBottom>
          <CardInfo data-testid="favorite-icon">
            <h4 data-testid="card-info">{alt}</h4>
            {isImageFavorite ? (
              <AiFillStar
                onClick={handleFavoriteId}
                color="red"
                data-testid="filled-star-icon"
              />
            ) : (
              <AiOutlineStar
                onClick={handleFavoriteId}
                data-testid="empty-star-icon"
              />
            )}
          </CardInfo>
        </CardBottom>
      </CardItem>
    </>
  );
}

export default ImageCard;
