import { useState } from "react";
import { generateRandom, colors } from "../support/utils";
import Peg from "./Peg";
import KeyPegs from "./keyPegs";

const App = () => {
  const generateCodeToCrack = () =>
    new Array(4).fill(undefined).map(generateRandom);

  const calculateKeyPegs = () => {
    const keyPegs = [];
    const alreadyMatched = [];

    const checkDirectMatch = () => {
      for (let index = 0; index < currentPegSelection.length; index++) {
        if (codeToCrack[index] === currentPegSelection[index]) {
          keyPegs[index] = 2;
          alreadyMatched.push(currentPegSelection[index]);
          continue;
        }
        keyPegs[index] = 0;
      }
    };

    const checkCloseMatch = () => {
      for (let index = 0; index < currentPegSelection.length; index++) {
        if (codeToCrack.includes(currentPegSelection[index])) {
          const matchedFiltered = alreadyMatched.filter(
            (val) => val === currentPegSelection[index]
          );
          const codeFiltered = codeToCrack.filter(
            (val) => val === currentPegSelection[index]
          );
          if (matchedFiltered.length < codeFiltered.length) {
            keyPegs[index] = 1;
            alreadyMatched.push(currentPegSelection[index]);
          }
          continue;
        }
      }
    };

    checkDirectMatch();
    checkCloseMatch();
    return keyPegs;
  };

  const chances = 10;
  const [currentRow, setCurrentRow] = useState(chances - 1);
  const [currentPegSelection, setCurrentPegSelection] = useState([0, 0, 0, 0]);
  const [codeToCrack, setCodeToCrack] = useState(generateCodeToCrack());
  const [keyPegColorIndex, setKeyPegColorIndex] = useState([]);
  const [pegColors, setPegColors] = useState([]);

  const resetGame = () => {
    setCurrentPegSelection([0, 0, 0, 0]);
    setCodeToCrack(generateCodeToCrack());
    setCurrentRow(chances - 1);
    setKeyPegColorIndex([]);
    setPegColors([]);
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
    const keyPegs = calculateKeyPegs();
    const updatedKeyPegs = [...keyPegColorIndex];
    updatedKeyPegs.push(keyPegs);
    setKeyPegColorIndex(updatedKeyPegs);
    setCurrentPegSelection([0, 0, 0, 0]);
    setCurrentRow(newRowIndex);
  };

  const handlePegColor = (pegIndex, colorIndex) => {
    const updatedPegSelection = [...currentPegSelection];
    const updatedPegColors = [...pegColors];
    updatedPegSelection[pegIndex] = colorIndex;
    updatedPegColors[currentRow] = updatedPegSelection;
    setCurrentPegSelection(updatedPegSelection);
    setPegColors(updatedPegColors);
  };

  const renderBoard = () =>
    new Array(chances).fill(undefined).map((_val, index) => (
      <div key={index} className="flex items-center justify-center">
        <KeyPegs keyPegColorIndex={keyPegColorIndex[chances - 1 - index]} />
        <div className="flex justify-center">
          <Peg
            pegIndex={0}
            currentRow={currentRow}
            rowIndex={index}
            handlePegColor={handlePegColor}
            colorsSet={pegColors[index]}
          />
          <Peg
            pegIndex={1}
            currentRow={currentRow}
            rowIndex={index}
            handlePegColor={handlePegColor}
            colorsSet={pegColors[index]}
          />
          <Peg
            pegIndex={2}
            currentRow={currentRow}
            rowIndex={index}
            handlePegColor={handlePegColor}
            colorsSet={pegColors[index]}
          />
          <Peg
            pegIndex={3}
            currentRow={currentRow}
            rowIndex={index}
            handlePegColor={handlePegColor}
            colorsSet={pegColors[index]}
          />
        </div>
        <div className="p-3">
          <button
            className={`bg-green-500 hover:bg-green-700 rounded text-white items-center p-2 ${
              currentRow === index ? null : "disabled opacity-0 cursor-default"
            }`}
            onClick={() => {
              if (currentRow !== index) {
                return;
              }
              if (currentPegSelection.some((a) => a === 0)) {
                return;
              }
              submittedForRow();
            }}
          >
            Go!
          </button>
        </div>
      </div>
    ));

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col h-screen">
        <div className="flex-none">
          <div className="bg-gray-500">
            <p className="text-2xl text-white p-2 text-center">Code Breaker!</p>
          </div>
        </div>
        <main className="container flex-auto mx-auto bg-gray-300">
          <div className="p-2 sm:p-8">
            <div className="flex flex-col justify-center items-center font-bold">
              <p className="pb-2">Crack the code</p>
              <div className="flex mr-5">
                <div
                  className={`border mx-2 border-black rounded-full bg-gray-500 sm:h-12 sm:w-12 h-10 w-10`}
                />
                <div
                  className={`border mx-2 border-black rounded-full bg-gray-500 sm:h-12 sm:w-12 h-10 w-10`}
                />
                <div
                  className={`border mx-2 border-black rounded-full bg-gray-500 sm:h-12 sm:w-12 h-10 w-10`}
                />
                <div
                  className={`border mx-2 border-black rounded-full bg-gray-500 sm:h-12 sm:w-12 h-10 w-10`}
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-300 pb-2">
            <div>{renderBoard()}</div>
          </div>
        </main>
        <div className="flex-none">
          <footer className="flex flex-col items-center pb-2 text-white bg-gray-700 ">
            <div className="flex justify-between pt-2 text-xs">
              <p>© 2020&nbsp;Otaiga</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
