// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  let average = 0;
  grades.forEach((grade) => {
    average += grade;
  });
  return Number((average / grades.length).toFixed(0));
}
// function calculateAverage(num1, num2, num3, num4, num5) {
//   let average = (num1 + num2 + num3 + num4 + num5) / 5;
//   return average.toFixed(0);
// }
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
