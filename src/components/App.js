import { useState } from "react";
import { colors } from "../support/utils";
import Peg from "./Peg";
import KeyPegs from "./keyPegs";

const App = () => {
  const generateRandom = () =>
    Math.floor(Math.random() * (colors.length - 1) + 1);

  const generateCodeToCrack = () => [
    generateRandom(),
    generateRandom(),
    generateRandom(),
    generateRandom(),
  ];

  const chances = 10;
  const [currentRow, setCurrentRow] = useState(chances - 1);
  const [currentPegSelection, setCurrentPegSelection] = useState([0, 0, 0, 0]);
  const [codeToCrack, setCodeToCrack] = useState(generateCodeToCrack());
  const [keyPegColorIndex, setKeyPegColorIndex] = useState([]);

  const resetGame = () => {
    setCurrentPegSelection([0, 0, 0, 0]);
    setCodeToCrack(generateCodeToCrack());
    setCurrentRow(chances - 1);
    //todo reset all pegs
  };

  const submittedForRow = () => {
    if (JSON.stringify(codeToCrack) === JSON.stringify(currentPegSelection)) {
      alert("Game End! You Cracked the code!");
      resetGame();
      return;
    }
    if (currentRow === 0) {
      alert("No luck - Game End!");
      resetGame();
      return;
    }
    const newRowIndex = currentRow - 1;
    alert("No luck, try again");
    const keyPegs = [];
    const alreadyMatched = [];
    for (let i = 0; i < currentPegSelection.length; i++) {
      if (codeToCrack[i] === currentPegSelection[i]) {
        keyPegs.push(2);
        alreadyMatched.push(i);
        continue;
      }
      if (
        codeToCrack.includes(currentPegSelection[i]) &&
        !alreadyMatched.includes(i)
      ) {
        keyPegs.push(1);
        alreadyMatched.push(i);
        continue;
      }
      keyPegs.push(0);
    }
    const updatedKeyPegs = [...keyPegColorIndex];
    updatedKeyPegs.push(keyPegs);
    setKeyPegColorIndex(updatedKeyPegs);
    setCurrentPegSelection([0, 0, 0, 0]);
    setCurrentRow(newRowIndex);
  };

  const handlePegColor = (pegIndex, colorIndex) => {
    const updatedPegSelection = [...currentPegSelection];
    updatedPegSelection[pegIndex] = colorIndex;
    setCurrentPegSelection(updatedPegSelection);
  };

  const renderBoard = () =>
    new Array(chances).fill(undefined).map((_val, index) => (
      <div key={index} className="flex justify-center p-2 items-center">
        <KeyPegs keyPegColorIndex={keyPegColorIndex[chances - 1 - index]} />
        <div className="flex justify-center">
          <Peg
            pegIndex={0}
            currentRow={currentRow}
            rowIndex={index}
            handlePegColor={handlePegColor}
          />
          <Peg
            pegIndex={1}
            currentRow={currentRow}
            rowIndex={index}
            handlePegColor={handlePegColor}
          />
          <Peg
            pegIndex={2}
            currentRow={currentRow}
            rowIndex={index}
            handlePegColor={handlePegColor}
          />
          <Peg
            pegIndex={3}
            currentRow={currentRow}
            rowIndex={index}
            handlePegColor={handlePegColor}
          />
        </div>
        <div className="p-3">
          {currentRow === index ? (
            <button
              className="bg-green-500 rounded text-white items-center p-2"
              onClick={() => {
                if (currentPegSelection.some((a) => a === 0)) {
                  return;
                }
                submittedForRow();
              }}
            >
              Go
            </button>
          ) : null}
        </div>
      </div>
    ));

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none">
        <div className="bg-gray-500">
          <p className="text-2xl text-white p-4 text-center">Code Breaker!</p>
        </div>
      </div>
      <div className="bg-gray-300 p-8 h-full">{renderBoard()}</div>
      <div className="flex-none">
        <footer className="flex flex-col items-center pb-4 text-white bg-gray-700 ">
          <div className="flex justify-between pt-2 text-xs">
            <p>© 2020&nbsp;Otaiga</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
