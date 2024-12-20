import React from "react";
import { createRoot } from "react-dom/client";
import ToDoApp from "./components/TodoApp";
import "./css/main.css";

const root = createRoot(document.getElementById("root"));
root.render(<ToDoApp />);