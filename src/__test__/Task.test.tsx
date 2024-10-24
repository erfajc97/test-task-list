import { render, fireEvent } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import TasksPage from "../pages/TaskPage";
import { store } from "../store/store";

test("renders tasks component", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <TasksPage />
      </Router>
    </Provider>
  );
  expect(getByText(/Lista de Tasks/i)).toBeInTheDocument();
});

test("adds a new task", () => {
  const { getByText, getByRole } = render(
    <Provider store={store}>
      <Router>
        <TasksPage />
      </Router>
    </Provider>
  );

  fireEvent.click(getByText(/Agregar Nuevo Task/i));
  const input = getByRole("textbox");
  fireEvent.change(input, { target: { value: "Nueva tarea" } });
  fireEvent.click(getByText(/Agregar/i));

  expect(getByText(/Nueva tarea/i)).toBeInTheDocument();
});
