import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShackShow from "../pages/ShackShow";

describe("<ShackShow />", () => {

  it("renders show page without crashing", () => {

    render(
      <BrowserRouter>
        <ShackShow />
      </BrowserRouter>
    );

    const page = screen.getByTestId("shackshow")
    expect(page).toBeInTheDocument();
  });
});