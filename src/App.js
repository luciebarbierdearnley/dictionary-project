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
      <footer>Coded by Lucie</footer>
    </div>
  );
}
