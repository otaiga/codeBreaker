module.exports = {
  future: {},
  purge: {
    content: ["./src/**/*.js"],
    options: {
      whitelist: [
        "bg-red-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-green-500",
        "bg-white",
        "bg-orange-500",
        "bg-black",
      ],
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
