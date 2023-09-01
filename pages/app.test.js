import React from "react";
import "@testing-library/jest-dom";
import ReactDOM from "react-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./_app";
import HeaderOptions from "../components/HeaderOptions";
import Header from "../components/Header";
import HeaderOption from "../components/HeaderOption";
import index from "./index";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import PaginationButtons from "../components/PaginationButtons";
/**
 * Verify something should render
 */
test("HeaderOptions contain toolbar", () => {
  render(<HeaderOptions />);
  const pTag = screen.getByRole("toolbar");
  expect(pTag).toContainHTML("Settings");
});

// test("Header contain searchIcon", () => {
//   render(<Header />);
//   const header = new Header();
//   const searchIcon = screen.getByRole("Icon");
//   expect(header).toContain(searchIcon);
// });

// test("Avatar contain Image", () => {
//   render(<Avatar />);
//   const image = screen.getByAltText("pic");
//   expect(image).toBe("pic");
// });

test("Footer contain menu", () => {
  render(<Footer />);
  const pTag = screen.getByTestId("pTag");
  expect(pTag).toContainHTML("How Search works");
});

test("PaginationButtons renders", () => {
  render(<PaginationButtons />);
  const pTag = screen.getByTestId("submit");
  expect(pTag).toContainHTML("Next");
});