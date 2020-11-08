import { useState } from "react";
import Peg from "./peg";

const App = () => {
  const codeToCrack = [3, 4, 1, 3];
  const startingRow = 9;
  const [currentRow, setCurrentRow] = useState(startingRow);
  const [currentPegSelection, setCurrentPegSelection] = useState([0, 0, 0, 0]);

  const submittedForRow = () => {
    const newRowIndex = currentRow - 1;
    if (JSON.stringify(codeToCrack) === JSON.stringify(currentPegSelection)) {
      alert("Game End! You Cracked the code!");
      return;
    }
    if (newRowIndex === 0) {
      alert("Game End!");
      setCurrentRow(startingRow);
    }
    alert("No luck, try again");
    setCurrentPegSelection([0, 0, 0, 0]);
    setCurrentRow(newRowIndex);
  };

  const handlePegColor = (pegIndex, colorIndex) => {
    const updatedPegSelection = [...currentPegSelection];
    updatedPegSelection[pegIndex] = colorIndex;
    setCurrentPegSelection(updatedPegSelection);
  };

  const renderBoard = () =>
    new Array(10).fill(undefined).map((_val, index) => (
      <div key={index} className="flex justify-center items-center">
        <div className="flex justify-center bg-gray-200 p-2">
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
              className="bg-green-500 rounded text-white items-center p-3 w-20"
              onClick={() => {
                submittedForRow();
              }}
            >
              Submit
            </button>
          ) : (
            <div className="p-3 w-20" />
          )}
        </div>
      </div>
    ));

  return (
    <div className="container mx-auto">
      <div className="bg-gray-500">
        <p className="text-2xl text-white p-4 text-center">MasterMind</p>
      </div>
      {renderBoard()}
    </div>
  );
};

export default App;
