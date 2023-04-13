const repeatString = function (string, num) {
  let repeatedString = "";
  while (num > 0) {
    repeatedString += string;
    num--;
  }
  return repeatedString;
};

repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;

/* Repeat variable (string) n times, if n is a positive number. 
If number is negative, return "ERROR". If number is 0, return empty string. */
