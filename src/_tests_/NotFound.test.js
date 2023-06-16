import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("<NotFound />", () => {

  it("has an image and attributes assigned to it", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const imgAlt = screen.getByAltText(/aragorn lost in the forest/i);
    expect(imgAlt).toHaveAttribute("src", "NotFoundGIF.gif");
    expect(imgAlt).toHaveAttribute("alt", "aragorn lost in the forest");
    expect(imgAlt).toHaveAttribute("height", "200");
  });
});
