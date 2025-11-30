/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-11-29
 * @fileoverview This program calculates the area of a circle using constants.
 */

// initialize constants
const PI: number = 3.14159;
const RADIUS: number = 5.6;

// INPUT - none

// PROCESS
// calculate the area
let area: number = PI * RADIUS * RADIUS;

// OUTPUT
// display the result
console.log(
  "The area of a circle with a radius of " +
  RADIUS +
  " cm is " +
  area.toFixed(2) +
  " cm²."
);

("\nDone.");