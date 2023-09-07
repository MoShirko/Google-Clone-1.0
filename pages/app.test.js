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
import SearchResults from "../components/SearchResults";
/**
 * Verify something should render
 */
jest.mock('next/router', () => require('next-router-mock'));

test("HeaderOptions contain toolbar", () => {
  render(<HeaderOptions />);
  const pTag = screen.getByRole("toolbar");
  expect(pTag).toContainHTML("Settings");
});

test("Avatar contain Image", () => {
  render(<Avatar />);
  const image = screen.getByTestId("image");
  expect(image).toContainHTML("image");
});

test("Footer contain p tag", () => {
  render(<Footer />);
  const pTag = screen.getByTestId("pTag");
  expect(pTag).toContainHTML("How Search works");
});


