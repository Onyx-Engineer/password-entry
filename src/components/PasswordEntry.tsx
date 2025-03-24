import React, { useState } from "react";
import { debounce } from "lodash";

export type ValidationFieldsProps = {
  name: string;
  password: string;
  confirmPassword: string;
};

const validateFields = (submittedFields: ValidationFieldsProps) => {
  const errors: ValidationFieldsProps = {
    name: "",
    password: "",
    confirmPassword: "",
  };

  if (submittedFields.name.length < 2) {
    errors.name = "Name must be at least 2 characters long";
  }

  if (submittedFields.password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  if (submittedFields.confirmPassword !== submittedFields.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

export const PasswordEntry: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<ValidationFieldsProps>({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("name:", name);
    console.log("password: ", password);
    console.log("confirm password: ", confirmPassword);
    const validateErrors = validateFields({ name, password, confirmPassword });
    setErrors(validateErrors);
    if (Object.keys(validateErrors).length === 0) {
      console.log("Submitted");
    }
  };

  const handleBlur = () => {
    setErrors(validateFields({ name, password, confirmPassword }));
  };

  return (
    <>
      <section className={"flex flex-col m-4 p-4 round-md items-center my-10"}>
        <form
          className={"flex flex-col card bg-gray-100 p-6 w-1/3"}
          onSubmit={handleSubmit}
        >
          <h1 className={"text-center text-3xl"}>Login</h1>
          <div className={"flex flex-col pb-2"}>
            <label className={"py-2"} htmlFor="name">
              Name:
            </label>
            <input
              className={"bg-white rounded-sm p-2"}
              onChange={debounce(
                (e: React.FormEvent) =>
                  setName((e.target as HTMLInputElement).value),
                300
              )}
              onBlur={handleBlur}
              tabIndex={0}
              type="name"
              id="name"
              placeholder="Enter name"
              required
            />
            {errors.name && (
              <p className="text-red-500" id="nameError">
                {errors.name}
              </p>
            )}
          </div>
          <div className={"flex flex-col pb-2"}>
            <label className={"py-2"} htmlFor="password">
              Password:
            </label>
            <input
              className={"bg-white rounded-sm p-2"}
              onChange={debounce(
                (e: React.FormEvent) =>
                  setPassword((e.target as HTMLInputElement).value),
                300
              )}
              onBlur={handleBlur}
              tabIndex={0}
              type="password"
              id="password"
              placeholder="Enter password"
              required
            />
            {errors.password && (
              <p className="text-red-500" id="passwordError">
                {errors.password}
              </p>
            )}
          </div>

          <div className={"flex flex-col pb-2"}>
            <label className={"py-2"} htmlFor="confirm-password">
              Confirm Password:
            </label>
            <input
              className={"bg-white rounded-sm p-2"}
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
              onBlur={handleBlur}
            />
            {errors.confirmPassword && (
              <p className="text-red-500" id="confirmPasswordErrors">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            className={"bg-blue-500 p-2 my-3 rounded-sm"}
            tabIndex={0}
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default PasswordEntry;
