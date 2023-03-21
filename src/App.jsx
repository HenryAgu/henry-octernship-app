import { useState } from "react";
// stylesheet
import "./App.css";

// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import InitialPage from "./pages/InitialPage";
import Results from "./pages/Results";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <h1>Welcome To DupliFree</h1>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<InitialPage input={input} setInput={setInput} />}
          />
        </Routes>
        <Routes>
          <Route
            path="/result/:text"
            element={<Results input={input} setInput={setInput}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
