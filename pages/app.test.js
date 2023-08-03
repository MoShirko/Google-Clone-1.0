import React from 'react';
// import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from "./_app";
import HeaderOptions from "../components/HeaderOptions";
/**
 * Verify something should render
 */
 test('App should render', () => {
    render(<HeaderOptions/>);
    const pTag = screen.getByRole('settings');
    expect(pTag).toContain("Settings");
  });