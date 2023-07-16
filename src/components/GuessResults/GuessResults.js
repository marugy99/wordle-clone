import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  const attempts = range(NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {attempts.map((index) => (
        <p key={index} className="guess">
          <Guess guess={guesses[index] ?? ""} />
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
