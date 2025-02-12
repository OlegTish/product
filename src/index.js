import React from "react";
import ReactDOM from "react-dom/client";
import Store from "./Store"; // Главный компонент
import "./styles.css"; // Подключаем стили

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Store />);