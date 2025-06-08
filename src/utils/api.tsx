import axios from "axios";
import { Item } from "../models/models";

/**
 * Функция для получения списка элементов.
 * @returns Промис, содержащий массив элементов.
 */
export const getItemApi = (): Promise<Item[]> => {
  return axios
    .get<Item[]>(import.meta.env.VITE_HOST)
    .then((response) => response.data);
};

/**
 * Функция для получения деталей элемента по его ID.
 * @param id - Идентификатор элемента.
 * @returns Промис, содержащий данные элемента.
 */
export const getItemDetailApi = (id: string): Promise<Item> => {
  return axios
    .get<Item>(`${import.meta.env.VITE_HOST}/${id}`)
    .then((response) => response.data);
};