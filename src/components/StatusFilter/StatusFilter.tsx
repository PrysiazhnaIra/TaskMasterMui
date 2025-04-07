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
            color: "white",
            backgroundColor:
              filter === "all"
                ? "rgba(0, 123, 255, 0.8)"
                : "rgba(0, 123, 255, 0.292)",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor:
                filter === "all"
                  ? "rgba(0, 123, 255, 1)"
                  : "rgba(0, 123, 255, 0.5)",
            },
          }}
        >
          All
        </Button>

        <Button
          variant="contained"
          onClick={() => dispatch(setStatusFilter("active"))}
          sx={{
            color: "white",
            backgroundColor:
              filter === "active"
                ? "rgba(0, 123, 255, 0.8)"
                : "rgba(0, 123, 255, 0.292)",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor:
                filter === "active"
                  ? "rgba(0, 123, 255, 1)"
                  : "rgba(0, 123, 255, 0.5)",
            },
          }}
        >
          Active
        </Button>

        <Button
          variant="contained"
          onClick={() => dispatch(setStatusFilter("completed"))}
          sx={{
            color: "white",
            backgroundColor:
              filter === "completed"
                ? "rgba(0, 123, 255, 0.8)"
                : "rgba(0, 123, 255, 0.292)",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor:
                filter === "completed"
                  ? "rgba(0, 123, 255, 1)"
                  : "rgba(0, 123, 255, 0.5)",
            },
          }}
        >
          Completed
        </Button>
      </Box>
    </div>
  );
}
