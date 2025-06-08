import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../models/hook";
import { getItemDetail } from "../../redux/DataSlice";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ErrorItem from "../ErrorMessage/ErrorItem";

/**
 * Компонент для отображения деталей услуги.
 * @returns React-элемент, представляющий страницу с деталями услуги.
 */
export default function ItemDetail(): React.ReactElement {
  const dispatch = useAppDispatch();

  // Получение данных из Redux store
  const detail = useAppSelector((state) => state.data.detail);
  const isError = useAppSelector((state) => state.data.error);
  const loading = useAppSelector((state) => state.data.loading);
  const { id } = useParams<{ id: string }>();

  /**
   * Эффект для загрузки данных при монтировании компонента или изменении ID.
   */
  useEffect(() => {
    if (id) {
      dispatch(getItemDetail(id));
    }
  }, [id, dispatch]);

  /**
   * Отображение состояния загрузки.
   */
  if (loading) {
    return (
      <div className="container mx-auto p-4">        
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  /**
   * Отображение сообщения об ошибке.
   */
  if (isError) {
    return <ErrorItem />;
  }

  /**
   * Отображение деталей услуги.
   */
  if (detail) {
    return (
      <div className="container mx-auto p-4">
        <Link
          to={`/`}
          key={id}
          className="block"
        >
          <span className="text-lg font-medium text-gray-800"><span className="material-symbols-outlined align-bottom">arrow_back_ios</span>На главную</span>
        </Link>
        <h2 className="text-2xl font-bold mb-4 text-center">Услуга: {detail.name}</h2>
        <div className="text-gray-700 mb-4 text-center">{detail.content}</div>
        <div className="text-green-600 font-semibold text-center">Цена: {detail.price} ₽</div>
      </div>
    );
  }

  /**
   * Заглушка на случай, если данные не загружены.
   */
  return <div className="text-center text-gray-500">Данные не найдены.</div>;
}