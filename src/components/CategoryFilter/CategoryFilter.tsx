import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import s from "./CategoryFilter.module.css";
import { Box, Button, Typography } from "@mui/material";

type TaskFilterProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: TaskFilterProps) {
  const tasks = useSelector((state: RootState) => state.tasks.items);

  const defaultCategories = ["All", "Study", "Work", "Household"];

  const taskCategories = new Set(tasks.map((task) => task.category));

  const categories = [...new Set([...defaultCategories, ...taskCategories])];

  return (
    <div className={s.filterWrapper}>
      <Typography variant="h6" className={s.title}>
        Filter your tasks by category:
      </Typography>
      <Box className={s.filterButtons}>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onCategoryChange(category)}
            sx={{
              color: "white",
              padding: "10px 15px",
              cursor: "pointer",
              borderRadius: "8px",
              backgroundColor:
                selectedCategory === category
                  ? "rgba(0, 123, 255, 0.8)"
                  : "rgba(0, 123, 255, 0.292)",
              "&:hover": {
                backgroundColor:
                  selectedCategory === category
                    ? "rgba(0, 123, 255, 0.9)"
                    : "rgba(0, 123, 255, 0.4)",
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>
    </div>
  );
}
