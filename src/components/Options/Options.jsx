import css from "./Options.module.css";
import { AiFillFrown, AiFillMeh, AiFillSmile } from "react-icons/ai";
import { MdOutlineLockReset } from "react-icons/md";

export default function Options({ onFeedback, onReset, totalFeedback }) {
  return (
    <div className={css.container}>
      <button
        className={`${css.btn} ${css.btnGood}`}
        onClick={() => onFeedback("good")}
      >
        Good <AiFillSmile />
      </button>
      <button
        className={`${css.btn} ${css.btnNeutral}`}
        onClick={() => onFeedback("neutral")}
      >
        Neutral <AiFillMeh />
      </button>
      <button
        className={`${css.btn} ${css.btnBad}`}
        onClick={() => onFeedback("bad")}
      >
        Bad <AiFillFrown />
      </button>
      {totalFeedback >= 1 && (
        <button className={`${css.btn} ${css.btnReset}`} onClick={onReset}>
          Reset <MdOutlineLockReset />
        </button>
      )}
    </div>
  );
}
