import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#cc9933",
  primaryBright: "#cc6666",
  primaryDark: "#ab1818",
  secondary: "#ffcc33",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f5ddda",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#fccfd0",
  text: "#e33720",
  textDisabled: "#BDC2C4",
  textSubtle: "#ba8482",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#cc3333",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#a12000",
  tertiary: "#353547",
  text: "#fce6e2",
  textDisabled: "#666171",
  textSubtle: "#d4948b",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
