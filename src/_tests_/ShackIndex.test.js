import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShackIndex from "../pages/ShackIndex";

describe("<ShackIndex />", () => {

  it("renders index page without crashing", () => {

    render(
      <BrowserRouter>
        <ShackIndex />
      </BrowserRouter>
    );

    const page = screen.getByTestId("shackindex")
    expect(page).toBeInTheDocument();
  });
});