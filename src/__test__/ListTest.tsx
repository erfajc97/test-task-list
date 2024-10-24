import { render, waitFor } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import ListPage from "../pages/ListPage";

const mock = new MockAdapter(axios);

test("fetches and displays data", async () => {
  mock
    .onGet("https://6172cfe5110a740017222e2b.mockapi.io/elements")
    .reply(200, [{ id: "1", name: "Pauline Blanda", avatar: "avatar1.png" }]);

  const { getByText } = render(<ListPage />);

  await waitFor(() => expect(getByText(/Elemento 1/i)).toBeInTheDocument());
});
