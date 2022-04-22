import "./App.css";
import DictionaryMain from "./DictionaryMain";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <img
          src="images/dictionary-icon.png"
          alt="Dictionary Icon"
          width={100}
        />
        <main>
          <DictionaryMain />
        </main>
        <small>
          <footer>
            Project coded by Jess Zhang and open-sourced on{" "}
            <a
              href="https://github.com/jlynzhang/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
          </footer>
        </small>
      </div>
    </div>
  );
}
