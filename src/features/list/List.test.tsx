import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import ListPage from "./List";
import useList from "./hooks/useList";
import { store } from "../../store/store";

vi.mock("./hooks/useList");

describe("ListPage Component", () => {
  beforeEach(() => {
    (useList as Mock).mockReturnValue({
      elements: [],
      loading: false,
    });
  });

  it("renders the Home button and title 'Listado de Elementos'", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ListPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Listado de Elementos")).toBeInTheDocument();
  });

  it("displays loading message when loading is true", () => {
    (useList as Mock).mockReturnValue({
      elements: [],
      loading: true,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ListPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Cargando datos...")).toBeInTheDocument();
  });

  it("does not display loading message when loading is false", () => {
    (useList as Mock).mockReturnValue({
      elements: [],
      loading: false,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ListPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByText("Cargando datos...")).not.toBeInTheDocument();
  });

  it("renders a list of elements", () => {
    (useList as Mock).mockReturnValue({
      elements: [
        { id: "1", name: "Element 1", avatar: "avatar1.png" },
        { id: "2", name: "Element 2", avatar: "avatar2.png" },
      ],
      loading: false,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ListPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Element 1")).toBeInTheDocument();
    expect(screen.getByText("Element 2")).toBeInTheDocument();
  });

  it("does not render elements when the list is empty", () => {
    (useList as Mock).mockReturnValue({
      elements: [],
      loading: false,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ListPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByText("Element 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Element 2")).not.toBeInTheDocument();
  });
});
