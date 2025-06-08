import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/index.tsx";

/**
 * Хук для диспатчинга действий в Redux store.
 * Используется для типизации `dispatch` с учетом типа `AppDispatch`.
 * @returns Функция `dispatch` с типизацией `AppDispatch`.
 */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

/**
 * Хук для выборки данных из Redux store.
 * Используется для типизации `useSelector` с учетом типа `RootState`.
 * @template T - Тип данных, возвращаемых селектором.
 * @param selector - Функция селектора для извлечения данных из состояния.
 * @returns Данные, выбранные из состояния Redux.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;