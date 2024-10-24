import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Extiende Jest con métodos de dom
import { Provider } from "react-redux"; // Debes asegurarte de que estos imports sean correctos
import { BrowserRouter as Router } from "react-router-dom"; // Lo mismo aquí
import TasksPage from "../pages/TaskPage";
import { store } from "../store/store";

test("renders tasks component", () => {
  // Asegurarse de que el valor de renderización es correcto
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <TasksPage />
      </Router>
    </Provider>
  );
  expect(getByText(/Nueva Task/i)).toBeInTheDocument();
});

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
