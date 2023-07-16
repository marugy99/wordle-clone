import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <>
      {range(5).map((index) => (
        <span
          key={index}
          className={`cell ${guess[index] ? guess[index].status : ""}`}
        >
          {guess[index] ? guess[index].letter : undefined}
        </span>
      ))}
    </>
  );
}

export default Guess;
