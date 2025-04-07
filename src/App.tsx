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
// import { useDispatch } from "react-redux";
// import { fetchTasks } from "./redux/operations";
// import { AppDispatch } from "./redux/store";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  // Ініціалізація tasks
  const [tasks, setTasks] = useState(() => {
    const storedTasks = window.localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : initialTasks;
  });

  // Ініціалізація currentColor
  const [currentColor, setCurrentColor] = useState(() => {
    return window.localStorage.getItem("backgroundColor") || "#92d192";
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [isDarkMode, setIsDarkMode] = useState(false);

  // const dispatch = useDispatch<AppDispatch>();
  // const handleFetchTasks = () => {
  //   dispatch(fetchTasks());
  // };

  // Збереження tasks в localStorage при їх зміні
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Збереження currentColor в localStorage при його зміні
  useEffect(() => {
    window.localStorage.setItem("backgroundColor", currentColor);
  }, [currentColor]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleChangeColor = (color: string) => {
    setCurrentColor(color);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className={isDarkMode ? "dark-theme" : "container"}>
      <button onClick={toggleTheme} className="toggleBtn">
        {isDarkMode ? (
          <FaMoon className="moonIcon" />
        ) : (
          <FaSun className="sunIcon" />
        )}{" "}
      </button>

      <Toaster />
      <div className="topWrapper">
        <div>
          {/* <button onClick={handleFetchTasks}>Отримати завдання</button> */}
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
    </div>
  );
}

export default App;
