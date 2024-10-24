import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Asegúrate de que jest-dom esté configurado
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import ListPage from "../pages/ListPage";

// Crear un mock para axios
const mock = new MockAdapter(axios);

test("fetches and displays data", async () => {
  // Mockear la petición GET
  mock
    .onGet("https://6172cfe5110a740017222e2b.mockapi.io/elements")
    .reply(200, [{ id: "1", name: "Pauline Blanda", avatar: "avatar1.png" }]);

  // Renderizar la página de lista
  const { getByText } = render(<ListPage />);

  // Esperar que se muestre el nombre correcto en el DOM
  await waitFor(() => expect(getByText(/Pauline Blanda/i)).toBeInTheDocument());
});
