import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TasksPage from "./../pages/TaskPage";
test("renders tasks page", () => {
  render(<TasksPage />);

  const linkElement = screen.getByText(/Nueva Task/i);
  expect(linkElement).toBeInTheDocument();
});
