import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { SearchBarProps } from "./SearchBar.types";

function SearchBar({ onSubmit }: SearchBarProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const searchInput = form.elements.namedItem("search") as HTMLInputElement;
    const query = searchInput.value.trim();

    if (!query || query.length === 0) {
      toast.error("Please enter something to search for", {
        duration: 3000,
        position: "top-right",
      });
      form.reset();
      return;
    }

    onSubmit(query);
  }

  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Toaster />
    </>
  );
}

export default SearchBar;
