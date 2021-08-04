"use strict";

function decimalToBinary(decNumber) {
  var remStack = new Stack();
  var number = decNumber;
  var rem;
  var binaryString = '';

  while (number > 0) {
    // {1}
    rem = Math.floor(number % 2); // {2}

    remStack.push(rem); // {3}

    number = Math.floor(number / 2); // {4}
  }

  while (!remStack.isEmpty()) {
    // {5}
    binaryString += remStack.pop().toString();
  }

  return binaryString;
} //console.log(decimalToBinary(233)); // 11101001


function baseConverter(decNumber, base) {
  var remStack = new Stack();
  var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {6}

  var number = decNumber;
  var rem;
  var baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; // {7}
  }

  console.log(digits[1]);
  return baseString;
}

baseConverter(100655, 6);