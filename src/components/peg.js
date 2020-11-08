import { useState } from "react";
import { colors } from "../support/utils";

const Peg = ({ currentRow, rowIndex, pegIndex, handlePegColor }) => {
  const [pegColorIndex, setPegColorIndex] = useState(0);

  return (
    <div
      className={`border m-2 border-black rounded-full ${colors[pegColorIndex]} h-12 w-12`}
      onClick={() => {
        if (currentRow !== rowIndex) {
          return;
        }
        let newColorIndex = pegColorIndex + 1;
        if (newColorIndex > colors.length - 1) {
          newColorIndex = 1;
        }
        handlePegColor(pegIndex, newColorIndex);
        setPegColorIndex(newColorIndex);
      }}
    ></div>
  );
};

export default Peg;
