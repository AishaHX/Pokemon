import { useState } from "react";
import "./App.css";
import PokemonApplication from "./PokemonApplication";

function App() {
  const [showApp, setShowApp] = useState(false);

  function startApp() {
    setShowApp(true);
  }
  return (
    <div className="App">
      {!showApp ? (
        <button className="btn" onClick={startApp}>
          Start Pokemon App
        </button>
      ) : (
        <PokemonApplication />
      )}
    </div>
  );
}

export default App;
