import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceList from "./components/ServiceList/ServiceList";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import './App.css';

/**
 * Главный компонент приложения.
 * @returns React-элемент, представляющий приложение с маршрутизацией.
 */
function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ServiceList />} />
          <Route path="/:id/detail" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;