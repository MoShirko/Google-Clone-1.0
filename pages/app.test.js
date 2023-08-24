import React from "react";
import "@testing-library/jest-dom";
import ReactDOM from "react-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./_app";
import HeaderOptions from "../components/HeaderOptions";
import Header from "../components/Header";
import HeaderOption from "../components/HeaderOption";
import index from "./index";
import SearchResults from "../components/SearchResults";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Avatar from "../components/Avatar";
import PaginationButtons from "../components/PaginationButtons";
// import { render, screen, fireEvent } from "@testing-library/jest-dom/extend-expect"
/**
 * Verify something should render
 */
 
test("HeaderOptions contain toolbar", () => {
  render(<HeaderOptions />);
  const pTag = screen.getByRole("toolbar");
  expect(pTag).toContainHTML("Settings");
});


test("Avatar contain Image", () => {
  render(<Avatar />);
  const image = screen.getByTestId("image");
  expect(image).toBeInTheDocument("true");
});

test("Pagination Button contains next tag", () => {
  render(<PaginationButtons />);
  const nextbutton = screen.getByTestId("nextbutton");
  expect(nextbutton).toBeInTheDocument("true");
});