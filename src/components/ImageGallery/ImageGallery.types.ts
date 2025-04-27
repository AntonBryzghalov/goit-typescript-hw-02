import { Image, OpenImageFunc } from "../App/App.types";

export type ImageGalleryProps = {
  images: Image[];
  openImage: OpenImageFunc;
};
