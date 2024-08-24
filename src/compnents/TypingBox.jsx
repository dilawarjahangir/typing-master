import React, { useState } from "react";
import { generate, count } from "random-words";
import UpperMenu from "./UpperMenu";
const TypingBox = () => {
  const [wordsArray, setWordsArray] = useState(() => generate(50));

  return (
    <div>
      <UpperMenu countDown={5}  />
    <div className="type-box">
      <div className="words">
        {wordsArray.map((word, wordIndex) => (
          <span className="word" key={wordIndex}>
             { word.split("").map((char, charIndex) => (
               <span key={charIndex}>{char}</span>
              ))}
          </span>
        ))}
      </div>
    </div>
        </div>
  );
};

export default TypingBox;
