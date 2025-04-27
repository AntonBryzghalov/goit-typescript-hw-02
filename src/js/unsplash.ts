import axios from "axios";
import { UnsplashResponse } from "../components/App/App.types";

const unsplashAPI = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Accept-Version": "v1",
    Authorization: "Client-ID T6V8lBh5XuINNGx2g1WNVD6Mc6-TGgGZpXqw1ZuOzPA",
  },
});

export async function fetchImages(
  query: string,
  page: number,
  per_page = 10,
  orientation = "landscape"
): Promise<UnsplashResponse> {
  const response = await unsplashAPI.get<UnsplashResponse>("/search/photos", {
    params: {
      query,
      page,
      per_page,
      orientation,
    },
  });

  return response.data;
}
