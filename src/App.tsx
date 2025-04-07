import "./App.css";
import "modern-normalize";
import initialTasks from "./data/tasks.json";
import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import StatusFilter from "./components/StatusFilter/StatusFilter";
import TaskCounter from "./components/TaskCounter/TaskCounter";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = window.localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : initialTasks;
  });

  const [currentColor, setCurrentColor] = useState(() => {
    return window.localStorage.getItem("backgroundColor") || "#92d192";
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    window.localStorage.setItem("backgroundColor", currentColor);
  }, [currentColor]);

  const handleChangeColor = (color: string) => {
    setCurrentColor(color);
  };

  const currentYear = new Date().getFullYear();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div style={{ padding: "1rem" }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </div>

      <Toaster />
      <div className="topWrapper">
        <div>
          <Background
            currentColor={currentColor}
            onChangeColor={handleChangeColor}
          />
          <h1 className="title">Enjoy your progress:</h1>

          <TaskCounter />
          <Form />
          <SearchFilter />
        </div>
        <div className="verticalSeparator"></div>
        <div className="filterWrapper">
          <StatusFilter />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>
      <TaskList selectedCategory={selectedCategory} />
      <p
        className="footer"
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "14px",
          borderTop: "1px solid #ddd",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
      >
        © {currentYear} Ira Prysiazhna. All rights reserved.
      </p>
    </ThemeProvider>
  );
}

export default App;
