import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../models/hook";
import { getItems } from "../../redux/DataSlice";
import { Link } from "react-router-dom";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ErrorItem from "../ErrorMessage/ErrorItem";

/**
 * Компонент для отображения списка услуг.
 * @returns React-элемент, представляющий страницу со списком услуг.
 */
export default function Main(): React.ReactElement {
  const dispatch = useAppDispatch();

  // Получение данных из Redux store
  const items = useAppSelector((state) => state.data.items);
  const isError = useAppSelector((state) => state.data.error);
  const loading = useAppSelector((state) => state.data.loading);

  /**
   * Эффект для загрузки данных при монтировании компонента.
   */
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Список услуг</h2>

      {/* Состояние загрузки */}
      {loading && (
        <div className="flex justify-center items-center my-4">
          <LoadingSpinner />
        </div>
      )}

      {/* Сообщение об ошибке */}
      {isError && (
        <div className="my-4">
          <ErrorItem />
        </div>
      )}

      {/* Список услуг */}
      <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        {items.map((item) => (
          <Link
            to={`/${item.id}/detail`}
            key={item.id}
            className="block bg-white shadow-md rounded-lg p-4 hover:bg-gray-50 transition duration-300 align-baseline"
          >
            <li className="text-lg font-medium text-gray-800">
              <span className="material-symbols-outlined">phone_android</span>
              <span className="align-top ml-2">{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}