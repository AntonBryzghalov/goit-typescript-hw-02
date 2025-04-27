import { useEffect, useRef, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import { fetchImages } from "../../js/unsplash";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Image, OpenImageFunc, VoidAction } from "./App.types";

function App() {
  const totalPagesRef = useRef<number>(0);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(-1);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(query: string): void {
    if (!query || query.length === 0) {
      return;
    }

    setSearchQuery(query);
    setImages([]);
    setPage(1);
    totalPagesRef.current = 0;
  }

  const loadMore: VoidAction = () => setPage((currentPage) => currentPage + 1);
  const openImage: OpenImageFunc = (index) => setImageIndex(index);
  const closeImage: VoidAction = () => setImageIndex(-1);

  useEffect(() => {
    async function loadImages() {
      if (searchQuery.length === 0) return;

      setIsLoading(true);
      setError(null);
      try {
        const response = await fetchImages(searchQuery, page);
        setImages((prevImages: Image[]) => [
          ...prevImages,
          ...response.results,
        ]);
        totalPagesRef.current = response.total_pages;
      } catch {
        setError("Something went wrong. Try to refresh the page");
      } finally {
        setIsLoading(false);
      }
    }

    loadImages();
  }, [searchQuery, page]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage error={error} />}
      {!error && totalPagesRef.current > 0 && (
        <ImageGallery images={images} openImage={openImage} />
      )}
      {isLoading && <Loader />}
      {!isLoading && totalPagesRef.current > page && (
        <LoadMoreBtn onClick={loadMore} />
      )}

      {imageIndex >= 0 && (
        <ImageModal image={images[imageIndex]} close={closeImage} />
      )}
    </>
  );
}

export default App;
