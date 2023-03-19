import React from "react";

// react icons
import { MdKeyboardBackspace } from "react-icons/md";

// Link
import { Link } from "react-router-dom";

// stylesheet
import "../css/Result.css";

const result = ({ input }) => {
  const result = input.split("");
  return (
    <div className="result">
      <Link to="/">
        <div className="go_back">
          <MdKeyboardBackspace />
        </div>
      </Link>
      {result.map((item) => (
        <div className="result_card" >
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default result;
