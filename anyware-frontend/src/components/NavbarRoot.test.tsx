import { fireEvent, render, screen } from "@testing-library/react";
import NavbarRoot from "./NavbarRoot";
import { MemoryRouter } from "react-router-dom";
import i18n from "../i18n/config";

describe("Navbar Root Component", () => {
  beforeEach(() => {
    i18n.init();
  });

  it("should component render with links and items", () => {
    render(
      <MemoryRouter>
        <NavbarRoot />
      </MemoryRouter>
    );

    expect(screen.getByText(/Study.com/i)).toBeInTheDocument();

    const pages = ["Sign In", "Sign Up"];
    pages.forEach((page) => {
      expect(screen.getByText(page)).toBeInTheDocument();
    });
  });

  it.only("should langauge changed", () => {
    render(
      <MemoryRouter>
        <NavbarRoot />
      </MemoryRouter>
    );

    const langButton = screen.getByText(/english/i);
    fireEvent.click(langButton)
    expect(screen.getByText(/العربية/i)).toBeVisible()
    fireEvent.click(langButton)
    expect(screen.getByText(/english/i)).toBeVisible()
  });
});
