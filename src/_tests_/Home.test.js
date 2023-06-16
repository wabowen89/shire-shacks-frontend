import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("<Home />", () => {

  it("has an image and attributes assigned to it", () => {

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,

    );

    const imgAlt = screen.getByAltText(/shire shacks logo/i)
    expect(imgAlt).toHaveAttribute("src", "ShireShacksLogo.png");
    expect(imgAlt).toHaveAttribute("alt", "shire shacks logo");
    expect(imgAlt).toHaveAttribute("height", "200");
  });
});
