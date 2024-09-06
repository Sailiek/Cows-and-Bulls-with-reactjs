import React, { useState, useEffect } from 'react';
import numGenerator from './numGenerator';

const numToGuess = numGenerator();

function AnswerInput() {
  const [userInput, setUserInput] = useState('');
  const [bulls, setBulls] = useState(0);
  const [cows, setCows] = useState(0);

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  function handleClick() {
    if (userInput.length !== 4) {
      alert("Please enter a 4-digit number");
      return;
    }

    const numToGuessInArray = Array.from(String(numToGuess), Number);
    const userInputArray = Array.from(String(userInput), Number);

    let bullsCount = 0;
    let cowsCount = 0;

    
    userInputArray.forEach((digit, index) => {
      if (digit === numToGuessInArray[index]) {
        bullsCount++;
      } else if (numToGuessInArray.includes(digit)) {
        cowsCount++;
      }
    });

    setBulls(bullsCount);
    setCows(cowsCount);
  }

  return (
    <>
      <input 
        type="text" 
        pattern="\d{4}" 
        maxLength="4" 
        value={userInput} 
        onChange={handleInputChange} 
        placeholder="Enter 4 digits"
      />
      <button onClick={handleClick}>Test</button>
      <p>Bulls: {bulls}</p>
      <p>Cows: {cows}</p>
    </>
  );
}

export default AnswerInput;
