import { useAppDispatch, useAppSelector } from "../../models/hook";

/**
 * Компонент для отображения сообщения об ошибке и кнопки повтора запроса.
 * @returns React-элемент, представляющий сообщение об ошибке и кнопку "Повторить".
 */
export default function ErrorItem(): React.ReactElement {
  // Получение функции, вызвавшей ошибку, из Redux store
  const errFunc = useAppSelector((state) => state.data.errorFunc);
  const dispatch = useAppDispatch();

  return (
    <div className="error flex flex-col items-center justify-center min-h-screen text-red-500">
      <span className="text-lg font-bold mb-4">Произошла ошибка</span>
      <button
        onClick={() => {
          if (errFunc) {
            dispatch(errFunc);
          }
        }}
        className="btn btn-primary"
      >
        Повторить
      </button>
    </div>
  );
}