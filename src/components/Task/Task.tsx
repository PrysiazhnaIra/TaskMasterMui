import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import {
  deleteTask,
  toggleCompleted,
  updateTask,
} from "../../redux/tasksSlice";
import { useState } from "react";

type TaskProps = {
  task: {
    id: string | number;
    text: string;
    completed: boolean;
    category: string;
  };
  onDelete: (id: string | number) => void;
};

export default function Task({ task: { id, text, completed } }: TaskProps) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleToggle = () => {
    dispatch(toggleCompleted(id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    dispatch(updateTask({ id, text: newText, completed, category }));
    setIsEditing(false);
  };

  return (
    <>
      <div className={css.container}>
        <label className={css.checkboxWrapper}>
          <input
            type="checkbox"
            className={css.hiddenCheckbox}
            checked={completed}
            onChange={handleToggle}
          />
          <span className={css.customCheckbox}></span>
        </label>
        {isEditing ? (
          <input
            type="text"
            className={css.input}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <p className={css.text}>{text}</p>
        )}

        {isEditing ? (
          <button className={css.btn} onClick={handleSave}>
            <CiSaveDown1 className={css.editIcon} />
          </button>
        ) : (
          <button className={css.btn} onClick={handleEdit}>
            <MdEdit className={css.editIcon} />
          </button>
        )}

        <button className={css.btn} onClick={handleDelete}>
          <RiDeleteBin5Line className={css.dltIcon} />
        </button>
      </div>
    </>
  );
}
