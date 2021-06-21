var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

console.log(myArray);

// iterate odd numbers with a for loop:
var myArray = [];
for (var i = 1; i < 9; i +=2) {
  myArray.push(i);
}

console.log(myArray);

// counting backwards with a for loop:

var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

console.log(myArray);

// iterate through an array with a for loop:
var myArr = [ 2, 3, 4, 5, 6];

var total = 0;
for (var i = 0 ; i < myArr.length; i++ ) {
  total += myArr[i];
}

console.log(total);
