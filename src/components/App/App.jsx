import css from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import { useState, useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

//? Робимо змінну в яку записуємо функцію яку використовуємо в useState для зчитування з локал сторедж ще до монтування комполнента
const getInitialFeedback = () => {
  const savedFeedback = localStorage.getItem("feedback");
  return savedFeedback
    ? JSON.parse(savedFeedback)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const handleResetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <div className={css.container}>
      <Description />
      <Options
        onFeedback={updateFeedback}
        onReset={handleResetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback >= 1 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
