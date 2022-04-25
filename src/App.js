import "./App.css";
import DictionaryMain from "./DictionaryMain";

export default function App() {
  return (
    <div className="App">
      <div className="contain">
        <div className="hero">
          <img
            className="dictionary-icon"
            src="images/dictionary-icon.png"
            alt="Dictionary Icon"
            width={100}
          />
          <h1>/ˈdikSHəˌnerē/</h1>
          <h2>
            <em>What word are you looking for?</em>
          </h2>
        </div>
        <main>
          <DictionaryMain />
        </main>
      </div>
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
          <br />
          <a
            href="https://animated-gradient-background-generator.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Animated Background
          </a>
        </footer>
      </small>
    </div>
  );
}
