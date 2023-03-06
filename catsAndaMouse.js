// problem
// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.
// Complete the catAndMouse function below.

function catAndMouse(x, y, z) {
  // int x: Cat A's position WHICH IS AT 2
  // int y: Cat B's position WHICH IS AT 5
  // int z: Mouse C's position WHICH IS AT 4
  // The Math.abs() static method returns the absolute value of a number.
  // The absolute value of x. If x is negative (including -0), returns -x. Otherwise, returns x. The result is therefore always a positive number or 0. basically we pull the value or number from a variable and it return it as such.

  let catA = x;
  let catB = y;
  let mouseC = z;
  // If cat A catches the mouse first, print Cat A.
  if (Math.abs(catA - mouseC) < Math.abs(catB - mouseC)) {
    return "Cat A";
  }
  // If cat B catches the mouse first, print Cat B.
  if (Math.abs(catB - mouseC) < Math.abs(catA - mouseC)) {
    return "Cat B";
  }
  // if both cars get mouse, print mouse C
  if (Math.abs(catA - catB) === Math.abs(catB - catA)) {
    return "Mouse C";
  }
}
