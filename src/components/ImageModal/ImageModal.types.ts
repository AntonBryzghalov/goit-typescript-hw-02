import { Image } from "../App/App.types";

export type ImageModalParams = {
  image: Image;
  close: () => void;
};

export type ImageInfoParams = Pick<ImageModalParams, "image">;
