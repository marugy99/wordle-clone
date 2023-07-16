import React from "react";

function GuessInput({ handleSubmitGuess, endResult }) {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.length !== 5) {
      window.alert("The word must be 5 characters!");
      return;
    }

    handleSubmitGuess(guess);
    setGuess("");
  };

  const disable = endResult === "won" || endResult === "lost";

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disable}
        id="guess-input"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        type="text"
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
