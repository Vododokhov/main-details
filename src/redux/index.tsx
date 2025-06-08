import { configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import DataSlice from "./DataSlice";
import { sagas } from "./mySaga";

/**
 * Создание middleware для Redux Saga.
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Конфигурация Redux store.
 */
const store = configureStore({
  reducer: {
    /**
     * Редюсер для управления состоянием данных.
     */
    data: DataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

/**
 * Запуск корневой saga.
 */
sagaMiddleware.run(sagas);

/**
 * Типизация состояния Redux.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Типизация dispatch функции Redux.
 */
export type AppDispatch = typeof store.dispatch;

export default store;