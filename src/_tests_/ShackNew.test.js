import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShackNew from "../pages/ShackNew";

describe("<ShackNew />", () => {
  it("renders index page without crashing", () => {
    render(
      <BrowserRouter>
        <ShackNew />
      </BrowserRouter>
    );

    const page = screen.getByTestId("shacknew");
    expect(page).toBeInTheDocument();
  });
});
