import s from "./StatusFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setStatusFilter } from "../../redux/filtersSlice";
import { Box, Button, Typography } from "@mui/material";

export default function StatusFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filters.status);

  return (
    <div className={s.wrapper}>
      <Typography variant="h6" className={s.title}>
        Filter your tasks by status:{" "}
      </Typography>
      <Box className={s.btnWrapper}>
        <Button
          variant="contained"
          onClick={() => dispatch(setStatusFilter("all"))}
          sx={{
            fontWeight: "bold",
            color: "primary.contrastText",
            backgroundColor:
              filter === "all" ? "primary.dark" : "primary.light",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor:
                filter === "all" ? "primary.dark" : "primary.light",
            },
          }}
        >
          All
        </Button>

        <Button
          variant="contained"
          onClick={() => dispatch(setStatusFilter("active"))}
          sx={{
            fontWeight: "bold",
            color: "primary.contrastText",
            backgroundColor:
              filter === "active" ? "primary.dark" : "primary.light",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor:
                filter === "active" ? "primary.dark" : "primary.light",
            },
          }}
        >
          Active
        </Button>

        <Button
          variant="contained"
          onClick={() => dispatch(setStatusFilter("completed"))}
          sx={{
            fontWeight: "bold",
            color: "primary.contrastText",
            backgroundColor:
              filter === "completed" ? "primary.dark" : "primary.light",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor:
                filter === "completed" ? "primary.dark" : "primary.light",
            },
          }}
        >
          Completed
        </Button>
      </Box>
    </div>
  );
}
