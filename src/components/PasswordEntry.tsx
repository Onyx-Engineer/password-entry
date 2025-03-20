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
      <section className={"m-4"}>
        <form
          className={"flex flex-col card bg-gray-100 p-4"}
          onSubmit={handleSubmit}
        >
          <div className={"flex flex-col py-4"}>
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
          </div>

          <div className={"flex flex-col py-4"}>
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
          </div>
          <button className={"bg-blue-500 py-1"} tabIndex={0} type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default PasswordEntry;
