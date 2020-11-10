import { colors } from "../support/utils";

const Peg = ({ currentRow, rowIndex, pegIndex, handlePegColor, colorsSet }) => {
  const colorIndex = colorsSet ? colorsSet[pegIndex] : 0;
  return (
    <div
      className={`border mx-2 border-black rounded-full ${colors[colorIndex]} sm:h-12 sm:w-12 h-8 w-8`}
      onClick={() => {
        if (currentRow !== rowIndex) {
          return;
        }
        let newColorIndex = colorIndex + 1;
        if (newColorIndex > colors.length - 1) {
          newColorIndex = 1;
        }
        handlePegColor(pegIndex, newColorIndex);
      }}
    ></div>
  );
};

export default Peg;
