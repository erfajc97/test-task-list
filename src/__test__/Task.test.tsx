import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import para Jest DOM
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import TasksPage from "../pages/TaskPage";
import { store } from "../store/store";

// Test para renderizar la página de Tasks
test("renders tasks component", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <TasksPage />
      </Router>
    </Provider>
  );
  expect(getByText(/Nueva Task/i)).toBeInTheDocument();
});

// Test para agregar una nueva tarea
test("adds a new task", () => {
  const { getByText, getByPlaceholderText } = render(
    <Provider store={store}>
      <Router>
        <TasksPage />
      </Router>
    </Provider>
  );

  // Hacer clic en "Nueva Task"
  fireEvent.click(getByText(/Nueva Task/i));

  // Seleccionar el input por placeholder
  const input = getByPlaceholderText("New Task Name");

  // Cambiar el valor del input y hacer clic en agregar
  fireEvent.change(input, { target: { value: "Nueva tarea" } });
  fireEvent.click(getByText(/ADD/i));

  // Verificar que la tarea se haya agregado al DOM
  expect(getByText(/Nueva tarea/i)).toBeInTheDocument();
});
