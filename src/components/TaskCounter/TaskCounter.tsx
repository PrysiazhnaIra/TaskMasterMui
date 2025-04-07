import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import s from "./TaskCounter.module.css";

export default function TaskCounter() {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector((state: RootState) => state.tasks.items);

  type TaskCount = {
    active: number;
    completed: number;
  };

  // На базі стану Redux отримуємо похідні дані
  // const count = tasks.reduce(
  //   (accumulator: TaskCount, task: { completed: boolean }) => {
  //     if (task.completed) {
  //       accumulator.completed += 1;
  //     } else {
  //       accumulator.active += 1;
  //     }
  //     return accumulator;
  //   },
  //   { active: 0, completed: 0 } as TaskCount
  // );

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className={s.progressWrapper}>
      {/* <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p> */}
      <progress className={s.progress} value={progress} max="100"></progress>
      <p>
        {completedTasks} / {totalTasks} tasks completed
      </p>
    </div>
  );
}
