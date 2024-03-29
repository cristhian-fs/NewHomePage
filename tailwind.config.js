/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1216px",
    },
    colors: {
      "blue-10": "#DADCF7",
      "blue-20": "#AAB0F2",
      "blue-30": "#757FEB",
      "blue-40": "#4F5BE0",
      "blue-50": "#2130D9",
      "blue-60": "#1622A6",
      "blue-70": "#0C1578",
      "blue-80": "#060A3C",
      "blue-90": "#040514",
      "purple-10": "#ECDAF7",
      "purple-20": "#E0B9F7",
      "purple-30": "#CE9AED",
      "purple-40": "#9320D9",
      "purple-50": "#5D0F8C",
      "purple-60": "#3A0659",
      "purple-70": "#180126",
      "purple-80": "#0E0414",
      "gray-10": "#DEDAF2",
      "gray-20": "#D0CCE3",
      "gray-30": "#B4B1C4",
      "gray-40": "#9895A6",
      "gray-50": "#75737F",
      "gray-60": "#5D5C66",
      "gray-70": "#46454C",
      "gray-80": "#2F2E33",
      "gray-90": "#171719",
      "gray-100": "#0C0C0E",
      "white-dark": "#D8D9E3",
      "white-light": "#F7F7FC",
      "white-normal": "#E8E9F0",
      "black-dark": "#06070F",
      "black-light": "#151626",
      "black-normal": "#0F101F",
    },
    fontFamily: {
      sans: ['"HelveticaNowDisplay"', "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
  darkMode: "selector",
};
