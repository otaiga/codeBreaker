export const colors = [
  null,
  "bg-red-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-black",
  "bg-white",
];

export const generateRandom = () =>
  Math.floor(Math.random() * (colors.length - 1) + 1);
