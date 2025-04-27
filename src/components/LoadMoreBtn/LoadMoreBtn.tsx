import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div className={css.more}>
      <button className={css.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
