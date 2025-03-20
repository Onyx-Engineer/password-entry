import "./App.css";
import PasswordEntry from "./components/PasswordEntry";

function App() {
  return (
    <>
      <nav className={"flex p-4 bg-gray-400"}>
        <h1>Password Entry</h1>
      </nav>
      <PasswordEntry />
    </>
  );
}

export default App;
