import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import s from "./CategoryFilter.module.css";

type TaskFilterProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: TaskFilterProps) {
  const tasks = useSelector((state: RootState) => state.tasks.items);

  // Фіксований список категорій
  const defaultCategories = ["All", "Study", "Work", "Household"];

  // Отримуємо унікальні категорії із задач
  const taskCategories = new Set(tasks.map((task) => task.category));

  // Отримуємо унікальні категорії
  const categories = [...new Set([...defaultCategories, ...taskCategories])];

  return (
    <div className={s.filterWrapper}>
      <h3 className={s.title}>Filter your tasks by category:</h3>
      <div className={s.filterButtons}>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? s.active : s.btn}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
