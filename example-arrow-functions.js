var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Eina'))

// var person = {
//   name: 'Eina',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// Challenge
function add(a, b){
  return a + b;
}

console.log(add(1,3));
console.log(add(9,0));


//addStatement = {}
function addArray(arr){
  return arr.reduce((prev, curr) => {
    return prev + curr;
  });
}

console.log( addArray([4, 67, 99]) );

//addExpression = just return it
function lettersToNum(arr){
  return arr.map((letters) => letters.charCodeAt());
}

console.log( lettersToNum(['a', 'b', 'c']) );
