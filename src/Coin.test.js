import React from "react"
import { render } from "@testing-library/react";
import Coin, {HEADS_IMG_URL, TAILS_IMG_URL} from "./Coin";

it("renders Coin without crashing", function () {
  render(<Coin isHeads="true" />);
});

it("matches snapshot", function () {
  const { container } = render(<Coin isHeads="true" />);
  expect(container).toMatchSnapshot();
});

it("renders heads image when isHeads is true", function () {
  const { container } = render(<Coin isHeads="true" />);
  expect(container.querySelector(`img[src="${HEADS_IMG_URL}"]`)).toBeInTheDocument();
});

it("renders heads image when isHeads is false", function () {
  const { container } = render(<Coin isHeads="false" />);
  expect(container.querySelector(`img[src="${TAILS_IMG_URL}"]`)).toBeInTheDocument();
});