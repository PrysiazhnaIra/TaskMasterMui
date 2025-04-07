import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: string | number;
  text: string;
  completed: boolean;
  category: string;
};

type TasksState = {
  items: Task[];
};

const initialState: TasksState = {
  items: [
    { id: 0, text: "Learn Redux", completed: true, category: "Study" },
    { id: 1, text: "Learn English", completed: true, category: "Study" },
    { id: 2, text: "Learn React Router", completed: true, category: "Study" },
    { id: 3, text: "Complete hw", completed: false, category: "Study" },
    {
      id: 4,
      text: "Read and translate text from the book Advanced English",
      completed: false,
      category: "Study",
    },
    { id: 5, text: "Testing calendar", completed: true, category: "Work" },
    {
      id: 6,
      text: "Testing new mobile app",
      completed: true,
      category: "Work",
    },
    {
      id: 7,
      text: "Create design for new calendar",
      completed: false,
      category: "Work",
    },
    {
      id: 8,
      text: "Styles and adaptation for calendar",
      completed: false,
      category: "Work",
    },
    { id: 9, text: "Clean house", completed: false, category: "Household" },
    { id: 10, text: "Bake cake", completed: false, category: "Household" },
    {
      id: 11,
      text: "Fire meal",
      completed: false,
      category: "Household",
    },
  ],
};

//Reducer — це чиста функція, яка отримує поточний стан (state) і дію (action) та повертає новий стан (state). Редюсер не змінює існуючий стан, а створює новий, на основі старого та виконаної дії.

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //об'єкт, що містить методи для кожної дії (action).
    addTask: (state, action: PayloadAction<Task>) => {
      state.items.push(action.payload); // додаємо нове завдання до масиву
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const { id, text } = action.payload;
      const task = state.items.find((task) => task.id === id);
      if (task) {
        task.text = text;
      }
    },
    deleteTask: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((task) => task.id !== action.payload); // фільтруємо завдання за id
    },
    toggleCompleted: (state, action: PayloadAction<string | number>) => {
      const task = state.items.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed; // Перемикаємо стан
      }
    },
  },
});

// Експортуємо фабрики екшенів
export const { addTask, updateTask, deleteTask, toggleCompleted } =
  tasksSlice.actions;

// Експортуємо редюсер слайсу
export default tasksSlice.reducer;
