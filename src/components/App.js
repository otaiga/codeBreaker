import { useState } from "react";
import { generateRandom, colors } from "../support/utils";
import Peg from "./Peg";
import KeyPegs from "./keyPegs";
import Popup from "./Popup";

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
        }
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
          if (
            matchedFiltered.length < codeFiltered.length &&
            keyPegs[index] !== 2
          ) {
            keyPegs[index] = 1;
            alreadyMatched.push(currentPegSelection[index]);
          }
        }
      }
    };

    checkDirectMatch();
    checkCloseMatch();
    return keyPegs.sort();
  };

  const chances = 10;
  const [currentRow, setCurrentRow] = useState(chances - 1);
  const [currentPegSelection, setCurrentPegSelection] = useState([0, 0, 0, 0]);
  const [codeToCrack, setCodeToCrack] = useState(generateCodeToCrack());
  const [keyPegColorIndex, setKeyPegColorIndex] = useState([]);
  const [pegColors, setPegColors] = useState([]);
  const [popup, setPopup] = useState({ show: false });
  const [showCode, setShowCode] = useState(false);

  const resetGame = () => {
    setShowCode(false);
    setCurrentPegSelection([0, 0, 0, 0]);
    setCodeToCrack(generateCodeToCrack());
    setCurrentRow(chances - 1);
    setKeyPegColorIndex([]);
    setPegColors([]);
  };

  const handleOkClick = () => {
    if (popup.reset) {
      resetGame();
    }
    setPopup({ show: false });
  };

  const submittedForRow = () => {
    if (JSON.stringify(codeToCrack) === JSON.stringify(currentPegSelection)) {
      setShowCode(true);
      setPopup({
        title: "Congratulations!",
        message: "You have cracked the code. Try again?",
        show: true,
        reset: true,
      });
      return;
    }
    if (currentRow === 0) {
      setShowCode(true);
      setPopup({
        title: "Game End!",
        message: "You have failed to crack the code. Try again?",
        show: true,
        reset: true,
      });
      return;
    }

    const newRowIndex = currentRow - 1;
    setPopup({
      title: "Incorrect!",
      message: "Please try again",
      show: true,
    });
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
          {new Array(4).fill(undefined).map((_val, i) => (
            <Peg
              key={i}
              pegIndex={i}
              currentRow={currentRow}
              rowIndex={index}
              handlePegColor={handlePegColor}
              colorsSet={pegColors[index]}
            />
          ))}
        </div>
        <div className="px-2 py-0 sm:py-3">
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
              <div className={`flex mr-5 ${showCode ? "z-50" : null}`}>
                {new Array(4).fill(undefined).map((_val, index) => (
                  <div
                    key={index}
                    className={`border mx-2 border-black rounded-full ${
                      showCode ? colors[codeToCrack[index]] : "bg-gray-500"
                    } sm:h-12 sm:w-12 h-8 w-8`}
                  />
                ))}
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
      {popup && popup.show && (
        <Popup
          title={popup.title}
          message={popup.message}
          handleOkClick={handleOkClick}
        />
      )}
    </div>
  );
};

export default App;
