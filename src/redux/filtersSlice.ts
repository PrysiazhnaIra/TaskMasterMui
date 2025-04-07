import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  status: "all" | "active" | "completed";
  text: string;
};

const initialState: FilterState = {
  status: "all",
  text: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatusFilter: (
      state,
      action: PayloadAction<"all" | "active" | "completed">
    ) => {
      state.status = action.payload;
    },
    setTextFilter: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { setStatusFilter, setTextFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
