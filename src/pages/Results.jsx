import React, { useState, useEffect } from "react";

// classname
import classNames from "classnames";

import "../css/Result.css";

// Link
import { Link } from "react-router-dom";

// react icons
import { MdKeyboardBackspace } from "react-icons/md";
import { ImBin } from "react-icons/im";

const Results = ({ input }) => {
  const [arrayObject, setArrayObject] = useState([]);
  const [originalText, setOriginalText] = useState("");
  const [finalText, setFinalText] = useState("");
  const [success, setSuccess] = useState(false);

  // handle delete
  const handleDelete = (item) => {
    const newArray = arrayObject.filter(
      (obj) => !(obj.char === item.char && obj.id !== item.id)
    );
    setArrayObject(newArray);
    let newStr = "";
    for (let i = 0; i < newArray.length; i++) {
      newStr = `${newStr}${newArray[i].char}`;
    }
    console.log(newStr);
    setFinalText(newStr);
    const findDuplicateWords = (str) => {
      const strArr = str.split(" ");
      const res = [];
      for (let i = 0; i < strArr.length; i++) {
        if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
          if (!res.includes(strArr[i])) {
            res.push(strArr[i]);
          }
        }
      }
      return res.join(" ");
    };
    if (findDuplicateWords(newStr).length === 0) {
      setSuccess(true);
    }
  };

  useEffect(() => {
    setFinalText(input);
    setOriginalText(input);
    const empty = [];
    for (let i = 0; i < input.length; i++) {
      const objItem = { char: input[i], id: i };
      empty.push(objItem);
    }
    setArrayObject(empty);
  }, []);
  return (
    <div className="result">
      <div className="result_menu">
        <Link to="/">
          <div className="go_back">
            <MdKeyboardBackspace />
          </div>
        </Link>
      </div>

      <div className="card">
        {arrayObject.map((item) => (
          <div
            className={classNames({
              "letter-a": item.char === "a",
              "letter-b": item.char === "b",
              "letter-c": item.char === "c",
              "letter-d": item.char === "d",
              "letter-e": item.char === "e",
              "letter-f": item.char === "f",
              "letter-g": item.char === "g",
              "letter-h": item.char === "h",
              "letter-i": item.char === "i",
              "letter-j": item.char === "j",
              "letter-k": item.char === "k",
              "letter-l": item.char === "l",
              "letter-m": item.char === "m",
              "letter-n": item.char === "n",
              "letter-o": item.char === "o",
              "letter-p": item.char === "p",
              "letter-q": item.char === "q",
              "letter-r": item.char === "r",
              "letter-s": item.char === "s",
              "letter-t": item.char === "t",
              "letter-u": item.char === "u",
              "letter-v": item.char === "v",
              "letter-w": item.char === "w",
              "letter-x": item.char === "x",
              "letter-y": item.char === "y",
              "letter-z": item.char === "z",
            })}
            key={item.id}
          >
            <div className="delete">
              <ImBin onClick={() => handleDelete(item)} />
            </div>
            <p>{item.char}</p>
          </div>
        ))}
      </div>
      {success ? (
        <div className="original_final">
          <h3>Success!!!!</h3>
          <span className="original">
            <b>Original Text:</b> {originalText}
          </span>
          <span className="final">
            <b>Final Text:</b> {finalText}
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Results;
