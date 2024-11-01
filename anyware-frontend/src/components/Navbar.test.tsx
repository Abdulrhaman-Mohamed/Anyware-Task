import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Component should Render", () => {
  it("renders the Navbar with logo and pages", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getAllByText("Study.com")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Study.com")[1]).toBeInTheDocument();

    const pages = ["Dasboard", "Quiz", "Announcement"];
    pages.forEach((page) => {
      expect(screen.queryAllByText(page)[0]).toBeInTheDocument();
      expect(screen.queryAllByText(page)[1]).toBeInTheDocument();
    });
  });

  it("opens the menu when the hamburger icon is clicked in mobile view", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );


    const menuButton = screen.getByLabelText(/account of current user/i);
    fireEvent.click(menuButton);

    expect(screen.getAllByText("Dasboard")[1]).toBeVisible();
    expect(screen.getAllByText("Quiz")[1]).toBeVisible();
    expect(screen.getAllByText("Announcement")[1]).toBeVisible();
  });
});
