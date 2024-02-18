import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1> <br />
        <h3>Enter a word...</h3>
        <Dictionary />
      </div>
      <footer>
        Coded by{" "}
        <a
          href="https://github.com/luciebarbierdearnley"
          target="_blank"
          rel="noreferrer">
          Lucie Barbier-Dearnley
        </a>
        . Open-sourced on{" "}
        <a
          href="https://github.com/luciebarbierdearnley/dictionary-project"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
        . Hosted on{" "}
        <a
          href="https://dictionary-app-lbd.netlify.app/"
          target="_blank"
          rel="noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}
