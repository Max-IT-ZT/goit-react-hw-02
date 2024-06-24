import css from "./Feedback.module.css";

export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
  positive,
}) {
  let positiveClass = "";
  if (positive < 40) {
    positiveClass = css.low;
  } else if (positive >= 40 && positive < 70) {
    positiveClass = css.medium;
  } else if (positive >= 70) {
    positiveClass = css.high;
  }

  return (
    <div className={css.container}>
      <h2 className={css.feedbackSum}>Feedback Summary</h2>
      <p className={css.text}>Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad}</p>

      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={`${css.text} ${css.textPositive} ${positiveClass}`}>
        Positive: {positive}%
      </p>
    </div>
  );
}
