import css from "./Description.module.css";
import { GiCoffeeBeans } from "react-icons/gi";
export default function Description() {
  return (
    <div className={css.header}>
      <h1 className={css.title}>
        Sip Happens Café <GiCoffeeBeans color="brown" />
      </h1>

      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
