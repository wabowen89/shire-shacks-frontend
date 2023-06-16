import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShackProtectedIndex from "../pages/ShackProtectedIndex";

describe("<ShackProtectedIndex />", () => {
  it("renders show page without crashing", () => {
    render(
      <BrowserRouter>
        <ShackProtectedIndex />
      </BrowserRouter>
    );

    const page = screen.getByTestId("shackprotectedindex");
    expect(page).toBeInTheDocument();
  });
});
