const KeyPegs = ({ keyPegColorIndex }) => {
  /*
    for no correct colors: 0 "null"
    for a correct color but in wrong position: 1 "bg-black"
    for a correct color in correct position: 2 "bg-green-500"
  */
  const colors = [null, "bg-black", "bg-green-500"];

  return (
    <div className="border rounded border-black p-2">
      <div className="flex">
        <div
          className={`border border-black rounded-full h-2 w-2 ${
            colors[keyPegColorIndex ? keyPegColorIndex[0] : null]
          }`}
        ></div>
        <div
          className={`border border-black rounded-full h-2 w-2 ${
            colors[keyPegColorIndex ? keyPegColorIndex[1] : null]
          }`}
        ></div>
      </div>
      <div className="flex">
        <div
          className={`border border-black rounded-full h-2 w-2 ${
            colors[keyPegColorIndex ? keyPegColorIndex[2] : null]
          }`}
        ></div>
        <div
          className={`border border-black rounded-full h-2 w-2 ${
            colors[keyPegColorIndex ? keyPegColorIndex[3] : null]
          }`}
        ></div>
      </div>
    </div>
  );
};

export default KeyPegs;
