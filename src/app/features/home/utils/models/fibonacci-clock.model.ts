export enum FibonacciClockSquareColor {
  White = 0,  // disabled
  Red = 1,    // hours only
  Green = 2,  // minutes only
  Blue = 3    // hours & minutes
};

export interface FibonacciClockSquare {
  value: number;
  color: number;
};
