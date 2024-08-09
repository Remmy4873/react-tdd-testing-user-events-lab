import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

// Portfolio Elements (existing tests)

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  const codingCheckbox = screen.getByLabelText(/coding/i);
  const designCheckbox = screen.getByLabelText(/design/i);
  const gamingCheckbox = screen.getByLabelText(/gaming/i);

  expect(codingCheckbox).toBeInTheDocument();
  expect(designCheckbox).toBeInTheDocument();
  expect(gamingCheckbox).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);

  const codingCheckbox = screen.getByLabelText(/coding/i);
  const designCheckbox = screen.getByLabelText(/design/i);
  const gamingCheckbox = screen.getByLabelText(/gaming/i);

  expect(codingCheckbox).not.toBeChecked();
  expect(designCheckbox).not.toBeChecked();
  expect(gamingCheckbox).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

  expect(nameInput.value).toBe('John Doe');
  expect(emailInput.value).toBe('john@example.com');
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);

  const codingCheckbox = screen.getByLabelText(/coding/i);

  fireEvent.click(codingCheckbox);

  expect(codingCheckbox).toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  const submitButton = screen.getByText(/submit/i);
  fireEvent.click(submitButton);

  const successMessage = screen.getByText(/form was submitted successfully/i);
  expect(successMessage).toBeInTheDocument();
});
