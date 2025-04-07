import { useDispatch, useSelector } from "react-redux";
import css from "./SearchFilter.module.css";
import { RootState } from "../../redux/store";
import { setTextFilter } from "../../redux/filtersSlice";

type FilterProps = {
  value: string;
  onFilter: (filterText: string) => void;
};

export default function Filter() {
  const dispatch = useDispatch();
  const textFilter = useSelector((state: RootState) => state.filters.text);

  return (
    <div className={css.inputContainer}>
      <input
        type="text"
        value={textFilter}
        placeholder="Search your task..."
        onChange={(e) => dispatch(setTextFilter(e.target.value))}
      />
    </div>
  );
}
