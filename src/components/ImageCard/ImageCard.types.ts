import { Image, OpenImageFunc } from "../App/App.types";

export type ImageCardProps = {
  image: Image;
  openImage: OpenImageFunc;
  index: number;
};
