import E8 from './E8Petrie.svg';
import './App.css';
import Container from "./components/Container/Container"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={E8} className="App-logo" alt="logo" />
        <p>
          Behold, it moves
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          woah man
        </a>
				<Container />
      </header>
    </div>
  );
}

export default App;
