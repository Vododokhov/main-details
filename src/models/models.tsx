/**
 * Интерфейс для деталей элемента.
 */
export interface DataItem {
  id: string;
  name: string;
}
/**
 * Интерфейс для деталей элемента.
 */
export interface DataItemDetail {
  id: string;
  name: string;
  content: string;
  price: string;
}
/**
 * Интерфейс для элемента, получаемого из API.
 */
export interface Item {
  id: string;
  name: string;
  description: string;
}