import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [endResult, setEndResult] = React.useState("");

  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, checkGuess(guess, answer)];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setEndResult("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setEndResult("lost");
    }
  };

  return (
    <>
      {endResult === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {endResult === "lost" && <LostBanner answer={answer} />}
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} endResult={endResult} />
    </>
  );
}

export default Game;
