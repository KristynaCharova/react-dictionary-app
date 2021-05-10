import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          {" "}
          Open-sorced code on {""}
          <a href="https://github.com/KristynaCharova/react-dictionary-app">
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
