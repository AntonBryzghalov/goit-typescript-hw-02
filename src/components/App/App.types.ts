export enum ImageUrlType {
  raw = "raw",
  full = "full",
  regular = "regular",
  small = "small",
  thumb = "thumb",
}

export type User = {
  name: string;
  [other: string]: unknown;
};

export type Image = {
  id: string;
  urls: Record<ImageUrlType, string>;
  description: string;
  alt_description: string;
  likes: number;
  user: User;
  [other: string]: unknown;
};

export type UnsplashResponse = {
  total: number;
  total_pages: number;
  results: Image[];
};

export type VoidAction = () => void;
export type OpenImageFunc = (imageIndex: number) => void;
