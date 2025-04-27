import { ImageUrlType } from "../App/App.types";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

function ImageCard({ image, openImage, index }: ImageCardProps) {
  return (
    <div className={css.container} onClick={() => openImage(index)}>
      <img
        className={css.thumb}
        src={image.urls[ImageUrlType.small]}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageCard;
