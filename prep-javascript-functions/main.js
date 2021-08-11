function addTwoNumbers(x, y) {
  return x + y;
}

function convertHoursToMinutes(hours) {
  return hours * 60;
}

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

function getCircleCircumference(radius) {
  return (radius * 2) * 3.1415;
}

function getFullname(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function cube(number) {
  return number * number * number;
}

var minutesFromHours = convertHoursToMinutes(5);
var greeting = getGreeting('World');
var addMult5 = addAndMultiplyBy5(40, 22);
var multiDivide5 = multiplyAndDivideBy5(20, 29);
var subtract = subtractTwoNumbers(30, 7);
var circum = getCircleCircumference(7);
var fullName = getFullname('Cole', 'Allen');
var cubed = cube(5);

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);
console.log('Hours to minutes:', minutesFromHours);
console.log('Greeting:', greeting);
console.log('addAndMultiplyBy5', addMult5);
console.log('multiplyAndDivideBy5', multiDivide5);
console.log('subtractTwoNumbers', subtract);
console.log('getCircleCircumference', circum);
console.log('getFullName', fullName);
console.log('cube', cubed);
