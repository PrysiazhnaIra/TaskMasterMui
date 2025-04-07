import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67ee98cdc11d5ff4bf7a3c60.mockapi.io/pro";

export const fetchTasks = createAsyncThunk("tasks/fetchAllTasks", async () => {
  const response = await axios.get("/tasks");
  console.log("Отримані дані:", response.data);

  return response.data;
});
