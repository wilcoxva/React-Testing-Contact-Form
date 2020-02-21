import React from "react";
import { render, getByPlaceholderText } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

describe("things to work as expected", () => {

  it("checks placeholder text for last name", () => {
    const { getByPlaceholderText } = render(<App />)
    expect(getByPlaceholderText('luo')).toBeInTheDocument()
  })

  it("checks placeholder text for first name", () => {
    const { getByPlaceholderText } = render(<App />)
    expect(getByPlaceholderText('bill')).toBeInTheDocument();
  })

  it("checks to see if the button has an attribute", () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('button')).toBeInTheDocument();
  })

  it("checks if lastname is required", () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('lastName')).toBeRequired();
  })

  it("checks if firstname is required", () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('firstName')).toBeRequired();
  })
});