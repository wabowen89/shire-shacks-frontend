import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LogIn from "../components/LogIn";

describe("<Login />", () => {

  it("render with a form", () => {

    render(
      <BrowserRouter>
        <LogIn />
      </BrowserRouter>
    );

    const component = screen.getByTestId("login")
    expect(component).toBeInTheDocument();
  });
});