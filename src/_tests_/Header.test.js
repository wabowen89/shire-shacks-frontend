import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("<Header />", () => {

  it("has an image and attributes assigned to it", () => {

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>

    );

    const imgAlt = screen.getByAltText(/shire shacks icon/i);
    expect(imgAlt).toHaveAttribute("src", "https://secretdallas.com/wp-content/uploads/2022/04/hobbit.png");
    expect(imgAlt).toHaveAttribute("alt", "shire shacks icon");
    expect(imgAlt).toHaveAttribute("height", "50");

  });
});
