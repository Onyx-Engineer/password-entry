import React, { useState } from "react";
import { debounce } from "lodash";

const PasswordEntry: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("password: ", password);
    console.log("confirm password: ", confirmPassword);
  };

  return (
    <>
      <h1>Password Entry</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">Password:</label>
          <input
            onChange={debounce(
              (e: React.FormEvent) =>
                setPassword((e.target as HTMLInputElement).value),
              300
            )}
            tabIndex={0}
            type="password"
            id="password"
            placeholder="Enter password"
            required
          />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            onChange={debounce(
              (e: React.FormEvent) =>
                setConfirmPassword((e.target as HTMLInputElement).value),
              300
            )}
            tabIndex={0}
            type="confirm-password"
            id="confirm-password"
            placeholder="Confirm password"
            required
          />
        </form>
        <button tabIndex={0} type="submit">
          Submit
        </button>
      </div>
    </>
  );
};

export default PasswordEntry;
