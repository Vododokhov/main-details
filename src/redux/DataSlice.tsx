import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataItem, DataItemDetail } from "../models/models";

/**
 * Интерфейс для состояния среза данных.
 */
interface InitialState {
  items: DataItem[];
  detail: DataItemDetail | null;
  errorFunc: PayloadAction<string> | null;
  error: string | null;
  loading: boolean;
}

/**
 * Начальное состояние для среза данных.
 */
const initialState: InitialState = {
  items: [],
  detail: null,
  errorFunc: null,
  error: "",
  loading: false,
};

/**
 * Создание среза данных для управления состоянием.
 */
const DataSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    /**
     * Успешное получение списка элементов.
     * @param state - Текущее состояние.
     * @param action - Действие, содержащее массив элементов.
     */
    getItemsSuccess(state, action: PayloadAction<DataItem[]>): void {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
      state.errorFunc = null;
    },

    /**
     * Обработка ошибки при получении данных.
     * @param state - Текущее состояние.
     * @param action - Действие, содержащее сообщение об ошибке и функцию, вызвавшую ошибку.
     */
    getItemFailed(
      state,
      action: PayloadAction<{
        error: string;
        errFunc: PayloadAction<string>;
      }>
    ): void {
      state.loading = false;
      state.error = action.payload.error;
      state.errorFunc = action.payload.errFunc;
      state.items = [];
    },

    /**
     * Начало загрузки данных.
     * @param state - Текущее состояние.
     */
    getItemLoading(state): void {
      state.loading = true;
      state.error = null;
      state.errorFunc = null;
      state.items = [];
      state.detail = null;
    },

    /**
     * Успешное получение деталей элемента.
     * @param state - Текущее состояние.
     * @param action - Действие, содержащее данные деталей элемента.
     */
    getItemDetailSuccess(state, action: PayloadAction<DataItemDetail>): void {
      state.loading = false;
      state.error = null;
      state.detail = action.payload;
    },
  },
});

/**
 * Действия для получения списка элементов.
 */
export const GET_ITEMS = "items/getItems";
export const getItems = createAction(GET_ITEMS);

/**
 * Действия для получения деталей элемента.
 */
export const GET_ITEM_DETAIL = "items/getItemDetail";
export const getItemDetail = createAction<string>(GET_ITEM_DETAIL);

/**
 * Экспорт действий из среза данных.
 */
export const {
  getItemsSuccess,
  getItemFailed,
  getItemLoading,
  getItemDetailSuccess,
} = DataSlice.actions;

export default DataSlice.reducer;