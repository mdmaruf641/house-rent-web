import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Renters from "./Components/Renters/Renters";

function App() {
  return (
    <div className="App">
      {/* header part */}
      <Header></Header>

      {/* main part */}
      <Renters></Renters>
    </div>
  );
}

export default App;
