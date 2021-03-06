import logo from "./logo.svg";
import "./App.css";
import Headerbar from "./components/Headerbar";
import Visual from "./components/Visual";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Headerbar />
      <Visual />
      <Sidebar />
    </div>
  );
}

export default App;
