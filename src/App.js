import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Dictionary <br />
        Enter a word...
        <Dictionary />
      </div>
      <footer>
        Coded by{" "}
        <a href="https://github.com/luciebarbierdearnley">
          Lucie Barbier-Dearnley
        </a>
        . Open-sourced on{" "}
        <a href="https://github.com/luciebarbierdearnley/dictionary-project">
          GitHub
        </a>
        . Hosted on{" "}
        <a href="https://dictionary-app-lbd.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}
