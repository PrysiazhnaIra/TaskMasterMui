import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";

const persistConfig = {
  key: "root", // Ключ для збереження
  storage, // Використовуємо localStorage
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

//reducer - функція із логікою зміни стану Redux
//Стор це об'єкт, який містить глобальний стан додатка
export const store = configureStore({
  reducer: {
    tasks: persistedReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Вимикаємо перевірку серіалізації
    }),
});

export const persistor = persistStore(store); // Запускаємо persist

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
