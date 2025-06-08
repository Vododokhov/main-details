import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ITEMS,
  GET_ITEM_DETAIL,
  getItemDetailSuccess,
  getItemFailed,
  getItemLoading,
  getItemsSuccess,
} from "./DataSlice";
import { getItemApi, getItemDetailApi } from "../utils/api";
import { PayloadAction } from "@reduxjs/toolkit";
import { DataItem, DataItemDetail } from "../models/models";

/**
 * Saga для получения списка элементов.
 * @yields Действия Redux для обработки состояния загрузки и результатов.
 */
export function* getItemsSaga() {
  try {
    // Устанавливаем состояние загрузки
    yield put(getItemLoading());
    // Вызываем API для получения данных
    const payload: DataItem[] = yield call(getItemApi);
    // Успешное завершение с данными
    yield put(getItemsSuccess(payload));
  } catch (error) {
    // Обработка ошибки
    yield put(
      getItemFailed({
        error: (error as Error).message,
        errFunc: { type: GET_ITEMS, payload: "" },
      })
    );
  }
}
/**
 * Saga для получения деталей элемента по его ID.
 * @param action - Действие Redux, содержащее ID элемента.
 * @yields Действия Redux для обработки состояния загрузки и результатов.
 */
export function* getItemDetailSaga(action: PayloadAction<string>) {
  try {
    // Устанавливаем состояние загрузки
    yield put(getItemLoading());
    // Извлекаем ID из действия
    const id: string = action.payload;
    // Вызываем API для получения данных
    const payload: DataItemDetail = yield call(getItemDetailApi, id);
    // Успешное завершение с данными
    yield put(getItemDetailSuccess(payload));
  } catch (error) {
    // Обработка ошибки
    yield put(
      getItemFailed({ error: (error as Error).message, errFunc: action })
    );
  }
}
/**
 * Корневая saga для наблюдения за действиями.
 * @yields Саги для обработки действий GET_ITEMS и GET_ITEM_DETAIL.
 */
export function* sagas() {
  yield takeLatest(GET_ITEMS, getItemsSaga);// Наблюдение за действием GET_ITEMS
  yield takeLatest(GET_ITEM_DETAIL, getItemDetailSaga);// Наблюдение за действием GET_ITEM_DETAIL
}
