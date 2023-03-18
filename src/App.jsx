import { useState } from "react";
// stylesheet
import "./App.css";

// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import InitialPage from "./pages/InitialPage";
import Result from "./pages/Result";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<InitialPage input={input} setInput={setInput} />}
          />
        </Routes>
        <Routes>
          <Route path="/result/:text" element={<Result resultInput={input}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
