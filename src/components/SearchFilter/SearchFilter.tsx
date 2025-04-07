import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTextFilter } from "../../redux/filtersSlice";
import { TextField } from "@mui/material";

type FilterProps = {
  value: string;
  onFilter: (filterText: string) => void;
};

export default function Filter() {
  const dispatch = useDispatch();
  const textFilter = useSelector((state: RootState) => state.filters.text);

  return (
    <TextField
      fullWidth
      variant="outlined"
      value={textFilter}
      placeholder="Search your task..."
      onChange={(e) => dispatch(setTextFilter(e.target.value))}
    />
  );
}
