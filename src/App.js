import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was created by Marline John and is{" "}
          <a
            href="https://github.com/marlinejohn/weather-app-react"
            target="_blank "
            rel="noreferrer"
          >
            Open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
