import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

function ImageGallery({ images, openImage }: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {images.map((image, index) => (
        <li key={image.id} className={css["gallery-item"]}>
          <ImageCard image={image} openImage={openImage} index={index} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
