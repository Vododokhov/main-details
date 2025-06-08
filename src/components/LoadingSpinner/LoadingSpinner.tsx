import { PulseLoader } from 'react-spinners'
/**
 * Компонент индикатора загрузки.
 * Отображает спиннер во время выполнения асинхронных операций.
 * @returns React-элемент, представляющий индикатор загрузки.
 */
function LoadingSpinner() {
  return (
    <PulseLoader
      color="#7dc564"
    />
  )
}

export default LoadingSpinner;