/*
This file holds all the helper functions. These functions do math calculation.
*/
const helpers = {
  AngleToRads: function (angleIngDeg: number): number {
    return (Math.PI / 180) * angleIngDeg;
  },
  Enumerate: function* (count: any) {
    let i = 0;
    while (i < count) yield i++;
  },
};
export default helpers;
