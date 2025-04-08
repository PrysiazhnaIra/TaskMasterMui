import { useDispatch } from "react-redux";
import css from "./Form.module.css";

import { addTask } from "../../redux/tasksSlice";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import {
  IoMdAdd as AddIcon,
  IoIosArrowDown as ArrowDownIcon,
} from "react-icons/io";

type FormProps = {
  onAdd: (task: { id: string | number; text: string }) => void;
};

export default function Form() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [category, setCategory] = useState("Study");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const textInput = form.elements.namedItem("text") as HTMLInputElement;

    const text = textInput.value.trim();
    if (text === "") return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      category,
    };

    dispatch(addTask(newTask));
    form.reset();
  };

  const handleAdd = () => {
    if (!text.trim()) {
      toast.custom(<div className={css.notification}>Enter text to add!</div>);
      return;
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ mb: "40px" }}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          fullWidth
          labelId="category-select-label"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
          IconComponent={ArrowDownIcon}
          sx={{
            "& .MuiSelect-icon": {
              right: 8,
              color: "text.secondary",
            },
          }}
        >
          <MenuItem value="Study">Study</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Household">Household</MenuItem>
        </Select>
      </FormControl>

      {/* <Stack direction="row" spacing={1} > */}
      <TextField
        className={css.inputWrapper}
        fullWidth
        name="text"
        value={text}
        variant="outlined"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your new task..."
      />
      <IconButton
        className={css.addIconWrap}
        type="submit"
        onClick={handleAdd}
        color="primary"
        sx={{
          color: "white",
          "&:hover": {
            color: "black",
          },
        }}
      >
        <AddIcon className={css.addIcon} />
      </IconButton>
      {/* </Stack> */}
    </form>
  );
}
