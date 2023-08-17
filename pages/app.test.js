import React from 'react';
// import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from "./_app";
import HeaderOptions from "../components/HeaderOptions";
import HeaderOption from "../components/HeaderOption";
import index from "./index"
/**
 * Verify something should render
 */
 test('App should render', () => {
    render(<HeaderOptions/>);
    expect(screen.getByRole('toolbar')).toHaveTextContent('settings');
  });

  // test('App should render', () => {
  //   render(<Header/>);
  //   const header = new Header;
  //   const searchIcon = screen.getByRole('searchIcon');
  //   expect(header).toContain(searchIcon);
  // });