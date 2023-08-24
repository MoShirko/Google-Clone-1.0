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
// import { render, screen, fireEvent } from "@testing-library/jest-dom/extend-expect"
/**
 * Verify something should render
 */
test("HeaderOptions contain toolbar", () => {
  render(<HeaderOptions />);
  const pTag = screen.getByRole("toolbar");
  expect(pTag).toContainHTML("Settings");
});

test("Header contain searchIcon", () => {
  render(<Header />);
  const header = new Header();
  const searchIcon = screen.getByRole("Icon");
  expect(header).toContain(searchIcon);
});

test("Header contain searchIcon", () => {
  render(<Header />);
  const header = new Header();
  const searchIcon = screen.getByRole("Icon");
  expect(header).toContain(searchIcon);
});

test("Search Results contains", () => {
  render(<SearchResults />);
  const searchIcon = screen.getByRole("pageButtons");
  expect(searchIcon).toContain(<ChevronRightIcon/>);
});