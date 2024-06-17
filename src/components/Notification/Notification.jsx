import css from "./Notification.module.css";
import { VscFeedback } from "react-icons/vsc";
export default function Notification() {
  return (
    <div className={css.container}>
      <VscFeedback size={50} />
      <p>No feedback yet</p>
    </div>
  );
}
