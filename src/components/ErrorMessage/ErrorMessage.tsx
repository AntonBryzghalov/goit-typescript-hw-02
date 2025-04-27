import css from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "./ErrorMessage.types";

function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className={css.error}>{error}</p>;
}

export default ErrorMessage;
