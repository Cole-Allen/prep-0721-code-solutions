const person = {
  firstName: 'Cole',
  lastName: 'Allen',
  hobby: 'Gaming'
};

var fullName = person.firstName + ' ' + person.lastName;

person.job = 'Unemployed';
person.previousJob = 'cashier';

console.log(person);
console.log("The person's name is " + fullName);
console.log("The person's current job is: " + person.job);
console.log("The person's previous job was: " + person.previousJob);
console.log('The complete person object: ' + person);
