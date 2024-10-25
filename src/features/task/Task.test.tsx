import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import TasksPage from "./Task";
import { store } from "../../store/store";
import useTask from "./hooks/useTask";

vi.mock("./hooks/useTask");

describe("TasksPage Component", () => {
  beforeEach(() => {
    (useTask as Mock).mockReturnValue({
      tasks: [{ id: 1, description: "Sample Task" }],
      showModal: false,
      newTaskDesc: "",
      setShowModal: vi.fn(),
      setNewTaskDesc: vi.fn(),
      handleAddTask: vi.fn(),
    });
  });

  it("renders the Home button and 'Nueva Task' button", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TasksPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Nueva Task")).toBeInTheDocument();
  });

  it("renders a list of tasks", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TasksPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Sample Task")).toBeInTheDocument();
  });

  it("opens the modal when 'Nueva Task' button is clicked", () => {
    (useTask as Mock).mockReturnValue({
      tasks: [{ id: 1, description: "Sample Task" }],
      showModal: true,
      newTaskDesc: "",
      setShowModal: vi.fn(),
      setNewTaskDesc: vi.fn(),
      handleAddTask: vi.fn(),
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <TasksPage />
        </MemoryRouter>
      </Provider>
    );

    const newTaskButton = screen.getByText("Nueva Task");
    fireEvent.click(newTaskButton);

    expect(screen.queryByPlaceholderText("New Task Name")).toBeInTheDocument();
  });

  it("closes the modal when 'Cancelar' button is clicked", () => {
    const mockSetShowModal = vi.fn();

    (useTask as Mock).mockReturnValue({
      tasks: [{ id: 1, description: "Sample Task" }],
      showModal: true,
      newTaskDesc: "",
      setShowModal: mockSetShowModal,
      setNewTaskDesc: vi.fn(),
      handleAddTask: vi.fn(),
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <TasksPage />
        </MemoryRouter>
      </Provider>
    );

    const cancelButton = screen.getByText("Cancelar");
    fireEvent.click(cancelButton);

    expect(mockSetShowModal).toHaveBeenCalledWith(false);
  });

  it("adds a new task when ADD button is clicked", () => {
    const mockHandleAddTask = vi.fn();

    (useTask as Mock).mockReturnValue({
      tasks: [{ id: 1, description: "Sample Task" }],
      showModal: true,
      newTaskDesc: "New Task",
      setShowModal: vi.fn(),
      setNewTaskDesc: vi.fn(),
      handleAddTask: mockHandleAddTask,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <TasksPage />
        </MemoryRouter>
      </Provider>
    );

    const addButton = screen.getByText("ADD");
    fireEvent.click(addButton);

    expect(mockHandleAddTask).toHaveBeenCalled();
  });
});
