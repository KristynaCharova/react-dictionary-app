import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="Dictionary" />
        </main>
        <footer className="App-footer">
          {" "}
          This project was coded by Kristyna Charova and is open-sorced on {""}
          <a
            href="https://github.com/KristynaCharova/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://sad-jackson-4b82b2.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
