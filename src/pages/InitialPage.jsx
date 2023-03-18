import React from "react";
// React Navigate
import { useNavigate } from "react-router-dom";
// stylesheet
import "../css/InitialPage.css";

const InitialPage = ({ input, setInput }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // navigate(input ? "/result" : "/")
    e.preventDefault();
    if (!input || input.trim() === "" || input == null) {
      alert("Enter a text, input can't be empty");
      navigate("/");
    } else {
      navigate(`/result/${input}`);
    }
  };
  return (
    <div className="initial_page">
      <div className="form">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter a text"
          required
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default InitialPage;
