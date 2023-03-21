import React,{useState} from "react";

// react icons
import { MdKeyboardBackspace } from "react-icons/md";
import { ImBin } from "react-icons/im";

// classname
// import classNames from "classnames";

// Link
import { Link } from "react-router-dom";

// stylesheet
// import "../css/Result.css";

const result = ({ input }) => {
  const result = input.split("");

  // handle delete
  const handleDelete = (item) =>{
    
  }
  return (
    <div className="result">
      <Link to="/">
        <div className="go_back">
          <MdKeyboardBackspace />
        </div>
      </Link>
      {result.map((item,index) => (
        // <div className={classNames({
        //   'letter-a': item === 'a',
        //   'letter-b': item === 'b',
        //   'letter-c': item === 'c',
        //   'letter-d': item === 'd',
        //   'letter-e': item === 'e',
        //   'letter-f': item === 'f',
        //   'letter-g': item === 'g',
        //   'letter-h': item === 'h',
        //   'letter-i': item === 'i',
        //   'letter-j': item === 'j',
        //   'letter-k': item === 'k',
        //   'letter-l': item === 'l',
        //   'letter-m': item === 'm',
        //   'letter-n': item === 'n',
        //   'letter-o': item === 'o',
        //   'letter-p': item === 'p',
        //   'letter-q': item === 'q',
        //   'letter-r': item === 'r',
        //   'letter-s': item === 's',
        //   'letter-t': item === 't',
        //   'letter-u': item === 'u',
        //   'letter-v': item === 'v',
        //   'letter-w': item === 'w',
        //   'letter-x': item === 'x',
        //   'letter-y': item === 'y',
        //   'letter-z': item === 'z',
        // })}>
        //   <div className="delete"><ImBin onClick={handleDelete(item)}/></div>
        //   <p key={index}>{item}</p>
        // </div>
      ))}
    </div>
  );
};

export default result;
