// function getWeather(location, callback){
//   callback(undefined, 78); //success
//   callback('City not found'); //error
// }
//
// // getWeather('Vancouver', function(err, temp){
// //   if(err){
// //     console.log('error', err);
// //   }else {
// //     console.log('success', temp);
// //   }
// // });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Vancouver').then(function(temp){
//   //success
//   console.log('promise success', temp);
// }, function(err){
//   //error
//   console.log('nope', err);
// });

//Challenge Area
// function addPromise(a, b){
//   return new Promise(function(resolve, reject){
//     if(typeof a === 'number' && typeof b === 'number'){
//       resolve(a + b);
//     }else {
//       reject('One or both of the parameters is not a number.');
//     }
//   });
// }
//
// addPromise(4, 3).then(function(sum){
//   console.log('promise success', sum);
// }, function(err){
//   console.log('Not a number', err);
// });
//
// addPromise(4, 'a').then(function(sum){
//   console.log('promise success', sum);
// }, function(err){
//   console.log('Not a number', err);
// });
