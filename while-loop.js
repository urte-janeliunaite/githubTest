var myArray = [];
var i = 5;
while(i >= 0) {
  myArray.push(i); // adds members to the array
  i--; // -> -1
}
console.log(myArray);

// do...while loop:
var myArray = [];
var i = 10;
while (i < 5) {
  myArray.push(i);
  i++;
}

// CHANGED TO:
var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5);
