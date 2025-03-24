import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordEntry from "../src/components/PasswordEntry";

describe("PasswordEntry component", () => {
  // TODO: Add a before each for intitalizing variables
  // TODO: Finish error validation testing
  test("renders password inputs and submit button", () => {
    render(<PasswordEntry />);

    const nameInput = screen.getByLabelText(/^Name:$/i);
    const passwordInput = screen.getByLabelText(/^Password:$/);
    const confirmPasswordInput = screen.getByLabelText(/^Confirm Password:/i);
    const submitButton = screen.getByRole("button");

    expect(nameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  test("updates password and name values correctly", async () => {
    render(<PasswordEntry />);

    const nameInput = screen.getByLabelText(/^Name:$/i);
    const passwordInput = screen.getByLabelText(/^Password:$/);
    const confirmPasswordInput = screen.getByLabelText(/^Confirm Password:/i);
    const mockPassword = "#46464DE";
    const mockName = "Kendall Kitt";

    await userEvent.type(nameInput, mockName);
    await userEvent.type(passwordInput, mockPassword);
    await userEvent.type(confirmPasswordInput, mockPassword);

    expect(nameInput).toHaveValue(mockName);
    expect(passwordInput).toHaveValue(mockPassword);
    expect(confirmPasswordInput).toHaveValue(mockPassword);
  });
  test("display errors if don't match", () => {
    render(<PasswordEntry />);
  });
});
